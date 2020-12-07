import React from 'react';
import classNames from 'classnames';

const Song = React.memo(({ setSongs, songs, isPlaying, setCurrentSong, audioStream, dataSong }) => {

   const selectedSong = async () => {
      const selected = songs.filter(song => song.id === dataSong.id);
      await setCurrentSong(selected[0]);
      if (isPlaying) audioStream.current.play();

      const newSongs = songs.map(song => {
         if (song.id === dataSong.id) {
            return { ...song, active: true }
         } else {
            return { ...song, active: false }
         }
      })
      setSongs(newSongs)
   };

   return (
      <li onClick={(e) => selectedSong(e)} className={classNames("song", dataSong.active && "song_active")}>
         <img className="song__image" alt={'Обложка альбома'} src={dataSong.image} />
         <div>
            <h3 className="song__title">{dataSong.title}</h3>
            <p className="song__author">{dataSong.author}</p>
         </div>
      </li>
   );
});

export default Song;
