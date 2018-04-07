export const photoIsLoading = (state = false, action) => {
  switch(action.type) {
    case 'PHOTO_IS_LOADING':
      return action.photoIsLoading
    default:
      return state
  }
}

export const photoError = (state = false, action) => {
  switch(action.type) {
    case 'PHOTO_ERROR':
      return action.photoError
    default:
      return state
  }
}

export const photo = (state = '', action) => {
  switch(action.type) {
    case 'FETCH_PHOTO_SUCCESS':
      return action.photo
    default:
      return state
  }
}
