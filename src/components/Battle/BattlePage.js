import React, { Component } from 'react';

import Portrait from './Portrait/Portrait';
import Health from './Health/Health';
import Stats from './Stats/Stats';
import Result from './Result/Result';
import Versus from '../../../public/images/versus-vs.png';

class App extends Component {
  render() {
    return (
        <div className='container'>
            <div className='row'>
                <Portrait/>
                <div className='col-md-4'>
                    <img src={Versus} />
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
    );
  }
}

export default Battlepage;
