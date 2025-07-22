import { useDispatch, useSelector } from "react-redux"


const App = () => {
  const dispatch = useDispatch()
  const good = useSelector((state) => state.good)
  const ok = useSelector((state) => state.ok)
  const bad = useSelector((state) => state.bad)

  const voteDispatcher = (type) => () => {
    dispatch({ type })
  }

  return (
    <div>
      <button onClick={voteDispatcher('GOOD')}>good</button>
      <button onClick={voteDispatcher('OK')}>ok</button>
      <button onClick={voteDispatcher('BAD')}>bad</button>
      <button onClick={voteDispatcher('RESET')}>reset stats</button>
      <div>good {good}</div>
      <div>ok {ok}</div>
      <div>bad {bad}</div>
    </div>
  )
}

export default App
