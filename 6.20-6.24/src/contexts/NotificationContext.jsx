import { createContext, useReducer } from 'react'

const showNotification = (state, action) => {
  switch (action.type) {
    case 'SHOW':
      return action.message
    case 'HIDE':
      return null
    default:
      return state
  }
}

export const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
  const [notification, dispatchNotification] = useReducer(showNotification, null)


  return (
    <NotificationContext.Provider value={{ notification, dispatchNotification }}>
      {children}
    </NotificationContext.Provider>
  )
}