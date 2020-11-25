import React from 'react';
import Player from './components/Player'
import Song from './components/Song'
import './scss/main.scss'
import data from './utils';

const App = () => {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [song, setSong] = React.useState(data())
  const [currentSong, setCurrentSong] = React.useState(song[0])

  return (
    <div className="app" >
      <h1>Музыкальный плеер!</h1>
      <Song isPlaying={isPlaying} currentSong={currentSong} />
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} />
    </div>
  );
}

export default App;
