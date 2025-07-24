import { useSelector, useDispatch } from 'react-redux'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const voteCollector = (id) => {
        return {
        type: 'VOTE',
        data: { id }
        }
    }

    const voteRegister = (id) => {
        dispatch(voteCollector(id))
    }

    const filteredAnecdotes = filter
        ? anecdotes.filter(anecdote => 
            anecdote.content.toLowerCase().includes(filter.toLowerCase()))
            : anecdotes

    return (
        <div>
            {filteredAnecdotes.map(anecdote =>
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