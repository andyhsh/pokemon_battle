import React, {Component} from 'react';
import Sound from 'react-sound';

//individual Pokemon => dumb component
class BattleMusic extends Component {

  render(){
    return <Sound url={require(`../../../../public/music/battle2.mp3`)}
            playStatus={Sound.status.PLAYING} />
  }
}

export default BattleMusic;
