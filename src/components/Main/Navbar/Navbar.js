import React from 'react';

import './navbar.css';

// Google provider object
var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().getRedirectResult().then(function(result) {
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

const Navbar = () => {
    return (
      <header className='navbar navbar-default navbar-static-top'>
        <nav className='container'>
          <div className='navbar-header'>
            <a className='navbar-brand' href='#'>PokeGYM</a>
          </div>
          <div className='nav'>
            <ul className='nav navbar-nav navbar-right'>
              <li><a href='#'>History</a></li>
              <li><a href='#'>About</a></li>
            </ul>
          </div>
          <button type="submit" className="btn btn-primary btn-lg btn-block">Log In</button>
        </nav>
      </header>
    )
}

export default Navbar;
