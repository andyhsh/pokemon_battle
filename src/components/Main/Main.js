import React, { Component } from 'react';

import PokeList from './PokeList/PokeList';
import Navbar from './Navbar/Navbar';
import Search from './Search/Search';
import Footer from './Footer/Footer';

import './main.css';

import Portrait from '../Battle/Portrait/Portrait';
import Health from '../Battle/Health/Health';
import Stats from '../Battle/Stats/Stats';
import Result from '../Battle/Result/Result';
import Versus from '../../../public/images/versus-vs.png';

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
            <Footer />
          </div>
          <div className='row'>
            <Portrait/>
            <div className='col-md-4'>
                <img id='versus-logo' src={Versus} alt='versus'/>
            </div>
            <Portrait/>
          </div>
          <div className='row'>
            <Health/>
            <div className='col-md-4'></div>
            <Health/>
          </div>
          <div className='row'>
            <Stats/>
            <Result/>
            <Stats/>
          </div>
      </div>
    )
  }
}

export default Main;
