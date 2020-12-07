import React from 'react'
import Song from './Song.jsx'
import classnames from 'classnames';
const Library = React.memo(({ songs, isPushed, setSongs, isPlaying, setIsPlaying, setCurrentSong, audioStream }) => {

   const songList = songs.map(item =>
      <Song
         isPlaying={isPlaying}
         setIsPlaying={setIsPlaying}
         setSongs={setSongs}
         audioStream={audioStream}
         songs={songs}
         setCurrentSong={setCurrentSong}
         key={item.id}
         dataSong={item}
      />);

   return (
      <div className={classnames("library", isPushed && "library_active")}>
         <h2 className="library__title">Все песни</h2>
         <ul className="library__list">
            {songList}
         </ul>
      </div>
   );
});

export default Library;
