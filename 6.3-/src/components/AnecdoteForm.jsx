import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer' 

const AnecdoteForm = () => {

    const inputRef = useRef()
    const dispatch = useDispatch()

    const handleCreate = (event) => {
        event.preventDefault()
        const formContent = inputRef.current.value
        if (formContent.trim() === '')
            return
        inputRef.current.value = ''
        console.log('creating', formContent)
        dispatch(createAnecdote({ content: formContent }))
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={handleCreate}>
                <div><input ref={inputRef} type='text' /></div>
                <button>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm
