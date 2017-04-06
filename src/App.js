import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Main from './components/Main/Main';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAfIJVxL41JJkIX7Ui1vMFruzr-8a9DjsM",
    authDomain: "project-3-31b3d.firebaseapp.com",
    databaseURL: "https://project-3-31b3d.firebaseio.com",
    storageBucket: "project-3-31b3d.appspot.com"
};
firebase.initializeApp(config);
//to import react-router-dom here

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
