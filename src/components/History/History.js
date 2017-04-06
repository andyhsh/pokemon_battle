import React, { Component } from 'react';
import { Provider } from 'react-redux';

import PastBattle from './PastBattle/PastBattle'

import './history.css'

import { initStore } from '../../store/store'
const store = initStore();

class Historypage extends Component {
  render() {
    return (
        <Provider store={store}>
            <PastBattle/>
        </Provider>
    );
  }
}

export default Historypage;
