import React from 'react';

import './navbar.css';


const Navbar = () => {
    return (
      <nav className='navbar navbar-default navbar-static-top'>
        <div className='container'>
          <div className='navbar-header'>
            <a className='navbar-brand' href='#'>PokeGYM</a>
          </div>
          <div className='nav'>
            <ul className='nav navbar-nav navbar-right'>
              <li><a href='#'>History</a></li>
              <li><a href='#'>About</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;
