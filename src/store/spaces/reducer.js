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
    default:
      return state
  }
}
