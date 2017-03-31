import React from 'react';

//individual Pokemon
const Pokemon = ({id, name}) => {
    return (
        <div class='col-md-3 col-s-4 col-xs-6 pokemon-list-container'>
          <div class='pokemon-list-sprite'>
            <img src={`/public/sprites/${id}.png`} />
          </div>
          <div class='pokemon-list-name'>
            {name}
          </div>
        </div>
    )

}

export default Pokemon;
