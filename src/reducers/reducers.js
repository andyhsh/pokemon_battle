const initialState = {
                          pokemonList: {pokemon: [], loading: true, filter: ''},
                          battle: [
                            {fighterA: {userId: '', pokemon: '', stats: []}, loading: undefined },
                            {fighterB: {userId: '', pokemon: '', stats: []}, loading: undefined },
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
export const playerOneBattleReducer = (state = initialState.battle[0], action) => {
  switch (action.type) {
    case 'PLAYER_ONE_POKEMON_LOADING':
    return {
      ...state,
      fighterA: {...state, loading: action.isLoading}
    }
    case 'SET_PLAYER_ONE_POKEMON':
    return {
      ...state,
      fighterA: {...state, pokemon: action.pokemon}
    }
  default:
    return state;
  }
}

export const playerTwoBattleReducer = (state = initialState.battle[1], action) => {
  switch (action.type) {
    case 'PLAYER_TWO_POKEMON_LOADING':
    return {
      ...state,
      fighterB: {...state, loading: action.isLoading}
    }
    case 'SET_PLAYER_TWO_POKEMON':
    return {
      ...state,
      fighterB: {...state, pokemon: action.pokemon}
    }
  default:
    return state;
  }
}
