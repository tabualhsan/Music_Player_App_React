import { library } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import LibrarySong from "./LibrarySong";


const Library = ({ songs, setCurrentSong, audioRef, song, id, key, isPlaying, setSongs, libraryStatus }) => {

    return (
        <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => 
                (<LibrarySong 
                            setCurrentSong={setCurrentSong}
                            song={song} 
                            songs={songs}
                            id = {song.id} 
                            key = {song.id}
                            audioRef={audioRef}
                            isPlaying={isPlaying}
                            setSongs= {setSongs}
                            libraryStatus={libraryStatus}
                            />))}
               

            </div>
        </div>
    );
};


export default Library;