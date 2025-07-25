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

export const setNotification = (message, timeout = 5) => {
  return dispatch => {
    dispatch(setNotif(message))
    setTimeout(() => {
      dispatch(clearNotif())
    }, timeout * 1000)
  }
}

export default notificationReducer.reducer