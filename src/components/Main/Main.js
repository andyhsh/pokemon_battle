import React, { Component } from 'react';

import PokeList from './PokeList/PokeList';
import Navbar from './Navbar/Navbar';

class Main extends Component {

  render(){
    return (
      <div>
        <Navbar />
        <PokeList />
      </div>
    )
  }
}

export default Main;
