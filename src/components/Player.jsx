import React from 'react';
import { getTime } from '../utils';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight, faPause } from "@fortawesome/free-solid-svg-icons";
// import { playSkipSong } from '../utils';
const Player = ({
   songs,
   setSongs,
   currentSong,
   setCurrentSong,
   setIsPlaying,
   isPlaying,
   audioStream,
   setSongInfo,
   songInfo,
   setIsPaused }) => {

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
      transform: `translateX(${songInfo.animatinPercent}%)`,

   }
   const trackBackground = {
      background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`
   }


   // Play =>
   const handlerPlay = () => {
      audioStream.current.play();
      setIsPlaying(true)
      setIsPaused(false)
   };

   // Pause =>
   const handlerPause = () => {
      audioStream.current.pause()
      setIsPlaying(false)
      setIsPaused(true)
   };

   // Time skip =>
   const handlerInput = (e) => {
      audioStream.current.currentTime = e.target.value
      setSongInfo({
         ...songInfo, currentTime: e.target.value
      })
   };

   const skipTrackHandler = async (direction) => {
      let songIndex = songs.findIndex(song => song.id === currentSong.id)
      if (direction === 'forward') {
         await setCurrentSong(songs[(songIndex + 1) % songs.length])
      }
      if (direction === 'back') {
         if ((songIndex - 1) % songs.length === -1) {
            await setCurrentSong(songs[songs.length - 1])
            if (isPlaying) audioStream.current.play()
            return
         }
         await setCurrentSong(songs[(songIndex - 1) % songs.length])
      }
      if (isPlaying) audioStream.current.play()
      // playSkipSong(isPlaying, audioStream)
   }


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
                  name="" id="" />
               <div style={trackAnimate} className="timeControll__animate-track"></div>
            </div>


            <p>{songInfo.duration ? getTime(songInfo.duration) : "--:--"}</p>
         </div>
         <div className="playControll">
            <FontAwesomeIcon onClick={() => skipTrackHandler('back')} icon={faAngleLeft} size={"3x"} className={"playControll__skipBack"} />
            {!isPlaying
               ? <FontAwesomeIcon onClick={handlerPlay} icon={faPlay} size={"3x"} className={"playControll__play"} />
               : <FontAwesomeIcon onClick={handlerPause} icon={faPause} size={"3x"} className={"playControll__play"} />}
            <FontAwesomeIcon onClick={() => skipTrackHandler('forward')} icon={faAngleRight} size={"3x"} className={"playControll__skipForward"} />
         </div>

      </div>
   );
};

export default Player;
