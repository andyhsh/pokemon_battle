import React, { Component } from 'react';
import { connect } from 'react-redux';

class Health extends Component {

  render() {

    return(
        <div className='col-md-4'>
            <img src="http://placehold.it/350x50" alt='placeholder2'/>
        </div>
    )
  }
}

export default connect()(Health);
