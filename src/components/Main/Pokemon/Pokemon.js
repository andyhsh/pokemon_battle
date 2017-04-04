import React, {Component} from 'react';

import './pokemon.css';

//individual Pokemon => dumb component
class Pokemon extends Component {

  render(){
    let {id, name, handleClick} = this.props;
    name = name.charAt(0).toUpperCase() + name.slice(1);

    return (
      <div className='col-md-3 col-xs-6'>
        <div className='pokemon-container' onClick={handleClick}>
          <div className='pokemon-sprite'>
            <img alt={name} data-id={id} src={require(`../../../../public/sprites/${id}.png`)} width={120} height={120} />
          </div>
          <div className='pokemon-name'>
            {name}
          </div>
        </div>
      </div>
    )
  }
}

export default Pokemon;
