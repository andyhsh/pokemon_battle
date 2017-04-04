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
          {type.type.name.toUpperCase()}
        </li>
      )
    })
  }

  //render invidiual stats of pokemon
  renderStats = () => {
    const stats = this.props.stats;
    const type = this.props.type[0].type.name;

    return stats.map(stat => {
      //normalise statBar length to 100% scale, capping the stats to 100% length
      let statBar = stat.base_stat/150*100;
      statBar >= 100 ? statBar = 100 + '%' : statBar = statBar + '%';
      let statBarStyle = {width: statBar};

      return (
        <div className='row' key={stat.stat.name}>
            <div className='col-xs-3 col-xs-offset-2 stat-name'>
              {stat.stat.name}
            </div>
            <div className='col-xs-5'>
              <div className='stat-bar'>
                <span style={statBarStyle} className={type}>{stat.base_stat}</span>
              </div>
            </div>
        </div>
      )
    })
  }

  render() {
    let { pokemonId, pokemon } = this.props;
    pokemon = pokemon.charAt(0).toUpperCase() + pokemon.slice(1);

    return(
      <div className='col-xs-12 col-md-6'>
        <div className='choice-list'>
          <div className='choice-pokemon'>
            <p>{pokemon} #{pokemonId}</p>
          </div>
          <div className='choice-pokemon-portrait'>
            <img alt={pokemon} src={require(`../../../../public/sprites_v2/${pokemonId}.png`)} width={200} height={200} />
          </div>
          <div className='choice-pokemon-type'>
            <ul>
              {this.renderType()}
            </ul>
          </div>
          <div className='choice-pokemon-stats'>
              {this.renderStats()}
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Choice);
