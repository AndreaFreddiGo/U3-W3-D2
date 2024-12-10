export const ADD_TO_FAVS = 'ADD_TO_FAVS'
export const REMOVE_FROM_FAVS = 'REMOVE_FROM_FAVS'

export const addToFavsAction = (data) => {
  return {
    type: ADD_TO_FAVS,
    payload: data,
  }
}

export const removeFromFavsAction = (i) => {
  return {
    type: REMOVE_FROM_FAVS,
    payload: i,
  }
}
