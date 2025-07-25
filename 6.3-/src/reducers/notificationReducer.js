import { createSlice } from "@reduxjs/toolkit"

const notificationReducer = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    setNotif: (state, action) => action.payload,
    clearNotif: () => ''
  }
})

export const { setNotif, clearNotif } = notificationReducer.actions

export default notificationReducer.reducer