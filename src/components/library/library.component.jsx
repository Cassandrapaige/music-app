import React from "react";
import SongPreview from "../song-preview/song-preview.component";

import { LibraryWrapper } from "./library.styles";

const Library = ({ id, songs, ...rest }) => {
  return (
    <LibraryWrapper {...rest}>
      <h1>Library</h1>
      {songs.map((song) => (
        <SongPreview song={song} songs={songs} key={song.id} {...rest} />
      ))}
    </LibraryWrapper>
  );
};

export default Library;
