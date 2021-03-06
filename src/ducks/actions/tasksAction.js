import axios from 'axios'

const initTasks = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('/tasks')
      dispatch({
        type: 'INIT-TASKS',
        payload: res.data,
      })
    } catch (err) {}
  }
}

const addTask = (newTask) => {
  return async (dispatch) => {
    try {
      const res = await axios.post('/tasks', newTask)
      dispatch({
        type: 'ADD-TASK',
        payload: res.data,
      })
    } catch (err) {}
  }
}

const updateTask = (task) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(`/tasks/${task.id}`, {
        task: task.task,
        completed: !task.completed,
      })
      dispatch({
        type: 'UPDATE-TASK',
        payload: task.id,
      })
    } catch (err) {}
  }
}

const deleteTask = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/tasks/${id}`)
      dispatch({
        type: 'DELETE-TASK',
        payload: id,
      })
    } catch (err) {}
  }
}

const clearCompleted = () => {
  return async (dispatch, getState) => {
    dispatch({ type: 'CLEAR-COMPLETED' })
  }
}

const filterUpdate = (filter) => {
  return async (dispatch) => {
    dispatch({ type: 'FILTER-UPDATE', payload: filter })
  }
}

const swapTask = (items) => {
  return async (dispatch) => {
    dispatch({ type: 'SWAP-TASK', payload: items })
  }
}

export {
  initTasks,
  addTask,
  updateTask,
  deleteTask,
  clearCompleted,
  filterUpdate,
  swapTask,
}
