import React, { useState, useRef } from "react";
import styled from "styled-components";

// styles
import "./App.css";

// import components
import PlayerControls from "./components/player-controls/player-controls.component";
import SelectedSong from "./components/selected-song/selected-song.component";
import Library from "./components/library/library.component";
import Navbar from "./components/navbar/navbar.component";

// import song data
import DATA from "./data";

const App = () => {
  // Refs
  const audioRef = useRef(null);

  // Universal State
  const [songs, setSongs] = useState(DATA());
  const [current, setCurrent] = useState(songs[2]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);

  return (
    <div id='App'>
      <Navbar
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
      <Container>
        <Library
          isOpen={libraryStatus}
          currentSong={current}
          songs={songs}
          setCurrentSong={setCurrent}
          setIsPlaying={setIsPlaying}
          audioRef={audioRef}
          isPlaying={isPlaying}
          setSongs={setSongs}
          setLibraryStatus={setLibraryStatus}
        />
        <MusicPlayer>
          <SelectedSong
            currentSong={current}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
          <PlayerControls
            currentSong={current}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            songs={songs}
            setCurrentSong={setCurrent}
            audioRef={audioRef}
          />
        </MusicPlayer>
      </Container>
    </div>
  );
};

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const MusicPlayer = styled.section`
  padding: 50px 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export default App;
