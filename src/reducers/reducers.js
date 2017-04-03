const initialState = {
                          pokemonList: {pokemon: [], loading: true, filter: ''},
                          battle: [
                            {fighterA: {userId: '', pokemon: '', stats: []} },
                            {fighterB: {userId: '', pokemon: '', stats: []} },
                            {result: {winner: '', loser: ''} }
                          ]
                        };

/*
 * Manage fetching pokeAPI state
 */
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

/*
 * Manage battle state
 */
export const battleReducer = (state = initialState.battle, action) => {
  switch (action.type) {
    case 'LOADING_CHOOSE_POKEMON':
    return {

    }
    case 'SET_CHOOSE_POKEMON':
    return {

    }
  default:
    return state;
  }
}
