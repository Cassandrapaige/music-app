import React from "react";

import { SongWrapper, SongInfo } from "./selected-song.styles";

const SelectedSong = ({ currentSong: { cover, name, artist } }) => {
  return (
    <SongWrapper>
      <img src={cover} alt={`Album cover for ${name} by ${artist}`} />
      <SongInfo>
        <h2>{name}</h2>
        <h3>{artist}</h3>
      </SongInfo>
    </SongWrapper>
  );
};

export default SelectedSong;
