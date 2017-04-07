import React, { Component } from 'react';
import { connect } from 'react-redux';
//import * as firebase from 'firebase';

import './pastbattle.css'

class PastBattle extends Component {

    render() {
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-2'>Battle No.</div>
                    <div className='col-md-2'>Player 1</div>
                    <div className='col-md-2'>Player 2</div>
                    <div className='col-md-2'>Winner</div>
                    <div className='col-md-2'></div>
                </div>
            </div>
        )
    }
}

export default connect()(PastBattle);
