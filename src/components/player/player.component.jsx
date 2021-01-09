import React, { useState, useRef } from "react";
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
} from "./player.styles";

const Player = ({ isPlaying, setIsPlaying, currentSong: { audio } }) => {
  // Refs
  const audioRef = useRef(null);

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

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = ({ target: { value } }) => {
    setSongInfo({
      ...songInfo,
      currentTime: value,
    });
    audioRef.current.currentTime = value;
  };

  return (
    <PlayerWrapper>
      <ProgressBarWrapper>
        <p>{getTime(currentTime)}</p>
        <ProgressBar
          type='range'
          min='0'
          max={duration}
          value={currentTime}
          onChange={dragHandler}
        />
        <p>{getTime(duration - currentTime)}</p>
      </ProgressBarWrapper>
      <Controls>
        <FontAwesomeIcon size='2x' icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={playSongHandler}
          size='2x'
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon size='2x' icon={faAngleRight} />
      </Controls>

      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        src={audio}
        ref={audioRef}
      />
    </PlayerWrapper>
  );
};

export default Player;
