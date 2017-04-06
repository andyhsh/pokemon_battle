import React, {Component} from 'react';
import Sound from 'react-sound';

//individual Pokemon => dumb component
class BattleMusic extends Component {

  render(){
    const music = this.props.music;

    return <Sound url={require(`../../../../public/music/${music}.mp3`)}
            playStatus={Sound.status.PLAYING} />
  }
}

export default BattleMusic;
