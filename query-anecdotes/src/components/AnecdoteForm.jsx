import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createAnecdote } from '../request'
import { useNotificationDispatch } from '../NotificationContext'

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const dispatch = useNotificationDispatch()

  const displayNotification = (type, anecdote) => {
    dispatch({ type: type, payload: anecdote })
    setTimeout(() => {
      dispatch({ type: 'CLEAR' })
    }, 5000)
  }

  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: (anecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'], anecdotes.concat(anecdote))
      displayNotification('ADDED', anecdote)
    },
    onError: (err) => {
      const erroMessage = err.response.data.error
      displayNotification('ERROR', erroMessage)
    },
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({ content, votes: 0 })
  }

  return (
    <div className='form-container'>
      <div className='form-sub-con'>
        <h2>Create new</h2>
        <form className='anecdote-form' onSubmit={onCreate}>
          <div className='form-group'>
            <label htmlFor='anecdote'>Anecdote</label>
            <textarea name='anecdote' id='anecdote' placeholder='Write your anecdote here...' rows={10} />
          </div>
          <button type='submit'>Create</button>
        </form>
      </div>
    </div>
  )
}

export default AnecdoteForm
