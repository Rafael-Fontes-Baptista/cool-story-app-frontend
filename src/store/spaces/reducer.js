const initialState = {
  all: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "spaces/spacesFetched": {
      return {
        ...state,
        all: [...action.payload],
      }
    }
    default:
      return state
  }
}
