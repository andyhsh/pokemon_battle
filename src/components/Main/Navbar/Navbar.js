import React, {Component} from 'react';
import * as firebase from 'firebase';

import './navbar.css';

class Navbar extends Component {

  handleClick = (e) => {

    // Google provider object
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
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

  handleLogOut = (e) => {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  };

  render() {
    return (
      <header className='navbar navbar-default navbar-static-top'>
        <nav className='container'>
          <div className='navbar-header'>
            <a className='navbar-brand' href='#'>PokeGYM</a>
          </div>
          <div className='nav'>
            <ul className='nav navbar-nav navbar-left'>
              <li><a href='#' onClick={this.handleClick}>Log In</a></li>
              <li><a href='/' onClick={this.handleLogOut}>Log Out</a></li>
            </ul>
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
