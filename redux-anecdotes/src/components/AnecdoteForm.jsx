import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const newAdecdote = (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(anecdote))
        dispatch(setNotification(`Added ${anecdote}`))
    }

    return (
        <>
        <h2>create new</h2>
        <form onSubmit={newAdecdote}>
            <div><input name='anecdote' /></div>
            <button>create</button>
        </form>
        </>
    )

}

export default AnecdoteForm