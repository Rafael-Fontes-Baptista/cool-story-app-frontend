import {
  LOG_OUT,
  LOGIN_SUCCESS,
  TOKEN_STILL_VALID,
  SPACE_UPDATED,
} from "./actions"

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  space: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token)
      return { ...action.payload }

    case LOG_OUT:
      localStorage.removeItem("token")
      return { ...initialState, token: null }

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload }

    case SPACE_UPDATED:
      return {
        ...state,
        space: { ...action.payload, stories: state.space.stories },
      }

    default:
      return state
  }
}
