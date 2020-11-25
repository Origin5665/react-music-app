import React from 'react';
import Library from './components/Library';
import Player from './components/Player';
import Cover from './components/Cover';
import './scss/main.scss';
import { chilhop } from './utils';

const App = () => {
  const [isPaused, setIsPaused] = React.useState(false)
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [songs, setSongs] = React.useState(chilhop())
  const [currentSong, setCurrentSong] = React.useState(songs[1])

  return (
    <div className="app" >
      <Cover isPlaying={isPlaying} isPaused={isPaused} currentSong={currentSong} />
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} isPaused={isPaused} setIsPaused={setIsPaused} currentSong={currentSong} />
      <Library setIsPlaying={setIsPlaying} setCurrentSong={setCurrentSong} songs={songs} />
    </div>
  );
}

export default App;
