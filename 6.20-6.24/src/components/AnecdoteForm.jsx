import { useQueryClient, useMutation } from '@tanstack/react-query'
import { createAnecdote } from '../services/requests'
import { NotificationContext } from '../contexts/NotificationContext'
import { useContext } from 'react'


const AnecdoteForm = () => {

  const { dispatchNotification } = useContext(NotificationContext)

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: () => {
      queryClient.invalidateQueries(['anecdotes'])
    },
    onError: (error) => {
      console.log('Error creating anecdote:', error)
      dispatchNotification({
        type: 'SHOW',
        message: `${ error.response.data.error }`
      })
    }
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const randomId = (Math.random() * 100000).toFixed(0)
    mutation.mutate({ content, id: randomId, votes: 0 })
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
