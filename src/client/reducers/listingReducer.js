// Module Imports
import * as actionType from "../actions/ActionTypes"

const initialState = {
  loading: false,
  data: [],
  hasMore: 0,
  error: ''
}

export default function listingReducer(state = initialState, action) {
  switch(action.type) {
    case actionType.RECEIVE_SEARCH_DATA: {
      const { docs = [], numFound = 0 } = action.data
      const { data = [] } = state
      return {
        ...state,
        data: [...data, ...docs],
        loading: false,
        hasMore: numFound,
        error: ''
      }
    }
    case actionType.REQUEST_SEARCH_DATA: {
      return { ...state, loading: true }
    }
    case actionType.FAILED_SEARCH_DATA: {
      const { data = '' } = action
      return { ...state, loading: false, error: data }
    }
    case actionType.RESET_SEARCH_DATA: {
      return initialState
    }
    default:
      return state
  }
}