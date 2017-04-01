import React, { Component } from 'react';
import { connect } from 'react-redux';

class Portrait extends Component {

  render() {

    return(
        <div className='row'>
            <div className='col-md-4'>
                <img src="http://placehold.it/350x150"/>
            </div>
            <div className='col-md-4'>
                <img src="http://placehold.it/350x150"/>
            </div>
            <div className='col-md-4'>
                <img src="http://placehold.it/350x150"/>
            </div>
        </div>
    )
  }
}

export default connect()(Portrait);
