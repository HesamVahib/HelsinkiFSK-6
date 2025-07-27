import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const voteRegister = (id) => {
        const anecdote = anecdotes.find(a => a.id === id)
        anecdoteService.updateVoteAnecdote(id)
         .then(() => {
            dispatch(voteAnecdote(anecdote))
            dispatch(setNotification(`You voted for '${anecdote.content}'`, 10))
         })

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