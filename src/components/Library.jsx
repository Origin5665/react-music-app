import React from 'react'
import Song from './Song.jsx'
import classnames from 'classnames';
const Library = ({ songs, isPushed, setSongs, isPlaying, setIsPlaying, setCurrentSong, audioStream }) => {

   const songList = songs.map(item =>
      <Song
         setSongs={setSongs}
         active={item.active}
         audioStream={audioStream}
         songs={songs}
         setCurrentSong={setCurrentSong}
         key={item.id}
         image={item.image}
         author={item.author}
         title={item.title}
         id={item.id}
         isPlaying={isPlaying}
         setIsPlaying={setIsPlaying}
      />);

   return (
      <div className={classnames("library", isPushed && "library_active")}>
         <h2 className="library__title">Песни</h2>
         <ul className="library__list">
            {songList}
         </ul>
      </div>
   );
};

export default Library;
