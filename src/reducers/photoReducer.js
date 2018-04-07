export const photo = (state = '', action) => {
  switch (action.type) {
    case 'FETCH_PHOTO_SUCCESS':
      return action.photo
    default:
      return state
  }
}
