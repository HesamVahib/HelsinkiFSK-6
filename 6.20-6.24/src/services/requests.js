import axios from 'axios'

const baseUrl = 'http://localhost:3001'

export const getAnecdotes =  () => 
    axios.get(`${baseUrl}/anecdotes`)
        .then(response => response.data)

export const createAnecdote = (newAnecdote) =>
    axios.post(`${baseUrl}/anecdotes`, newAnecdote)
        .then(response => response.data)

export const voteAnecdote = async (anecdote) => {
    const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
    return await axios.put(`${baseUrl}/anecdotes/${anecdote.id}`, updatedAnecdote)
        .then(response => response.data)
}