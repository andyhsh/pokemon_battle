export function pokemonReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_POKEMON_SUCCESS':
      return action.pokemon;
    default:
      return state;
  }
};

export function fetchPokemonReducer(state = false, action) {
    switch (action.type) {
        case 'FETCHING_POKEMON':
            return action.isLoading;
        default:
            return state;
    }
}
