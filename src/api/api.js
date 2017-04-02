module.exports = {

  //fetch data from pokeAPI
  pokeApi: function(url, callback) {
    fetch(url, {mode: 'cors'})
      .then(response => response.json())
      .then(json => {
        console.log('hello from pokeapi');
        //callback function on successful retrieval of data from api
        callback;
      })
      .catch(error => {
        return console.log('error in pokeAPI: ', error.message);
      })
  }


}
