const initialState = {
                          pokemonList: {pokemon: [], loading: true}

                        };

export function pokemonReducer (state = initialState.pokemonList, action) {
  switch (action.type) {
    case 'FETCH_POKEMON_SUCCESS':
      return {
        ...state,
        pokemon: action.pokemon
      }
    case 'FETCHING_POKEMON':
      return {
        ...state,
        loading: action.isLoading
      }
    default:
      return state;
    }
}

// export function battle (state = [], action) {
//   switch (action.type) {
//     //case
//     default:
//       return state;
//   }
// }
