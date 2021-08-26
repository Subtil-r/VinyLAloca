//Player.js

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

const Player = () => (
  <AudioPlayer
    // autoPlay
    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3"
    onPlay={e => console.log("onPlay")}
    // other props here
  />
);

export default Player;
