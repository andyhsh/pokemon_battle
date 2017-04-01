import React, { Component } from 'react';

import Portrait from './Portrait/Portrait';
import Health from './Health/Health';
import Stats from './Stats/Stats';

class App extends Component {
  render() {
    return (
        <div className='container'>
            <Portrait/>
            <Health/>
            <Stats/>
        </div>
    );
  }
}

export default Battlepage;
