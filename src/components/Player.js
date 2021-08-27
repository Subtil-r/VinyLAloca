import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

const Player = () => (
  <AudioPlayer
    src="https://download.3mp3.buzz/e/Aphex-Twin-Actium.mp3"
    onPlay={e => console.log("onPlay")}
    // other props here
  />
);

export default Player;