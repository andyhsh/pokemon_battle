import React, { Component } from 'react';
import { connect } from 'react-redux';

//import components
import Pokemon from '../Pokemon/Pokemon';
import Loading from '../Loading/Loading';

import { fetchPokemon, playerOneChoosePokemon, playerTwoChoosePokemon } from '../../../actions/actions';
import { filterPokemon } from '../../../api/api';

import './pokelist.css';

class PokeList extends Component {
  //After component is confirmed to be mounted, we will init an Ajax call to PokeAPI to fetch pokemon
  //and save all pokemon to the state. PokeList will then render all the individual Pokemon components
  //after all pokemon has been fetched.
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPokemon());
  }


  //if its finished loading and finished fetching pokemon from pokeAPI, begin rendering pokemon
  renderPokemon = () => {
    const {pokemonList} = this.props;
    /* Example objects inside fetchedPokemon array state{
    url: "https://pokeapi.co/api/v2/pokemon/1/",
    name: "bulbasaur"
    }, */

    if(!pokemonList.loading && pokemonList.pokemon){
      return filterPokemon(pokemonList.pokemon, pokemonList.filter).map((pokemon, index) => {
        //assign id to pokemon through grabbing the last group of the url
        return <Pokemon key={pokemon.name}
                        id={pokemon.url.match(/([^\/]*)\/*$/)[1]}
                        name={pokemon.name}
                        handleClick={this.handleClick} />
      })
     }  else if (pokemonList.loading){
       //loading icon placeholder
          return <Loading />
    }
  }

  //handleClick function to be passed to individual pokemon components
  //handles the choice of pokemon for both players
  handleClick = (e) => {
    const { playerOne, playerTwo, dispatch } = this.props;
    let firstPlayerPokemon = playerOne.pokemon;
    let secondPlayerPokemon = playerTwo.pokemon;

    let pokemonChosen = e.target.dataset.id;
    //check whether it is player 1 or player 2's turn
    if (pokemonChosen !== undefined){
      //if player 1, render ChoiceList and populate player 1
      if (firstPlayerPokemon === '') {
        dispatch(playerOneChoosePokemon(pokemonChosen));
      } else if (secondPlayerPokemon === '') {
      //if player 2, populate player 2
        dispatch(playerTwoChoosePokemon(pokemonChosen));
      }
    }
  }

  render(){
    return (
      <div className='row' id='pokemon-list-container'>
        {this.renderPokemon()}
      </div>
    )
  }
}

export default connect(
  (state) => {
  return state;
})(PokeList);
