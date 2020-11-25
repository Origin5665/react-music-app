import React from 'react';
import Library from './components/Library';
import Player from './components/Player';
import Cover from './components/Cover';
import './scss/main.scss';
import { chilhop } from './utils';
import Navigate from './components/Navigate';

const App = () => {

  const [isPushed, setIsPushed] = React.useState(false)
  const [isPaused, setIsPaused] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [songs, setSongs] = React.useState(chilhop());
  const [currentSong, setCurrentSong] = React.useState(songs[1]);
  const [songInfo, setSongInfo] = React.useState({ currentTime: 0, duration: 0 })
  const audioStream = React.useRef(null);

  const handlerTime = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration
    });
  };

  return (
    <div className="app" >
      <Navigate isPushed={isPushed} setIsPushed={setIsPushed} />
      <Cover isPlaying={isPlaying} isPaused={isPaused} currentSong={currentSong} />
      <Player songInfo={songInfo} setSongInfo={setSongInfo} audioStream={audioStream} isPlaying={isPlaying} setIsPlaying={setIsPlaying} setIsPaused={setIsPaused} />
      <Library isPushed={isPushed} setSongs={setSongs} audioStream={audioStream} setIsPlaying={setIsPlaying} isPlaying={isPlaying} setCurrentSong={setCurrentSong} songs={songs} />
      <audio preload={'true'} onLoadedMetadata={handlerTime} onTimeUpdate={handlerTime} ref={audioStream} src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
