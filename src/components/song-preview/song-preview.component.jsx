import React from "react";

import { SongPreviewWrapper, SongPreviewInfo } from "./song-preview.styles";

const SongPreview = ({
  songs,
  setCurrentSong,
  setIsPlaying,
  song: { cover, name, artist, id },
}) => {
  const songSelectHandler = () => {
    const selectedSong = songs.filter((state) => state.id === id);
    setCurrentSong(selectedSong[0]);
    setIsPlaying(true);
  };

  return (
    <SongPreviewWrapper onClick={songSelectHandler}>
      <img src={cover} alt={`Album cover for ${name} by ${artist}`} />
      <SongPreviewInfo>
        <h2>{name}</h2>
        <h3>{artist}</h3>
      </SongPreviewInfo>
    </SongPreviewWrapper>
  );
};

export default SongPreview;
