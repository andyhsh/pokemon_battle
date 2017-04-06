import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase';

import './pastbattle.css'

class PastBattle extends Component {

    // var defaultApp = firebase.initializeApp(defaultAppConfig);
    // var defaultDatabase = defaultApp.database();

    render() {

        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-3'>Player 1</div>
                    <div className='col-md-3'>Player 2</div>
                    <div className='col-md-3'>Winner</div>
                    <div className='col-md-1'></div>
                </div>
            </div>
        )
    }
}

export default connect()(PastBattle);
