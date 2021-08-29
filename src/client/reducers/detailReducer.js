// Module Imports
import * as actionType from "../actions/ActionTypes"

const initialState = {
  loading: false,
  data: {},
  error: ''
}

export default function detailReducer(state = initialState, action) {
  switch(action.type) {
    case actionType.RECEIVE_DETAIL_DATA: {
      const { records } = action.data
      const { details } = records ? records[Object.keys(records)[0]] : {}
      return {
        ...state,
        data: { ...details },
        loading: false,
        error: ''
      }
    }
    case actionType.REQUEST_DETAIL_DATA: {
      return { ...state, loading: true }
    }
    case actionType.FAILED_DETAIL_DATA: {
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