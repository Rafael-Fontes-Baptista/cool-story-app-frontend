export const selectSpaceAndStories = (reduxState) => {
  return {
    space: reduxState.spaceDetails.space,
    stories: reduxState.spaceDetails.stories,
  }
}
