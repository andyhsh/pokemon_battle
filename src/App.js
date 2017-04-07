import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Main from './components/Main/Main';
import * as firebase from 'firebase';

import { playerOneChoosePokemon, playerTwoChoosePokemon, startBattle } from './actions/actions.js';

// Init Store
import { initStore } from './store/store'
const store = initStore();

// Subscribe to state changes in redux
store.subscribe( () => {
  const state = store.getState();
  console.log('New State', state);
});

const config = {
  apiKey: "AIzaSyCCwV3k-R-ByI3uEcoQhxVumO8J-F2Rs3E",
  authDomain: "pokemonbattle-2dbd2.firebaseapp.com",
  databaseURL: "https://pokemonbattle-2dbd2.firebaseio.com",
  storageBucket: "pokemonbattle-2dbd2.appspot.com"
};

//initialize and instance of firebase
firebase.initializeApp(config);

// //setup firebase and set initial pokemon choices
// firebase.database().ref('battle').on('value', snapshot => {
//   //dispatch action to change state of pokemon choices to snapshot of firebase
//   if (snapshot.val().playerOne) {
//     store.dispatch(playerOneChoosePokemon(snapshot.val().playerOne.id));
//   }
//   if (snapshot.val().playerTwo) {
//     store.dispatch(playerTwoChoosePokemon(snapshot.val().playerTwo.id));
//   }
// })
//
// //Listen for battle to begin
// firebase.database().ref('battle').on('value', snapshot => {
//   //dispatch action to start battle if other player has started battle
//   if (snapshot.val().battle === true) {
//     store.dispatch(startBattle(true));
//   }
// })

// Route store to Main container
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
