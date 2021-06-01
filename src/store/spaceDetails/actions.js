import { apiUrl } from "../../config/constants"
import axios from "axios"

export const loadingData = () => {
  return {
    type: "spaceDetails/loadingData",
  }
}

export const spaceDetailsFetched = (data) => {
  return {
    type: "spaceDetails/spaceFullyFetched",
    payload: data,
  }
}

export const fetchSpace = (spaceId) => async (dispatch, getState) => {
  try {
    dispatch(loadingData())

    const response = await axios.get(`${apiUrl}/spaces/${spaceId}`)
    const data = {
      space: response.data,
      stories: response.data.stories,
    }

    dispatch(spaceDetailsFetched(data))
  } catch (error) {
    console.log(error)
  }
}
