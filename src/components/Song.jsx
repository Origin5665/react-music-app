import React from 'react'
import classnames from 'classnames';
const Song = ({ currentSong, isPlaying }) => {

   const { cover, name, artist } = currentSong

   return (
      <div className="song">
         <img className={classnames("song__cover", isPlaying && "song__cover_play")} src={cover} alt="Обложка альбома" />
         <h2 className="song__title">{name}</h2>
         <h3 className="song__artist">{artist}</h3>
      </div>
   );
};

export default Song
