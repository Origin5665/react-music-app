import React from 'react';
import Library from './components/Library';
import Player from './components/Player';
import Cover from './components/Cover';
import './scss/main.scss';
import { chilhop } from './utils';
import Navigate from './components/Navigate';

const App = React.memo(() => {

  const [isPushed, setIsPushed] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [songs, setSongs] = React.useState(chilhop());
  const [currentSong, setCurrentSong] = React.useState(songs[0]);
  const [songInfo, setSongInfo] = React.useState({ currentTime: 0, duration: 0, animatinPercent: 0 });

  const audioStream = React.useRef(null);

  /* Устанавливает время, продолжительность и прогресс воспроизведения */
  const handlerTime = React.useCallback((e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(currentTime)
    const roundedDuration = Math.round(duration)
    const roundedPercent = Math.round((roundedCurrent / roundedDuration) * 100)

    setSongInfo({
      ...songInfo,
      currentTime,
      duration,
      animatingPercent: roundedPercent
    });
  }, [songInfo])
  /* Воспроизводит следующий трек */
  const songEndHandler = async () => {
    let songIndex = songs.findIndex(song => song.id === currentSong.id)
    await setCurrentSong(songs[(songIndex + 1) % songs.length])
    if (isPlaying) audioStream.current.play()
  }


  return (
    <div className="app" >
      <Navigate
        isPushed={isPushed}
        setIsPushed={setIsPushed} />
      <Cover
        isPlaying={isPlaying}
        currentSong={currentSong} />
      <Player
        setSongs={setSongs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        songs={songs}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        audioStream={audioStream}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying} />
      <Library
        isPushed={isPushed}
        setSongs={setSongs}
        audioStream={audioStream}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        setCurrentSong={setCurrentSong}
        songs={songs} />
      {/* AUDIO */}
      <audio
        onEnded={songEndHandler}
        preload={'true'}
        onLoadedMetadata={handlerTime}
        onTimeUpdate={handlerTime}
        ref={audioStream}
        src={currentSong.audio} />
    </div>
  );
})

export default App;
