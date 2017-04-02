import { createStore, compose, combineReducers } from 'redux';

//import all the reducers from reducers.jsx
import { fetchedApiReducer } from '../reducers/reducers'

export const initStore = () => {

  //combine all reducers in reducers.jsx to form initStore
  const reducer = combineReducers({
    fetchedApi : fetchedApiReducer
    // searchText: searchTextReducer,
    // showCompleted: showCompletedReducer,
    // todos: todoReducer,
    // name: nameReducer
  });

  const store = createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store
};
