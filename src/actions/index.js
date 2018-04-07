import { accessKey } from '../utils/keys.js';

export const isLoading = (bool) => {
  return {
    type: 'IS_LOADING',
    isLoading: bool
  }
}

export const error = (bool) => {
  return {
    type: 'ERROR',
    error: bool
  }
}

export const fetchPhotoSuccess = (photo) => {
  return {
    type: 'FETCH_PHOTO_SUCCESS',
    photo
  }
}

export const storeUser = (name, email) => ({
  type: 'STORE_USER',
  name,
  email
})

export const removeUser = () => ({
  type: 'REMOVE_USER'
})

export const increaseCounter = (counter) => {
  return {
    type: 'INCREASE_COUNTER',
    counter
  }
}

export const decreaseCounter = (counter) => {
  return {
    type: 'DECREASE_COUNTER',
    counter
  }
}

export const fetchPhoto = () => {
  return (dispatch) => {
    dispatch(isLoading(true));

    fetch(`https://api.unsplash.com/photos/random?orientation=landscape&client_id=${accessKey}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        dispatch(isLoading(false));
        return response.json()
      })
      .then(parsedResponse => {
        dispatch(fetchPhotoSuccess(parsedResponse.urls.full))
      })
      .catch(() => dispatch(error(true)))
  }
}
