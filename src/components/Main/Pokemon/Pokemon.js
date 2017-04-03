import React, {Component} from 'react';
import { connect } from 'react-redux';

import css from './pokemon.css';

//individual Pokemon
class Pokemon extends Component {

  handleClick = () => {
    console.log('click!');
    //check whether it is player 1 or player 2's turn

    //if player 1, render ChoiceList and populate player 1

    //if player 2, populate player 2
  }

  render(){
    let {id, name} = this.props;
    name = name.charAt(0).toUpperCase() + name.slice(1);

    return (
      <div className='col-md-3 col-xs-6'>
        <div className='pokemon-container'>
          <div className='pokemon-sprite'>
            <img alt={name} src={require(`../../../../public/sprites/${id}.png`)} width={120} height={120} onClick={this.handleClick} />
          </div>
          <div className='pokemon-name'>
            {name}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => {
  return state;
})(Pokemon);
