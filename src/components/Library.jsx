import React from 'react'
import Song from './Song.jsx'

const Library = ({ songs, setIsPlaying, setCurrentSong }) => {

   const songList = songs.map(item =>
      <Song
         songs={songs}
         setCurrentSong={setCurrentSong}
         key={item.id}
         image={item.image}
         author={item.author}
         title={item.title}
         id={item.id}
         setIsPlaying={setIsPlaying}
      />);

   return (
      <div className="library">
         <h2 className="library__title">Песни</h2>
         <ul className="library__list">
            {songList}
         </ul>
      </div>
   );
};

export default Library;
