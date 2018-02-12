export const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREASE_COUNTER':
      return action.counter + 1
    case 'DECREASE_COUNTER':
      return action.counter - 1
    default:
      return state
  }
}
