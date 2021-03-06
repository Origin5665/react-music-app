import React from 'react'
import classnames from 'classnames';
const Cover = React.memo(({ currentSong, isPlaying, isPaused }) => {

   const { image, title, author } = currentSong

   return (
      <div className="cover">
         <img className={classnames("cover__image")}
            src={image}
            alt="Обложка альбома" />
         <h2 className="cover__title">{title}</h2>
         <h3 className="cover__artist">{author}</h3>
      </div>
   );
});

export default Cover;
