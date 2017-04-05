import React, { Component } from 'react';
import { connect } from 'react-redux';

import Choice from '../Choice/Choice';
import Loading from '../Loading/Loading';
import BattleButton from '../ChoiceList/BattleButton';
import BattleBar from '../ChoiceList/BattleBar';

import { startBattle } from '../../../actions/actions';

import './choicelist.css';

class ChoiceList  extends Component {

  //render playerOne pokemon
  playerOneChoice = () => {
    if (this.props.playerOne.pokemon !== ''){
      return <Choice pokemon={this.props.playerOne.pokemon} pokemonId={this.props.playerOne.pokemonId} stats={this.props.playerOne.stats} type={this.props.playerOne.type} />;
    } else if (this.props.playerOne.loading){
      return <Loading />
    }
  }

  //render playerTwo pokemon
  playerTwoChoice = () => {
    if (this.props.playerTwo.pokemon !== ''){
      return <Choice pokemon={this.props.playerTwo.pokemon} pokemonId={this.props.playerTwo.pokemonId} stats={this.props.playerTwo.stats} type={this.props.playerTwo.type} />;
    } else if (this.props.playerTwo.loading){
      return <Loading />
    }
  }

  //render battleButton when both players have chosen their pokemon
  renderBattleButton = () => {
    if (this.props.playerOne.pokemon !== '' && this.props.playerTwo.pokemon !== '' && this.props.battleBar.inProgress !== true) {
      return <BattleButton handleBattleClick={this.handleBattleClick} />
    }
  }

  //render battleBar when player has initialised the battle
  renderBattleBar = () => {
    const { playerOne, playerTwo, battleBar } = this.props;

    if (this.props.battleBar.inProgress) {
      return <BattleBar playerOne={playerOne} playerTwo={playerTwo} battleBar={battleBar} />
    }
  }

  //event listener click for battleButton
  handleBattleClick = () => {
    const { dispatch } = this.props;
    dispatch(startBattle(true));
  }

  render() {
    return(
      <div className='row'>
        <div id='choice-list-container' className='col-xs-12'>
          {this.playerOneChoice()}
          {this.playerTwoChoice()}
        </div>
        <div id='battle-container' className='col-xs-12'>
          {this.renderBattleButton()}
          {this.renderBattleBar()}
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => {
  return state;
})(ChoiceList);
