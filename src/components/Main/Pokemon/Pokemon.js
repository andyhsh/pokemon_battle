import React, {Component} from 'react';
import { connect } from 'react-redux';

//individual Pokemon
class Pokemon extends Component {

  handleClick = () => {
    console.log('click!');
    //check whether it is player 1 or player 2's turn

    //if player 1, render ChoiceList and populate player 1

    //if player 2, populate player 2
  }

  render(){
    const {id, name} = this.props;

    return (
      <div className='col-md-3 col-s-4 col-xs-6 pokemon-list-container'>
        <div className='pokemon-list-sprite'>
          <img alt={name} src={require(`../../../../public/sprites/${id}.png`)} onClick={this.handleClick} />
        </div>
        <div className='pokemon-list-name'>
          {name}
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => {
  return state;
})(Pokemon);
