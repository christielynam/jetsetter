export const user = (state = {}, action) => {
  switch(action.type) {
    case 'STORE_USER':
      return {
        name: action.name,
        email: action.email
      }
    case 'REMOVE_USER':
      return {}
    default:
      return state
  }
}
