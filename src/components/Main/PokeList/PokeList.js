import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchJsonp from 'fetch-jsonp';

import Pokemon from '../Pokemon/Pokemon';

class PokeList extends Component {

  //After component is confirmed to be mounted, we will init an Ajax call to PokeAPI to fetch pokemon
  //and save all pokemon to the state. PokeList will then render all the individual Pokemon components
  //after all pokemon has been fetched.
  componentDidMount() {
    fetch('http://pokeapi.co/api/v2/pokemon/1', {mode: 'no-cors'})
      .then(response => response.json())
      .then(json => {
        console.log(json);
        //dispatch action to update redux pokemonList state
      })
      .catch(error => {
        return console.log('error in pokeAPI', error.message);
      })
  }

  renderPokemon() {
    // const {loading, fetchedPokemon} = this.props;
    //
    // /* Example objects inside fetchedPokemon array state{
    // url: "https://pokeapi.co/api/v2/pokemon/1/",
    // name: "bulbasaur"
    // }, */
    //
    // //if its finished loading and finished fetching pokemon from pokeAPI, begin rendering pokemon
    // if(!loading && fetchPokemon){
    //   return fetchedPokemon.map((pokemon, index) => {
    //     return <Pokemon key={pokemon.name} id={index+1} name={pokemon.name} />
    //   })
    // } else {
    //   //loading icon placeholder
    // }
  }

  render(){
    return (
      <div className='row' id='pokemon-list-container'>
        {this.renderPokemon}
      </div>
    )
  }
}

export default connect(
  (state) => {
  return state;
})(PokeList);
