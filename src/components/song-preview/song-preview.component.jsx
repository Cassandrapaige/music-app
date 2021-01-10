import React from "react";

import { SongPreviewWrapper, SongPreviewInfo } from "./song-preview.styles";

// Utils
import { playAudio } from "../utils";

const SongPreview = ({
  songs,
  currentSong,
  setCurrentSong,
  setIsPlaying,
  audioRef,
  isPlaying,
  setLibraryStatus,
  song: { cover, name, artist, id },
}) => {
  const songSelectHandler = () => {
    const selectedSong = songs.filter((state) => state.id === id);
    setCurrentSong(selectedSong[0]);
    setIsPlaying(true);
    if (isPlaying) {
      playAudio(audioRef);
    }
    setLibraryStatus(false);
  };

  return (
    <SongPreviewWrapper
      onClick={songSelectHandler}
      active={id === currentSong.id}
    >
      <img src={cover} alt={`Album cover for ${name} by ${artist}`} />
      <SongPreviewInfo>
        <h2>{name}</h2>
        <h3>{artist}</h3>
      </SongPreviewInfo>
    </SongPreviewWrapper>
  );
};

export default SongPreview;
