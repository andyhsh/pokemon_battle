const initialState = {
                          pokemonList: {pokemon: [], loading: true, filter: ''}
                        };

export const pokemonReducer = (state = initialState.pokemonList, action) => {
  switch (action.type) {
    case 'FETCH_POKEMON_SUCCESS':
      return {
        ...state,
        pokemon: action.pokemon
      }
    case 'FETCHING_POKEMON':
      return {
        ...state,
        loading: action.isLoading
      }
    case 'SET_SEARCH_POKEMON':
      return {
        ...state,
        filter: action.searchPokemon
      }
    default:
      return state;
    }
}
