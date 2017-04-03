import React, {Component} from 'react';
import { connect } from 'react-redux';

import './pokemon.css';

//individual Pokemon
class Pokemon extends Component {

  //Choose pokemon
  handleClick = (e) => {
    console.log(e.target.dataset.id);
    let pokemonChosen = e.target.dataset.id;
    //check whether it is player 1 or player 2's turn

    //if player 1, render ChoiceList and populate player 1

    //if player 2, populate player 2
  }

  render(){
    let {id, name} = this.props;
    name = name.charAt(0).toUpperCase() + name.slice(1);

    return (
      <div className='col-md-3 col-xs-6'>
        <div className='pokemon-container' onClick={this.handleClick}>
          <div className='pokemon-sprite'>
            <img alt={name} data-id={id} src={require(`../../../../public/sprites/${id}.png`)} width={120} height={120} />
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
