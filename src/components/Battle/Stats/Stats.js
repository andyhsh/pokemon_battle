import React, { Component } from 'react';
import { connect } from 'react-redux';

class Stats extends Component {

  render() {

    return(
        <div className='col-md-4'>
            <img src="http://placehold.it/350x500"/>
        </div>
    )
  }
}

export default connect()(Stats);
