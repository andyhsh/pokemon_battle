import React, { Component } from 'react';
import { connect } from 'react-redux';

import Choice from '../Choice/Choice';

class ChoiceList  extends Component {

  renderChoiceList = () => {
    const { playerOne, playerTwo } = this.props;
    let playerOneChoice, playerTwoChoice = undefined;

    if (playerOne.pokemon !== ''){
      playerOneChoice = <Choice pokemonId={playerOne.pokemonId} stats={playerOne.stats} />;
    }

    if (playerTwo.pokemon !== ''){
      playerTwoChoice = <Choice pokemonId={playerTwo.pokemonId} stats={playerTwo.stats} />;
    }

    if (playerOne.pokemon !== '') {
      return (
      <div id='choice-list-container' className='col-xs-12'>
        {playerOneChoice}
        {playerTwoChoice}
      </div>
      )
    }
  }

  render() {
    const { playerOne, playerTwo, dispatch } = this.props;

    return(
      <div className='row'>
        {this.renderChoiceList()}
      </div>
    )
  }
}

export default connect(
  (state) => {
  return state;
})(ChoiceList);
