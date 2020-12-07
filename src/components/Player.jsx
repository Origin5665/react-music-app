import React from 'react';
import { getTime } from '../utils';
import PlayControl from './PlayControl';

const Player = React.memo(({
   songs,
   setSongs,
   currentSong,
   setCurrentSong,
   setIsPlaying,
   isPlaying,
   audioStream,
   setSongInfo,
   songInfo,
}) => {

   React.useEffect(() => {
      const newSongs = songs.map(song => {
         if (song.id === currentSong.id) {
            return { ...song, active: true }
         } else {
            return { ...song, active: false }
         }
      })
      setSongs(newSongs)
   }, [currentSong])

   const trackAnimate = {
      transform: `translateX(${songInfo.animatingPercent}%)`,

   }
   const trackBackground = {
      background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`
   }


   /* Воспроизвести */
   const handlerPlay = () => {
      audioStream.current.play();
      setIsPlaying(true)
   };

   /* Пауза */
   const handlerPause = () => {
      audioStream.current.pause()
      setIsPlaying(false)
   };

   /* Перемотка времени */
   const handlerInput = React.useCallback(e => {
      audioStream.current.currentTime = e.target.value
      setSongInfo({
         ...songInfo, currentTime: e.target.value
      })
   }, [audioStream, setSongInfo, songInfo])
   /* Установка активной песни в библиотеке */
   const activeLibrarySongHandler = nextSong => {
      const newSongs = songs.map(song => {
         if (song.id === nextSong.id) return { ...song, active: true }
         return { ...song, active: false }
      });
      setSongs(newSongs);
   };

   /* Переключить трек */
   const skipTrackHandler = async (direction) => {

      let songIndex = songs.findIndex(song => song.id === currentSong.id);
      /* Для перехода в начало списка используем остаток
         индекса от длинны массива с треками */
      if (direction === 'forward') {
         await setCurrentSong(songs[(songIndex + 1) % songs.length]);
         activeLibrarySongHandler(songs[(songIndex + 1) % songs.length]);
      }
      /* Если длинна SongIndex меньше нуля, 
         Переключаем текущий трек на последний */
      if (direction === 'back') {

         if ((songIndex - 1) % songs.length === -1) {
            await setCurrentSong(songs[songs.length - 1]);
            activeLibrarySongHandler(songs[songs.length - 1]);
            return isPlaying && audioStream.current.play();

         }
         await setCurrentSong(songs[(songIndex - 1) % songs.length]);
         activeLibrarySongHandler(songs[songs.length - 1]);
      }
      isPlaying && audioStream.current.play();
   };


   return (
      <div className="player__wrapper">
         <div className="timeControll">
            <p>{songInfo.duration ? getTime(songInfo.currentTime) : "--:--"}</p>
            <div style={trackBackground} className="timeControll__track">
               <input
                  value={songInfo.currentTime}
                  step="1"
                  onChange={e => handlerInput(e)}
                  min={0}
                  max={songInfo.duration || 100}
                  className="timeControll__input"
                  type="range"
               />
               <div style={trackAnimate} className="timeControll__animate-track"></div>
            </div>
            <p>{songInfo.duration ? getTime(songInfo.duration) : "--:--"}</p>
         </div>
         <PlayControl isPlaying={isPlaying} skipTrackHandler={skipTrackHandler} handlerPause={handlerPause} handlerPlay={handlerPlay} />
      </div>
   );
});

export default Player;
