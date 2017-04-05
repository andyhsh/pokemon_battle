const initialState = {
                          pokemonList: {pokemon: [], loading: true, filter: ''},
                          battle: [
                            {fighterA: {userId: '', pokemon: '', pokemonId: '', stats: [], type: []}, loading: undefined },
                            {fighterB: {userId: '', pokemon: '', pokemonId: '', stats: [], type: []}, loading: undefined },
                            {battle: {winner: {userId: '', pokemon: ''}, loser: {userId: '', pokemon: ''} } },
                            {battleBar: {fighterA: 50, fighterB: 50, inProgress: false } }
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
 * Manage pokemon choice state
 */
export const playerOneBattleReducer = (state = initialState.battle[0].fighterA, action) => {
  switch (action.type) {
    case 'PLAYER_ONE_POKEMON_LOADING':
      return {
        ...state,
        loading: action.isLoading
      }
    case 'SET_PLAYER_ONE_POKEMON':
      return {
        ...state,
        pokemon: action.pokemon.name,
        pokemonId: action.pokemon.forms[0].url.match(/([^\/]*)\/*$/)[1],
        stats: action.pokemon.stats,
        type: action.pokemon.types
      }
    case 'RESET_STATES':
      return initialState.battle[0].fighterA
  default:
    return state;
  }
}

export const playerTwoBattleReducer = (state = initialState.battle[1].fighterB, action) => {
  switch (action.type) {
    case 'PLAYER_TWO_POKEMON_LOADING':
      return {
        ...state,
        loading: action.isLoading
      }
    case 'SET_PLAYER_TWO_POKEMON':
      return {
        ...state,
        pokemon: action.pokemon.name,
        pokemonId: action.pokemon.forms[0].url.match(/([^\/]*)\/*$/)[1],
        stats: action.pokemon.stats,
        type: action.pokemon.types
      }
    case 'RESET_STATES':
      return initialState.battle[1].fighterB
  default:
    return state;
  }
}

/*
 * Manage battle state
 */
export const battleReducer = ( state = initialState.battle[3].battleBar, action) => {
  switch (action.type) {
    case 'START_BATTLE':
      return {
        ...state,
        inProgress: action.start
      }
    case 'RESET_STATES':
      return initialState.battle[3].battleBar
    default:
       return state;
  }
}

export const resultsReducer = ( state = initialState.battle[2].battle, action) => {
  switch (action.type) {
    case 'UPDATE_RESULTS':
      return {
        ...state,
        winner: action.winner,
        loser: action.loser
      }
    case 'RESET_STATES':
      return initialState.battle[2].battle
    default:
      return state;
  }
}
