import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    const anecdotesBase = useSelector(state => state.anecdotes)
    const [anecdotes, setAnecdotes] = useState(anecdotesBase)
    const term = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch(voteAnecdote(id))
    }

    useEffect(() => {
        const result = anecdotesBase.filter(a => a.content.toLowerCase().includes(term.toLowerCase()))
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