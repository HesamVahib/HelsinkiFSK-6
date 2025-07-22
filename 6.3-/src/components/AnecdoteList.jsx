import { useSelector, useDispatch } from 'react-redux'
import { useRef } from 'react'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()
    const inputRef = useRef()

    const voteCollector = (id) => {
        return {
        type: 'VOTE',
        data: { id }
        }
    }

    const voteRegister = (id) => {
        dispatch(voteCollector(id))
    }

    return (
        <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => voteRegister(anecdote.id)}>vote</button>
                </div>
                </div>
            )}
    </div>
    )
}

export default AnecdoteList