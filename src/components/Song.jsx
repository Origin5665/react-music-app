import React from 'react';
import classNames from 'classnames';

const Song = ({ setSongs, songs, isPlaying, image, id, active, title, author, setCurrentSong, audioStream }) => {

   const selectedSong = async () => {
      const selected = songs.filter(song => song.id === id)
      await setCurrentSong(selected[0])
      if (isPlaying) audioStream.current.play()
      // playSkipSong(isPlaying, audioStream)
      const newSongs = songs.map(song => {
         if (song.id === id) {
            return { ...song, active: true }
         } else {
            return { ...song, active: false }
         }
      })
      setSongs(newSongs)
   };

   return (
      <li onClick={(e) => selectedSong(e)} className={classNames("song", active && "song_active")}>
         <img className="song__image" alt={'Обложка альбома'} src={image} />
         <div>
            <h3 className="song__title">{title}</h3>
            <p className="song__author">{author}</p>
         </div>
      </li>
   );
};

export default Song;
