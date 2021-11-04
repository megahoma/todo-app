import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initTasks } from './ducks/actions/tasksAction'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initTasks())
  }, [dispatch])

  return <div className="App">todo-app</div>
}

export default App
