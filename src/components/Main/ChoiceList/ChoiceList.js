import React, { Component } from 'react';
import { connect } from 'react-redux';

import Choice from '../Choice/Choice';
import Loading from '../Loading/Loading';
import BattleButton from '../ChoiceList/BattleButton';
import ReplayButton from '../ChoiceList/ReplayButton';
import BattleBar from '../ChoiceList/BattleBar';
import BattleMusic from '../ChoiceList/BattleMusic';

import { startBattle, resetStates } from '../../../actions/actions';

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
    if (this.props.playerOne.pokemon !== '' && this.props.playerTwo.pokemon !== '' && this.props.battleBar.inProgress !== true && this.props.results.winner.pokemon === '') {
      return <BattleButton handleBattleClick={this.handleBattleClick} />
    }
  }

  //render battleBar when player has initialised the battle
  renderBattleBar = () => {
    const { playerOne, playerTwo, battleBar } = this.props;



    if (this.props.battleBar.inProgress) {

      //averaged stats of a pokemon
      let playerOneStats = playerOne.stats.map(stat => {
        return stat.base_stat;
      })

      let playerOneStatsSum = playerOneStats.reduce((previous, current) => current += previous);
      let playerOneStatsAvg = playerOneStatsSum / playerOneStats.length;

      let playerTwoStats = playerTwo.stats.map(stat => {
        return stat.base_stat;
      })

      let playerTwoStatsSum = playerTwoStats.reduce((previous, current) => current += previous);
      let playerTwoStatsAvg = playerTwoStatsSum / playerTwoStats.length;

      //normalise stats to be % of 100 for playerOne
      const battleProbability = 100 / (playerOneStatsAvg + playerTwoStatsAvg) * playerOneStatsAvg

      //render battlebar and pass in pokemon stats as props
      return <BattleBar playerOne={playerOne} playerTwo={playerTwo} battleProbability={battleProbability} battleBar={battleBar} />
    }
  }

  //event listener click for battleButton to startBattle
  handleBattleClick = () => {
    const { dispatch } = this.props;
    dispatch(startBattle(true));
  }

  renderBattleMusic = () => {
    const {battleBar} = this.props;
    if (battleBar.inProgress) {
      return <BattleMusic />
    }
  }

  //render winner pokemon message
  renderWinner = () => {
    if (this.props.results.winner.pokemon !== ''){
      return <h2 id='battle-winner'>{this.props.results.winner.toUpperCase()} WINS!</h2>;
    }
  }

  //render replay button when results are known
  renderReplayButton = () => {
    if (this.props.results.winner.pokemon !== ''){
      return <ReplayButton handleReplayClick={this.handleReplayClick} />
    }
  }

  //replay game by resetting stats
  handleReplayClick = () => {
    const { dispatch } = this.props;
    dispatch(resetStates());
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
          {this.renderWinner()}
          {this.renderReplayButton()}
          {this.renderBattleMusic()}
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
