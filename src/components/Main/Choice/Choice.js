import React, { Component } from 'react';
import { connect } from 'react-redux';

class Choice  extends Component {

  render() {
    let { pokemonId, stats } = this.props;

    return(
      <div className='col-xs-6'>
        <div className='choice-list'>
          <div className='choice-pokemon-portrait'>
            <img src={require(`../../../../public/sprites/${pokemonId}.png`)} width={150} height={150} />
          </div>
          <div className='choice-pokemon-stats'>

          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Choice);
