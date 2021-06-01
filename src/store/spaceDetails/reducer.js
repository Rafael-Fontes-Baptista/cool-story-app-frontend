const initialState = {
  loading: true,
  space: null,
  stories: [],
}

export default function spaceDetailsSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "spaceDetails/loadingData": {
      return {
        ...initialState,
      }
    }
    case "spaceDetails/spaceFullyFetched": {
      return {
        ...state,
        loading: false,
        space: action.payload.space,
        stories: [...action.payload.stories],
      }
    }
    default: {
      return state
    }
  }
}
