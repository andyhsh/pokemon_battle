import React, { Component } from 'react';

//import components for main page
import Navbar from './Navbar/Navbar';
import Search from './Search/Search';
import ChoiceList from './ChoiceList/ChoiceList';
import PokeList from './PokeList/PokeList';
import Footer from './Footer/Footer';

import './main.css';

class Main extends Component {

  render(){
    return (
      <div>
          <div>
            <Navbar />
            <div className='container'>
              <ChoiceList />
              <Search />
              <PokeList />
            </div>
            <Footer />
          </div>
      </div>
    )
  }
}

export default Main;
