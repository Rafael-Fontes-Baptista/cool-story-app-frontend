import { apiUrl } from "../../config/constants"
import axios from "axios"

import { appDoneLoading, setMessage } from "../appState/actions"

export const spacesFetched = (spaces) => {
  return {
    type: "spaces/spacesFetched",
    payload: spaces,
  }
}
export const getSpaces = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/spaces`)

    dispatch(spacesFetched(response.data))
  } catch (error) {
    if (error.response) {
      console.log(error.response.data.message)
      dispatch(setMessage("danger", true, error.response.data.message))
    } else {
      console.log(error.message)
      dispatch(setMessage("danger", true, error.message))
    }
    dispatch(appDoneLoading())
  }
}
