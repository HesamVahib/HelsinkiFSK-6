import { useRef } from "react"
import { useDispatch } from "react-redux"
import { setFilter, clearFilter } from "../reducers/filterReducer"


const Filter = () => {
  const inputRef = useRef()
  const dispatch = useDispatch()

  const handleChange = () => {
    const filterValue = inputRef.current.value
    if (filterValue) {
      dispatch(setFilter(filterValue))
    } else {
      dispatch(clearFilter())
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