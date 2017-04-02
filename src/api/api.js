module.exports = {

  //fetch data from pokeAPI
  pokeApi: function() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151', {mode: 'cors'})
      .then(response => response.json())
      .catch(error => {
        return console.log('error in pokeAPI: ', error.message);
      })
  }


}
