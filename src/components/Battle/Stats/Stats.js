import React, { Component } from 'react';
import { connect } from 'react-redux';
import Result from  '../Result/Result';

import './stats.css';

class Stats extends Component {

  render() {

    return(
      <div className="row">
        <div className='col-md-4'>
            <img src="http://placehold.it/350x500" alt='placeholder3'/>
        </div>
        <Result />
        <div className='col-md-4'>
            <img src="http://placehold.it/350x500" alt='placeholder3'/>
        </div>
      </div>
    )
  }
}

export default connect()(Stats);
