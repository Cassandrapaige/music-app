import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

import {
  PlayerWrapper,
  ProgressBarWrapper,
  ProgressBar,
  Controls,
} from "./player-controls.styles";

// Utils
import { playAudio } from "../utils";

const PlayerControls = ({
  isPlaying,
  setIsPlaying,
  songs,
  currentSong,
  audioRef,
  setCurrentSong,
}) => {
  // State
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  // Destructuring our songInfo state
  const { currentTime, duration } = songInfo;

  // Event Handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const timeUpdateHandler = ({ target: { duration, currentTime } }) => {
    setSongInfo({
      ...songInfo,
      currentTime,
      duration,
    });
  };

  const getTime = (time, condition) => {
    if (typeof condition === "undefined") condition = time;
    return condition
      ? Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
      : "0:00";
  };

  const dragHandler = ({ target: { value: currentTime } }) => {
    setSongInfo({
      ...songInfo,
      currentTime,
    });
    audioRef.current.currentTime = currentTime;
  };

  const playNextTrack = (type) => {
    setIsPlaying(true);
    let currentIndex = songs.indexOf(currentSong);
    if (type === "forwards") {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    } else if (type === "backwards" && currentIndex !== 0) {
      setCurrentSong(songs[currentIndex - 1]);
    } else {
      setCurrentSong(songs[songs.length - 1]);
    }
    if (isPlaying) {
      playAudio(audioRef);
    }
  };

  return (
    <PlayerWrapper>
      <ProgressBarWrapper>
        <p>{getTime(currentTime)}</p>
        <ProgressBar
          type='range'
          min='0'
          max={duration || "0"}
          value={currentTime}
          onChange={dragHandler}
        />
        <p>{getTime(duration - currentTime, duration)}</p>
      </ProgressBarWrapper>
      <Controls>
        <FontAwesomeIcon
          size='2x'
          icon={faAngleLeft}
          onClick={() => playNextTrack("backwards")}
          title='Previous'
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          size='2x'
          icon={isPlaying ? faPause : faPlay}
          title='Play'
        />
        <FontAwesomeIcon
          size='2x'
          icon={faAngleRight}
          onClick={() => playNextTrack("forwards")}
          title='Next'
        />
      </Controls>

      <audio
        onEnded={() => playNextTrack("forwards")}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        src={currentSong.audio}
        ref={audioRef}
      />
    </PlayerWrapper>
  );
};

export default PlayerControls;
