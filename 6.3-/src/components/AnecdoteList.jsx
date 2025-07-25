import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotif } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const voteRegister = (id) => {
        const anecdote = anecdotes.find(a => a.id === id)
        dispatch(voteAnecdote({ id: id }))
        dispatch(setNotif(`you voted '${anecdote.content}'`))
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