import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Portrait from './Portrait/Portrait';
import Health from './Health/Health';
import Stats from './Stats/Stats';
import Result from './Result/Result';
import Versus from '../../../public/images/versus-vs.png';

import'./battlepage.css';

import { initStore } from '../../store/store'
const store = initStore();

class Battlepage extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className='container'>
          <Portrait/>
          <Health/>
          <Stats/>
        </div>
      </Provider>
    );
  }
}

export default Battlepage;
