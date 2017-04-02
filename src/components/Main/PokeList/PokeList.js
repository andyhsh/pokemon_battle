import React, { Component } from 'react';
import { connect } from 'react-redux';

import Pokemon from '../Pokemon/Pokemon';
import {pokeApi} from '../../../api/api';

class PokeList extends Component {

  //After component is confirmed to be mounted, we will init an Ajax call to PokeAPI to fetch pokemon
  //and save all pokemon to the state. PokeList will then render all the individual Pokemon components
  //after all pokemon has been fetched.
  componentDidMount() {
    pokeApi('http://pokeapi.co/api/v2/pokemon/1/', ()=>console.log('callback function'))
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
