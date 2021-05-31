import { LOG_OUT } from "../user/actions"

const initialState = {
  all: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SPACE": {
      return {
        ...state,
        all: [...state.all, action.payload],
      }
    }
    case LOG_OUT: {
      return {
        ...initialState,
        all: [],
      }
    }
    default:
      return state
  }
}
