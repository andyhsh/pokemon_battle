import { pokeApi } from '../api/api';
import * as firebase from 'firebase';

/*
 * fetch pokemon from pokeAPI
 */
export function fetchPokemon(){
  return (dispatch) => {
    dispatch(fetchingPokemon(true));
    //pokeApi returns list of pokemon objects
    fetch('http://localhost:8000/api/v2/pokemon/?limit=151')
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
 * Player One pokemon selection
 */
export function playerOneChoosePokemon(id){
  return (dispatch) => {
    dispatch(setPlayerOnePokemonLoading(true));
    //pokeApi returns list of pokemon objects
    fetch('http://localhost:8000/api/v2/pokemon/' + id)
      .then(response => response.json())
      .then(pokemon => {
        dispatch(setPlayerOnePokemonLoading(false));
        return pokemon;
      })
      .then(pokemon => {
        dispatch(setPlayerOnePokemon(pokemon));
      }).catch(error => {
        throw(error);
      });
  };
}

export function setPlayerOnePokemonLoading(bool){
  return {
    type: 'PLAYER_ONE_POKEMON_LOADING',
    isLoading: bool
  }
}

export function setPlayerOnePokemon(pokemon){
  return {
    type: 'SET_PLAYER_ONE_POKEMON',
    pokemon
  }
}

/*
 * Player Two pokemon selection
 */
export function playerTwoChoosePokemon(id){
  return (dispatch) => {
    dispatch(setPlayerTwoPokemonLoading(true));
    //pokeApi returns list of pokemon objects
    fetch('http://localhost:8000/api/v2/pokemon/' + id)
      .then(response => response.json())
      .then(pokemon => {
        dispatch(setPlayerTwoPokemonLoading(false));
        return pokemon;
      })
      .then(pokemon => {
        dispatch(setPlayerTwoPokemon(pokemon));
      }).catch(error => {
        throw(error);
      });
  };
}

export function setPlayerTwoPokemonLoading(bool){
  return {
    type: 'PLAYER_TWO_POKEMON_LOADING',
    isLoading: bool
  }
}

export function setPlayerTwoPokemon(pokemon){
  return {
    type: 'SET_PLAYER_TWO_POKEMON',
    pokemon
  }
}

/*
 * Battle actions
 */

export function startBattle(bool){
  return {
    type: 'START_BATTLE',
    start: bool
  }
}

/*export function updateResults(winner, loser){
  return {
    type: 'UPDATE_RESULTS',
    winner,
    loser
  }
}*/

export function updateResults(winner, loser){
    return (dispatch) => {
        firebase.database().ref().push({
            winner: winner,
            loser: loser
        });
        dispatch({
          type: 'UPDATE_RESULTS',
          winner,
          loser
      });
    }
}

/*
 * Reset state
 */
 export function resetStates(){
   return {
     type: 'RESET_STATES'
   }
 }
