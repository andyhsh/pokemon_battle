import React, { Component } from 'react';
import { connect } from 'react-redux';

import Pokemon from '../Pokemon/Pokemon';
import Loading from '../Loading/Loading';

import { fetchPokemon } from '../../../actions/actions';
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

  renderPokemon = () => {
    const {pokemonList} = this.props;
    console.log('states', pokemonList);
    /* Example objects inside fetchedPokemon array state{
    url: "https://pokeapi.co/api/v2/pokemon/1/",
    name: "bulbasaur"
    }, */

    //if its finished loading and finished fetching pokemon from pokeAPI, begin rendering pokemon
    if(!pokemonList.loading && pokemonList.pokemon){

      return filterPokemon(pokemonList.pokemon, pokemonList.filter).map((pokemon, index) => {
        return <Pokemon key={pokemon.name} id={pokemon.url.match(/([^\/]*)\/*$/)[1]} name={pokemon.name} />
      })
     }  else if (pokemonList.loading){
       //loading icon placeholder
          return <Loading />
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
