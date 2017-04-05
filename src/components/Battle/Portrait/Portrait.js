import React, { Component } from 'react';
import { connect } from 'react-redux';
import Versus from '../../../../public/images/versus-vs.png';

import './portrait.css';

class Portrait extends Component {

  render() {

    return(
      <div className='row'>
        <div className='col-md-4'>
            <img src="http://placehold.it/350x150" alt='placeholder1'/>
        </div>
        <div className='col-md-4'>
            <img id='versus' src={Versus} alt='versus-logo'/>
        </div>
        <div className='col-md-4'>
            <img src="http://placehold.it/350x150" alt='placeholder1'/>
        </div>
      </div>
    )
  }
}

export default connect()(Portrait);
