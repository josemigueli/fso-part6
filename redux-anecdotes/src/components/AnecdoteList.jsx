import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { displayNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotesBase = useSelector(state => state.anecdotes)
    const [anecdotes, setAnecdotes] = useState(anecdotesBase)
    const term = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const vote = (id) => {
        const anecdote = anecdotesBase.filter(anecdote => anecdote.id === id)
        dispatch(voteAnecdote(anecdote[0]))
        dispatch(displayNotification(`You voted '${anecdote[0].content}'`, 5))
    }

    useEffect(() => {
        const result = anecdotesBase
            .filter(a => a.content.toLowerCase().includes(term.toLowerCase()))
            .sort((a,b) => b.votes - a.votes)
        setAnecdotes(result)
    }, [term, anecdotesBase])

    return (
        <>
        {anecdotes.map(anecdote =>
            <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id)}>vote</button>
                </div>
            </div>
        )}
        </>
    )
}

export default AnecdoteList