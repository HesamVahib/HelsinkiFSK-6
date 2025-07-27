import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import ShowAnecdotes from './components/ShowAnecdotes'
import { useQuery } from '@tanstack/react-query'
import { getAnecdotes } from './services/requests'

const App = () => {

  const { data: anecdotes, isLoading, error } = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    retry: 1
  })

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>anecdote service not available due to problems in server</div>
  }

  return (
    <div>
      <h3>Anecdote app</h3>
      <Notification />
      <AnecdoteForm />
      <ShowAnecdotes />
    </div>
  )
}

export default App
