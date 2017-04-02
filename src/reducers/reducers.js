//handle the status of initial fetching of information from pokeAPI
export const fetchedApiReducer = (state = false, action) => {
  switch (action.type) {
    case 'FETCHED_API':
      return action.isLoading;
    default:
      return state;
  }
};
