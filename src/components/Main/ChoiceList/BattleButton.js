import React, {Component} from 'react';

class BattleButton extends Component {

  render(){
    const buttonStyle = {margin: '20px auto', display: 'block'};

    return (
      <button type="button" className="btn btn-danger btn-lg" onClick={this.props.handleBattleClick} style={buttonStyle}>Battle</button>
    )
  }
}

export default BattleButton;
