import React, {Component} from 'react';

import '../Choice/choice.css';

class BattleBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokemonHealth: 50,
      winner: false,
    };
  }

  //visualise battle by looping engagement until one pokemon wins
  renderBattleBar = () => {
    let battleBar = this.state.pokemonHealth + '%';
    const renderBattle = this.renderBattle;

    const battleBarStyle = {width: battleBar};
    const playerOneType = this.props.playerOne.type[0].type.name;

    setTimeout( function() {
    renderBattle();
  }, 5)

    return <span style={battleBarStyle} className={playerOneType}></span>

  }

  renderBattle = () => {
    const pokemonHealth = this.state.pokemonHealth;
    const winner = this.state.winner;
    const battleCalc = this.battleCalculation;
    //setTimeout( function() {
      //while (winner === false) {
        if(pokemonHealth > 0 || pokemonHealth < 100) {
          battleCalc();
        }
        else if (pokemonHealth === 0) {
          this.setState({winner: 'playerTwo'})
        }
        else if (pokemonHealth === 100) {
          this.setState({winner: 'playerOne'})
        }
      //}
    //}, 1000)
  }


  battleCalculation = () => {
    const pokemonHealth = this.state.pokemonHealth;
    return Math.floor(Math.random() * 5) === 0 ? this.setState({pokemonHealth: pokemonHealth + 1}) : this.setState({pokemonHealth: pokemonHealth - 1});
  }

  render(){
    //extract the main type of 2nd player's pokemon
    const playerTwoType = this.props.playerTwo.type[0].type.name;

    return <div id='battle-bar' className={playerTwoType}>{this.renderBattleBar()}</div>
  }
}

export default BattleBar;
