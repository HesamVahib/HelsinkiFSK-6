import { createSlice } from '@reduxjs/toolkit'

const filterReducer = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        setFilter: (state, action) => action.payload,
        clearFilter: () => ''
    }
})

export const { setFilter, clearFilter } = filterReducer.actions

export default filterReducer.reducer