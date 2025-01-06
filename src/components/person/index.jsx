import * as classes from "./Person.module.css";
import { useState, useRef, useEffect } from "react";
// import cn from "classnames";

function Person({ name, image, color, audioFile, playAudio, activePerson, setActivePerson, ...props }) {
  const [focus, setFocus] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const fetchAudio = async () => {
      try {
        const response = await fetch(audioFile);
        audioRef.current.src = response.url;
      } catch (error) {
        console.error('Ошибка при загрузке аудио:', error);
      }
    };
    fetchAudio();
  }, [audioRef]);

  useEffect(() => {
    const handleLoadedMetadata = () => {
      setDuration(audioRef.current.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audioRef.current.currentTime);
    };

    audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const onClick = () => {
    if (audioRef.current.paused) {
      playAudio(name, audioRef);
    } else {
      audioRef.current.pause();
      setActivePerson(null);
    }
  };

  const playStyle = {
    transform: "scale(1.05)",
    boxShadow: `0 0 30px ${color}`,
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
      <div
          className={classes.personWrapper}
          onClick={onClick}
          onMouseEnter={() => setFocus(true)}
          onMouseLeave={() => setFocus(false)}
          style={focus || activePerson?.name === name ? playStyle : null}
          {...props}
      >
        <img
            className={classes.personImage}
            src={image}
            alt={`${name} image`}
        />
        <audio ref={audioRef} type="audio/mpeg"/>
        <span className={classes.time}>{formatTime(currentTime)} / {formatTime(duration)}</span>
      </div>
  );
}

export default Person;
