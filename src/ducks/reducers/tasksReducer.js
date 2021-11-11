const initialState = {
  tasks: [],
}
const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT-TASKS':
      return { ...state, tasks: action.payload }
    case 'UPDATE-TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      }
    case 'DELETE-TASK': {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      }
    }

    default:
      return state
  }
}

export default infoReducer
