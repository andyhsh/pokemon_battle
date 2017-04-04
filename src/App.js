import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Main from './components/Main/Main';
import * as firebase from 'firebase';
//to import react-router-dom here

//Initialise Firebase
var config = {
  apiKey: "AIzaSyCCwV3k-R-ByI3uEcoQhxVumO8J-F2Rs3E",
  authDomain: "pokemonbattle-2dbd2.firebaseapp.com",
  databaseURL: "https://pokemonbattle-2dbd2.firebaseio.com",
  storageBucket: "pokemonbattle-2dbd2.appspot.com",
};
firebase.initializeApp(config);

// Get load / save functions from the API
//import {  } from './api/api'

// import addTodos action
//import {  } from './actions/actions'

// Init Store
import { initStore } from './store/store'
const store = initStore();

// Save Todo's to localStorage
store.subscribe( () => {
  const state = store.getState();
  console.log('New State', state);
});

// Load Todo's from localStorage
// var initialTodos = getTodos();
// store.dispatch(addTodos(initialTodos));

// Route store to TodoApp container
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
