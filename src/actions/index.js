// export const isLoading = () => {
//   return {
//     type: 'IS_LOADING'
//   }
// }
//
// export const error = () => {
//   return {
//     type: 'ERROR'
//   }
// }

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
