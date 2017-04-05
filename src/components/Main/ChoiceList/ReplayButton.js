import React, {Component} from 'react';

class ReplayButton extends Component {

  render(){
    const buttonStyle = {margin: '20px auto', display: 'block'};

    return (
      <button type="button" className="btn btn-danger btn-lg" onClick={this.props.handleReplayClick} style={buttonStyle}>Play Again</button>
    )
  }
}

export default ReplayButton;
