import { accessKey } from '../utils/keys.js';

export const photoIsLoading = (bool) => ({
  type: 'PHOTO_IS_LOADING',
  photoIsLoading: bool
})

export const photoError = (bool) => ({
  type: 'PHOTO_ERROR',
  photoError: bool
})

export const fetchPhotoSuccess = (photo) => ({
  type: 'FETCH_PHOTO_SUCCESS',
  photo
})

export const storeUser = (name, email) => ({
  type: 'STORE_USER',
  name,
  email
})

export const removeUser = () => ({
  type: 'REMOVE_USER'
})

export const fetchPhoto = () => {
  const url = 'https://api.unsplash.com/'
  return (dispatch) => {
    dispatch(photoIsLoading(true));
    fetch(`${url}/photos/random?query=momentum&client_id=${accessKey}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        dispatch(photoIsLoading(false));
        return response.json()
      })
      .then(parsedResponse => {
        dispatch(fetchPhotoSuccess(parsedResponse.urls.full))
      })
      .catch(() => dispatch(photoError(true)))
  }
}
