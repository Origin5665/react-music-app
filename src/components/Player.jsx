import React from 'react';
import { getTime } from '../utils';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight, faPause } from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, setIsPlaying, isPlaying, isPaused, setIsPaused }) => {

   const { audio } = currentSong;
   const audioStream = React.useRef(null);
   const inputRange = React.useRef(null)
   const [songInfo, setSongInfo] = React.useState({
      currentTime: 0,
      duration: 0
   })

   const handlerPlay = () => {
      audioStream.current.play();
      setIsPlaying(true)
      setIsPaused(false)
   };

   const handlerPause = () => {
      audioStream.current.pause()
      setIsPlaying(false)
      setIsPaused(true)
   };

   const handlerTime = (e) => {
      const current = e.target.currentTime;
      const duration = e.target.duration;
      setSongInfo({
         ...songInfo,
         currentTime: Math.trunc(current),
         duration: duration
      });
   };

   const handlerInput = (e) => {

      audioStream.current.currentTime = e.target.value
      setSongInfo({
         ...songInfo, currentTime: e.target.value
      })
   };

   return (
      <div className="player__wrapper">
         <h2>Плеер</h2>
         <div className="timeControll">
            <p>{songInfo.duration ? getTime(songInfo.currentTime) : "--:--"}</p>

            <input
               value={songInfo.currentTime}
               step="1"
               onChange={e => handlerInput(e)}
               ref={inputRange}
               min={0}
               max={songInfo.duration || 100}
               className="timeControll__input"
               type="range"
               name="" id="" />

            <p>{songInfo.duration ? getTime(songInfo.duration) : "--:--"}</p>
         </div>
         <div className="playControll">
            <FontAwesomeIcon icon={faAngleLeft} size={"2x"} className={"playControll__skipBack"} />
            {!isPlaying
               ? <FontAwesomeIcon onClick={handlerPlay} icon={faPlay} size={"3x"} className={"playControll__play"} />
               : <FontAwesomeIcon onClick={handlerPause} icon={faPause} size={"3x"} className={"playControll__play"} />}
            <FontAwesomeIcon icon={faAngleRight} size={"2x"} className={"playControll__skipForward"} />
         </div>
         <audio preload={'true'} onLoadedMetadata={handlerTime} onTimeUpdate={handlerTime} ref={audioStream} src={audio}></audio>
      </div>
   );
};

export default Player;
