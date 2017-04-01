import React from 'react';

//individual Pokemon
const Pokemon = ({id, name}) => {
    return (
        <div className='col-md-3 col-s-4 col-xs-6 pokemon-list-container'>
          <div className='pokemon-list-sprite'>
            <img alt={name} src={`/public/sprites/${id}.png`} />
          </div>
          <div className='pokemon-list-name'>
            {name}
          </div>
        </div>
    )

}

export default Pokemon;
