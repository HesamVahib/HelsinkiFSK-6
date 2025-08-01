import { useContext } from "react"
import { NotificationContext } from "../contexts/NotificationContext"

const Notification = () => {
  const { notification, dispatchNotification } = useContext(NotificationContext)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  setTimeout(() => {
    if (notification) {
      dispatchNotification({ type: 'HIDE' })
    }
  }, 5000)

  return (notification && (
    <div style={style}>
      {notification}
    </div>
  ))
}

export default Notification
