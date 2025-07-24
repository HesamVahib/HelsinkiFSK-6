import { useRef } from "react"
import { useDispatch } from "react-redux"

const Filter = () => {
  const inputRef = useRef()
  const dispatch = useDispatch()

  const handleChange = () => {
    const filterValue = inputRef.current.value
    if (filterValue) {
      const action = {
        type: "SET_FILTER",
        data: filterValue
      }
      dispatch(action)
    } else {
      const action = {
        type: "CLEAR_FILTER"
      }
      dispatch(action)
    }
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input ref={inputRef} onChange={handleChange} />
    </div>
  )
}

export default Filter