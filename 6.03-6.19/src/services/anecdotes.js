import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const pushNewAnecdote = async (anecdote) => {
    const response = await axios.post(baseUrl, anecdote)
    return response.data
}

const updateVoteAnecdote = async (id) => {
    const currentAnecdote = await axios.get(`${baseUrl}/${id}`)
    const updatedAnecdote = {
        ...currentAnecdote.data,
        votes: currentAnecdote.data.votes + 1
    }
    const response = await axios.patch(`${baseUrl}/${id}`, updatedAnecdote)
    
    return response.data
}

export default { getAll, pushNewAnecdote, updateVoteAnecdote }