import React, {Component} from 'react';
import * as firebase from 'firebase';

import './navbar.css';

class Navbar extends Component {

  handleClick = (e) => {

    // Google provider object
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
    /*
      // The signed-in user info.
      var user = result.user;*/
    }).throw(function(error) {
        console.log("Error logging in", error);
    });
  };

  handleLogOut = (e) => {
    firebase.auth().signOut().then(function() {
      alert("Logged out");
  }).throw(function(error) {
      console.log("Error logging out", error);
    });
  };

  render() {
    return (
      <header className='navbar navbar-default navbar-static-top' id='header-app'>
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
