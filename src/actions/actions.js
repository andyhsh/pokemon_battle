import { pokeApi } from '../api/api';

/*
 * fetch pokemon from pokeAPI
 */
export function fetchPokemon(){
  return (dispatch) => {
    dispatch(fetchingPokemon(true));
    //pokeApi returns list of pokemon objects
    fetch('http://localhost:8000/api/v2/pokemon/?limit=151', {mode: 'cors'})
      .then(response => response.json())
      .then(pokemon => {
        dispatch(fetchingPokemon(false));
        return pokemon;
      })
      .then(pokemon => {
        dispatch(fetchPokemonSuccess(pokemon.results));
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

export function setSearchPokemon(searchPokemon){
  return {
    type: 'SET_SEARCH_POKEMON',
    searchPokemon
  };
};


/*
 * Player pokemon selection
 */
export function choosePokemon(id){
  return (dispatch) => {
    dispatch(fetchingPokemon(true));
    //pokeApi returns list of pokemon objects
    fetch('http://localhost:8000/api/v2/pokemon/' + id, {mode: 'cors'})
      .then(response => response.json())
      .then(pokemon => {
        dispatch(choosePokemonLoading(false));
        return pokemon;
      })
      .then(pokemon => {
        dispatch(setChoosePokemon(pokemon));
      }).catch(error => {
        throw(error);
      });
  };
}

export function choosePokemonLoading(bool){
  return {
    type: 'CHOOSE_POKEMON_LOADING',
    isLoading: bool
  }
}

export function setChoosePokemon(pokemon){
  return {
    type: 'SET_CHOOSE_POKEMON',
    pokemon
  }
}
