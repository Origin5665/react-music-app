import React from 'react'
import classnames from 'classnames';
const Cover = ({ currentSong, isPlaying, isPaused }) => {

   const { image, title, author } = currentSong

   return (
      <div className="cover">
         <img className={classnames("cover__image", isPlaying && "cover__image_play", isPaused && "cover__image_paused")}
            src={image}
            alt="Обложка альбома" />
         <h2 className="cover__title">{title}</h2>
         <h3 className="cover__artist">{author}</h3>
      </div>
   );
};

export default Cover;
