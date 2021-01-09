import React, { useState } from "react";
import styled from "styled-components";

// styles
import "./App.css";

// import components
import Player from "./components/player/player.component";
import SelectedSong from "./components/selected-song/selected-song.component";
import Library from "./components/library/library.component";

// import song data
import DATA from "./data";

const App = () => {
  const [songs, setSongs] = useState(DATA());
  const [current, setCurrent] = useState(songs[2]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className='App'>
      <Container>
        <Library
          songs={songs}
          setCurrentSong={setCurrent}
          setIsPlaying={setIsPlaying}
        />
        <CurrentSongWrapper>
          <SelectedSong
            currentSong={current}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
          <Player
            currentSong={current}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
        </CurrentSongWrapper>
      </Container>
    </div>
  );
};

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 2fr;
`;

export const CurrentSongWrapper = styled.section`
  padding: 50px 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export default App;
