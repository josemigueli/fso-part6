import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAnecdotes, updateAnecdote } from './request'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useNotificationDispatch } from './NotificationContext'
import './css/styles.css'

const App = () => {
  const queryClient = useQueryClient()
  const dispatch = useNotificationDispatch()

  const displayNotification = (type, anecdote) => {
    dispatch({ type: type, payload: anecdote })
    setTimeout(() => {
      dispatch({ type: 'CLEAR' })
    }, 5000)
  }

  const voteAnecdoteMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: (votedAnecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      const newList = anecdotes.map((a) =>
        a.id !== votedAnecdote.id ? a : votedAnecdote
      )
      queryClient.setQueryData(['anecdotes'], newList)
      displayNotification('VOTED', votedAnecdote)
    },
  })

  const handleVote = (anecdote) => {
    const setVote = { ...anecdote, votes: anecdote.votes + 1 }
    voteAnecdoteMutation.mutate(setVote)
  }

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    retry: 1,
    refetchOnWindowFocus: false,
  })

  if (result.isLoading) {
    return <div>Loading data...</div>
  }

  if (result.status === 'error') {
    return <div>Anecdote service not available due problems in server</div>
  }

  const anecdotes = result.data

  return (
    <div className='main-container'>
      <Notification />
      <h1 className='site-title'>Anecdote App</h1>

      <AnecdoteForm />

      <div className='anecdote-container'>
        {anecdotes.map((anecdote) => (
          <div key={anecdote.id} className='anecdote-item'>
            <div>
              <h3>{anecdote.content}</h3>
            </div>
            <div className='votes-container'>
              <p className='votes-count'>Has {anecdote.votes} votes</p>
              <button onClick={() => handleVote(anecdote)}>Vote</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
