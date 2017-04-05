import React, { Component } from 'react';
import { connect } from 'react-redux';

import './health.css';

class Health extends Component {

  render() {

    return(
      <div className='row'>
        <div className='col-md-4'>
            <img src="http://placehold.it/350x50" alt='placeholder2'/>
        </div>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
            <img src="http://placehold.it/350x50" alt='placeholder2'/>
        </div>
      </div>
    )
  }
}

export default connect()(Health);
