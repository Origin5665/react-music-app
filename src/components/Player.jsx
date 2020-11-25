import React from 'react';

// Icon:

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight, faPause } from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, setIsPlaying, isPlaying }) => {
   const { audio } = currentSong;
   const audioStream = React.useRef(null)


   const handlerPlay = () => {
      audioStream.current.play();
      setIsPlaying(true)
   }
   const handlerPause = () => {
      audioStream.current.pause()
      setIsPlaying(false)
   }



   return (
      <div className="player__wrapper">
         <h2>Плеер</h2>
         <div className="timeControll">
            <p>начало</p>
            <input className="timeControll__input" type="range" name="" id="" />
            <p>конец</p>
         </div>
         <div className="playControll">
            <FontAwesomeIcon icon={faAngleLeft} size={"2x"} className={"playControll__skipBack"} />
            {!isPlaying
               ? <FontAwesomeIcon onClick={handlerPlay} icon={faPlay} size={"3x"} className={"playControll__play"} />
               : <FontAwesomeIcon onClick={handlerPause} icon={faPause} size={"3x"} className={"playControll__play"} />}
            <FontAwesomeIcon icon={faAngleRight} size={"2x"} className={"playControll__skipForward"} />
         </div>
         <audio ref={audioStream} src={audio}></audio>
      </div>
   )
}

export default Player;
