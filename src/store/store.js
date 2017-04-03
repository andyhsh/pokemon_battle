import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; //handles async calls in redux

//import all the reducers from reducers.jsx
import { pokemonReducer, playerOneBattleReducer, playerTwoBattleReducer } from '../reducers/reducers'

export const initStore = () => {

  //combine all reducers in reducers.jsx to form initStore
  const rootReducer = combineReducers({
    pokemonList : pokemonReducer,
    playerOne: playerOneBattleReducer,
    playerTwo: playerTwoBattleReducer
    // showCompleted: showCompletedReducer,
    // todos: todoReducer,
    // name: nameReducer
  });

  const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store
};
