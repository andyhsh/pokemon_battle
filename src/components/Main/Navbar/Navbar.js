import React, {Component} from 'react';
import * as firebase from 'firebase';

import './navbar.css';

var config = {
  apiKey: "AIzaSyCCwV3k-R-ByI3uEcoQhxVumO8J-F2Rs3E",
  authDomain: "pokemonbattle-2dbd2.firebaseapp.com",
  databaseURL: "https://pokemonbattle-2dbd2.firebaseio.com",
  storageBucket: "pokemonbattle-2dbd2.appspot.com",
};
firebase.initializeApp(config);

class Navbar extends Component {

  handleClick = (e) => {
    // Google provider object
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().getRedirectResult(provider).then(function(result) {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
      }
      // The signed-in user info.
      var user = result.user;
      }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
    });
  };

  render() {
    return (
      <header className='navbar navbar-default navbar-static-top'>
        <nav className='container'>
          <div className='navbar-header'>
            <a className='navbar-brand' href='#'>PokeGYM</a>
          </div>
          <div className='col-md-2'>
            <button type='submit'
                    className='btn btn-default'
                    onClick={this.handleClick}>Log In</button>
          </div>
          <div className='nav'>
            <ul className='nav navbar-nav navbar-right'>
              <li><a href='#'>History</a></li>
              <li><a href='#'>About</a></li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default Navbar;
