export const ADD_TO_FAVS = 'ADD_TO_FAVS'
export const REMOVE_FROM_FAVS = 'REMOVE_FROM_FAVS'
export const GET_JOBS = 'GET_JOBS'
export const GET_JOBS_ERROR = 'GET_JOBS_ERROR'

const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?search='


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

export const getJobs = () => {
  return async (e, dispatch, getState) => {
    e.preventDefault()
    // qui dentro potete fare anche operazioni asincrone (Promise)
  }

    try {
      const response = await fetch(baseEndpoint + query + '&limit=20')
      if (response.ok) {
        const fetchedJobs = await response.json()
        dispatch({
          type: 'GET_JOBS',
          payload: fetchedJobs,
        })
      } else {
        throw new Error('Error fetching results')
      }
    } catch (error) {
      console.log(error)
      dispatch({
        type: 'GET_JOBS_ERROR',
        payload: error,
      })
    }
  }

