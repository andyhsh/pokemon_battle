import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase';

import './pastbattle.css'

class PastBattle extends Component {

/*    const database = firebase.database();
    const databaseRef = database.ref().child('data');
    databaseRef.on('value', snapshot => {
        this.setState({
        data: snapshot.val()
    });
});

    constructor() {
        super();
        this.state = {
            speed: 10
        };
    }

    componentDidMount() {
        const rootRef = firebase.database().ref.child('react');
        const speedRef = rootRef.child('speed');
        speedRef.on('value', snap => {
            this.setState({
                speed: snap.val()
            });
        });
    }

    <div className='col-md-2'>{this.state.speed}</div>
*/
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
