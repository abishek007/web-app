// Module Imports
import * as actionType from "./ActionTypes"

export const receiveSearchData = (data) => ({
  type: actionType.RECEIVE_SEARCH_DATA,
  data
})

export const requestSearchData = () => ({
  type: actionType.REQUEST_SEARCH_DATA
})

export const failedSearchData = (data) => ({
  type: actionType.FAILED_SEARCH_DATA,
  data
})

export const resetSearchData = () => ({
  type: actionType.RESET_SEARCH_DATA,
})

export const receiveDetailData = (data) => ({
  type: actionType.RECEIVE_DETAIL_DATA,
  data
})

export const requestDetailData = () => ({
  type: actionType.REQUEST_DETAIL_DATA
})

export const failedDetailData = (data) => ({
  type: actionType.FAILED_DETAIL_DATA,
  data
})