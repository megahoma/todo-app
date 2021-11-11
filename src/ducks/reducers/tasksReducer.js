const initialState = {
  tasks: [],
  filter: [
    { title: 'All', active: true },
    { title: 'Active', active: false },
    { title: 'Completed', active: false },
  ],
}
const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT-TASKS':
      return { ...state, tasks: action.payload }
    case 'ADD-TASK':
      return { ...state, tasks: [...state.tasks, action.payload] }
    case 'UPDATE-TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      }
    case 'DELETE-TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      }
    case 'CLEAR-COMPLETED':
      return { ...state, tasks: state.tasks.filter((task) => !task.completed) }

    case 'FILTER-UPDATE':
      return {
        ...state,
        filter: state.filter.map((item) =>
          item.title === action.payload
            ? { ...item, active: true }
            : { ...item, active: false }
        ),
      }

    default:
      return state
  }
}

export default infoReducer
