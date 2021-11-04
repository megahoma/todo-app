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

export { initTasks }
