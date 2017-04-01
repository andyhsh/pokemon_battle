import React, { Component } from 'react';

import PokeList from './PokeList/PokeList';
import Navbar from './Navbar/Navbar';
import Search from './Search/Search';

class Main extends Component {

  render(){
    return (
      <div>
        <Navbar />
        <div className='container'>
          <Search />
          <PokeList />
        </div>
      </div>
    )
  }
}

export default Main;
