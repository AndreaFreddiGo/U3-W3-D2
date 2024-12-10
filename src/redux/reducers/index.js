const initialState = {
  favourites: {
    content: [],
  },
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVS':
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.concat(action.payload),
        },
      }

    case 'REMOVE_FROM_FAVS':
      return {
        ...state,
        favourites: {
          ...state.favourites,

          content: state.favourites.content.filter((_, i) => {
            if (i === action.payload) {
              return false
            } else {
              return true
            }
          }),
        },
      }
    default:
      return state
  }
}

export default mainReducer
