import React, { Component } from 'react';

import PokeList from './PokeList/PokeList';
import Navbar from './Navbar/Navbar';
import Search from './Search/Search';

import Portrait from '../Battle/Portrait/Portrait';
import Health from '../Battle/Health/Health';
import Stats from '../Battle/Stats/Stats';

class Main extends Component {

  render(){
    return (
      <div>
          <div>
            <Navbar />
            <div className='container'>
              <Search />
              <PokeList />
            </div>
          </div>
          <Portrait/>
          <Health/>
          <Stats/>
      </div>
    )
  }
}

export default Main;
