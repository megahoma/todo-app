const initialState = {
  tasks: [],
}
const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT-TASKS':
      return { ...state, tasks: action.payload }
    default:
      return state
  }
}

export default infoReducer
