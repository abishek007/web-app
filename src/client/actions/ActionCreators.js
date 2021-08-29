// Module Imports
import axios from "axios"
import * as action from "./Actions"

const SEARCH_API = 'https://openlibrary.org/search.json'
const errMsg = 'Something went wrong, please try again later !!!'

let cancelTokenSource = null
export const fetchSearchData = (param, pageNo = 1, isReset = false) => {
  return async (dispatch, getState) => {
    try {
      if (isReset) {
        await dispatch(action.resetSearchData())
      }
      await dispatch(action.requestSearchData())
      const formatedQuery = param.split(" ").join("+")
      const params = {
        q: formatedQuery || 'latest',
        page: pageNo,
        limit: 40
      }
      cancelTokenSource = axios.CancelToken.source()
      const response = await axios.get(SEARCH_API, {
        params,
        cancelToken: cancelTokenSource.token
      })
      
      if (response && response.status === 200 && response.data) {
        dispatch(action.receiveSearchData(response.data))
      } else {
        dispatch(action.failedSearchData(errMsg))
      }
    } catch (error) {
      if (axios.isCancel(error)) {
        dispatch(action.failedSearchData(error))
      }
    }
  }
}

const READ_API = 'https://openlibrary.org/api/volumes/brief/isbn'
export const fetchDetailsData = (id) => {
  return async (dispatch, getState) => {
    try {
      await dispatch(action.requestDetailData())
      const response = await axios.get(`${READ_API}/${id}.json`)
      if (response && response.status === 200 && response.data) {
        dispatch(action.receiveDetailData(response.data))
      } else {
        dispatch(action.failedDetailData(errMsg))
      }
    } catch(error) {
      dispatch(action.failedDetailData(error))
    }
  }
}