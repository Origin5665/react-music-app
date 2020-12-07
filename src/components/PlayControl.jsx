import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight, faPause } from "@fortawesome/free-solid-svg-icons";


const PlayControl = React.memo(({ skipTrackHandler, handlerPause, handlerPlay, isPlaying }) => {
   console.log("render");
   return (
      <div className="playControl">
         <button onClick={() => skipTrackHandler('back')}><FontAwesomeIcon icon={faAngleLeft} size={"3x"} className={"playControll__skipBack"} /></button>
         {!isPlaying
            ? <button onClick={handlerPlay}><FontAwesomeIcon icon={faPlay} size={"3x"} className={"playControll__play"} /></button>
            : <button onClick={handlerPause}><FontAwesomeIcon icon={faPause} size={"3x"} className={"playControll__play"} /></button>}
         <button onClick={() => skipTrackHandler('forward')}><FontAwesomeIcon icon={faAngleRight} size={"3x"} className={"playControll__skipForward"} /></button>
      </div>
   );
});

export default PlayControl;
