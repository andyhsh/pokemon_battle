import { createStore, compose, combineReducers } from 'redux';

//import all the reducers from reducers.jsx
//import { todoReducer, nameReducer, searchTextReducer, showCompletedReducer } from '../reducers/reducers'

export const initStore = () => {

  //combine all reducers in reducers.jsx to form initStore
  const reducer = combineReducers({
    // searchText: searchTextReducer,
    // showCompleted: showCompletedReducer,
    // todos: todoReducer,
    // name: nameReducer
  });

  const store = createStore( reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store
};
