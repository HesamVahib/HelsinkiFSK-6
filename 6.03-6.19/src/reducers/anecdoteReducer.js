import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}


const anecdoteReducer = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteAnecdote: (state, action) => {
      const newState = state.map(anecdote =>
        anecdote.id === action.payload.id
        ? {...anecdote, votes: anecdote.votes + 1}
        : anecdote
      )
      const sortedState = newState.sort((a, b) => b.votes - a.votes)
      return sortedState
    },
    appendAnecdote: (state, action) => {
      state.push(action.payload)
    },
    setAnecdotes: (state, action) => {
      return action.payload
    }
  }
})

export const { voteAnecdote, createAnecdote, setAnecdotes, appendAnecdote } = anecdoteReducer.actions

export const createNewAnecdote = (anecdoteContent) => {
  return async dispatch => {
    const newAnecdote = asObject(anecdoteContent)
    const savedAnecdote = await anecdoteService.pushNewAnecdote(newAnecdote)
    dispatch(appendAnecdote(savedAnecdote))
  }
}

export const initialAnecdotes = () => {
  return async dispatch => {
    const newAnecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(newAnecdotes))
  }
}

export default anecdoteReducer.reducer