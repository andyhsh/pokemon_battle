import React, { Component } from 'react';
import { connect } from 'react-redux';

class Health extends Component {

  render() {

    return(
        <div className='row'>
            <div className='col-md-4'>
                <img src="http://placehold.it/350x50"/>
            </div>
            <div className='col-md-4'>
                <img src="http://placehold.it/350x50"/>
            </div>
            <div className='col-md-4'>
                <img src="http://placehold.it/350x50"/>
            </div>
        </div>
    )
  }
}

export default connect()(Health);
