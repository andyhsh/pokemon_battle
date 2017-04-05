import React, { Component } from 'react';
import { connect } from 'react-redux';

import Choice from '../Choice/Choice';
import Loading from '../Loading/Loading';
import BattleButton from '../ChoiceList/BattleButton';

class ChoiceList  extends Component {

  playerOneChoice = () => {
    if (this.props.playerOne.pokemon !== ''){
      return <Choice pokemon={this.props.playerOne.pokemon} pokemonId={this.props.playerOne.pokemonId} stats={this.props.playerOne.stats} type={this.props.playerOne.type} />;
    } else if (this.props.playerOne.loading){
      return <Loading />
    }
  }

  playerTwoChoice = () => {
    if (this.props.playerTwo.pokemon !== ''){
      return <Choice pokemon={this.props.playerTwo.pokemon} pokemonId={this.props.playerTwo.pokemonId} stats={this.props.playerTwo.stats} type={this.props.playerTwo.type} />;
    } else if (this.props.playerTwo.loading){
      return <Loading />
    }
  }

  renderBattleButton = () => {
    if (this.props.playerOne.pokemon !== '' && this.props.playerTwo.pokemon !== '') {
      return (
        <BattleButton handleBattleClick={this.handleBattleClick} />
      )
    }
  }

  handleBattleClick = () => {
    console.log('click');
  }

  render() {
    return(
      <div className='row'>
        <div id='choice-list-container' className='col-xs-12'>
          {this.playerOneChoice()}
          {this.playerTwoChoice()}
          {this.renderBattleButton()}
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => {
  return state;
})(ChoiceList);
