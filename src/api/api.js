module.exports = {

  //fetch data from pokeAPI
  pokeApi: function() {
    fetch('http://localhost:8000/api/v2/pokemon/?limit=151', {mode: 'cors'})
      .then(response => response.json())
      .catch(error => {
        return console.log('error in pokeAPI: ', error.message);
      })
  },

  //search bar filter
  filterPokemon: function(pokemonList, searchText) {
    let filteredPokemon = pokemonList;

    // Filter by searchText
    filteredPokemon = filteredPokemon.filter((pokemon) => {
      //returns all true if searchText is nil. Else, return true if searchText matches todo.text
      return searchText.length === 0 || pokemon.name.indexOf(searchText) > -1;
    });

    return filteredPokemon;
  },

  //Capitalize first letter of a word name
  capitalize: function(name){
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

}
