import { useSelector, useDispatch } from "react-redux"
import { clearNotif } from "../reducers/notificationReducer"

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const dispatch = useDispatch()

  const style = notification ? {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  } : {}

  if (notification) {
    setTimeout(() => {
      dispatch(clearNotif())
    }, 5000)
  }

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification