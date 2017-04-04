import React, { Component } from 'react';
import { connect } from 'react-redux';

import './choice.css';

class Choice  extends Component {

  //render type(s) of pokemon
  renderType = () => {
    const types = this.props.type;

    return types.map(type => {
      return (
        <li key={type.type.name} className={type.type.name}>
          {type.type.name}
        </li>
      )
    })
  }

  //render invidiual stats of pokemon
  renderStats = () => {
    const stats = this.props.stats;

    return stats.map(stat => {
      return (
        <li key={stat.stat.name}>
          {stat.stat.name}: {stat.base_stat}
        </li>
      )
    })
  }

  render() {
    let { pokemonId, pokemon } = this.props;

    return(
      <div className='col-xs-6'>
        <div className='choice-list'>
          <div className='choice-pokemon-portrait'>
            <img alt={pokemon} src={require(`../../../../public/sprites/${pokemonId}.png`)} width={200} height={200} />
          </div>
          <div className='choice-pokemon-type'>
            <ul>
              {this.renderType()}
            </ul>
          </div>
          <div className='choice-pokemon-stats'>
            <ul>
              {this.renderStats()}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Choice);
