import React, {Component} from 'react';
import { connect } from 'react-redux';

import '../Choice/choice.css';

class BattleBar extends Component {

  renderBattleBar = () => {
    const type = this.props.type;

    const battleBar = this.props.battleBar;
    console.log(battleBar);
    // let battleBar = stat.base_stat/150*100;
    // battleBar >= 100 ? battleBar = 100 + '%' : battleBar += '%';
    // const battleBarStyle = {width: battleBar};

    return <span style={battleBar} className={type}></span>
  }

  render(){
    return (
      <div id='battle-bar'>{this.renderBattleBar}</div>
    )
  }
}

export default connect(
  (state) => {
    return state
})(BattleBar);
