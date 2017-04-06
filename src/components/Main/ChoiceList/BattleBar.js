import React, {Component} from 'react';
import { connect } from 'react-redux';

import { updateResults, startBattle } from '../../../actions/actions';


import '../Choice/choice.css';

class BattleBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokemonHealth: 50,
    };
  }

  //visualise battle by looping engagement until one pokemon wins
  renderBattleBar = () => {
    let battleBar = this.state.pokemonHealth + '%';
    const renderBattle = this.renderBattle;

    const battleBarStyle = {width: battleBar};
    const playerOneType = this.props.playerOne.type[0].type.name;

    //set game speed
    setTimeout( function() {
    renderBattle();
  }, 10)

    return <span style={battleBarStyle} className={playerOneType}></span>
  }

  //Logic for deciding when the battle ends, either pokemon health is 0 (playerTwo wins) or pokemon health is 100 (playerOne wins)
  renderBattle = () => {
    const pokemonHealth = this.state.pokemonHealth;
    const {dispatch, playerOne, playerTwo } = this.props;

    if (pokemonHealth === 0) {
      dispatch(updateResults(playerTwo.pokemon, playerOne.pokemon));
      debugger;
      dispatch(startBattle(false));

    } else if (pokemonHealth === 100) {
      dispatch(updateResults(playerOne.pokemon, playerTwo.pokemon));
      debugger;
      dispatch(startBattle(false));

    }
    else {
      this.battleCalculation();
    }
  }


  battleCalculation = () => {
    const pokemonHealth = this.state.pokemonHealth;
    const {playerOne, playerTwo, battleProbability } = this.props;

    //generate a random number up to 99 and if it is lower than the percentage chance of winning for playerOne, then playerOne hits
    return Math.random() * 100 < battleProbability ? this.setState({pokemonHealth: pokemonHealth + 1}) : this.setState({pokemonHealth: pokemonHealth - 1});
  }

  render(){
    //extract the main type of 2nd player's pokemon
    const playerTwoType = this.props.playerTwo.type[0].type.name;

    return <div id='battle-bar' className={playerTwoType}>{this.renderBattleBar()}</div>
  }
}

export default connect(
  (state) => {
  return state;
})(BattleBar);
