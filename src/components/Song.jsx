import React from 'react';

const Song = ({ songs, image, id, title, author, setCurrentSong, setIsPlaying }) => {

   const selectedSong = () => {
      const selected = songs.filter(song => song.id === id)
      setCurrentSong(selected[0])
      setIsPlaying(false)
   }

   return (
      <li onClick={(e) => selectedSong(e)} className="song">
         <img className="song__image" alt={'Обложка альбома'} src={image} />
         <div>
            <h3 className="song__title">{title}</h3>
            <p className="song__author">{author}</p>
         </div>
      </li>
   );
};

export default Song;
