import { pokeApi } from '../api/api';

export function fetchPokemon(){
  return (dispatch) => {
    dispatch(fetchingPokemon(true));
    console.log('pokeapi', pokeApi);
    //pokeApi returns list of pokemon objects
    pokeApi()
      .then(pokemon => {
        dispatch(fetchingPokemon(false));
        return pokemon;
      })
      .then(pokemon => {
        dispatch(fetchPokemonSuccess(pokemon));
      }).catch(error => {
        throw(error);
      });
  };
}

export function fetchingPokemon(bool){
  return {
    type: 'FETCHING_POKEMON',
    isLoading: bool
  }
}

export function fetchPokemonSuccess(pokemon){
  return {
    type: 'FETCH_POKEMON_SUCCESS',
    pokemon
  }
}
