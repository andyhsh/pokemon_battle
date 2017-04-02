//to set true on successful fetching of initial data from pokeAPI
export const fetchedApi = (boolean) => {
  return {
    type: 'FETCHED_API',
    isLoading: boolean
  };
};
