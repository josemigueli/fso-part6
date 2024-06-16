import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { displayNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const newAdecdote = async (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(anecdote))
        dispatch(displayNotification(`You added '${anecdote}'`, 5))
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