import { useContext } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { NotificationContext } from '../contexts/NotificationContext'
import { voteAnecdote } from '../services/requests'


const ShowAnecdotes = () => {

  const { dispatchNotification } = useContext(NotificationContext)
    


  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: voteAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries(['anecdotes'])
    }
  })


  const anecdotes = queryClient.getQueryData(['anecdotes'])

  const handleVote = (anecdote) => {
    mutation.mutate(anecdote)
    dispatchNotification({
      type: 'SHOW',
      message: `anecdote '${anecdote.content}' voted`
    })
  }

  return (
      <div>
        {anecdotes.map(anecdote => (
          <div key={anecdote.id}>
            {anecdote.content}
            <br />
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        ))}
      </div>
  )
}

export default ShowAnecdotes