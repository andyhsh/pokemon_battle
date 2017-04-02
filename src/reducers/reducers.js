//handle the status of initial fetching of information from pokeAPI
export var fetchedApiReducer = (state = false, action) => {
  switch (action.type) {
    case 'FETCHED_API':
      return true;
    default:
      return state;
  }
};
