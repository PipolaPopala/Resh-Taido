import * as classes from "./Person.module.css";
import { useState, useRef, useEffect } from "react";
import cn from "classnames";

function Person({ name, image, color, audioFile, ...props }) {
  const [focus, setFocus] = useState(false);
  const [say, setSay] = useState(false);
  const [audioSrc, setAudioSrc] = useState(null);
  const audioRef = useRef(null);

  // useEffect(() => {
  //   fetch(require(audioFile))
  //       .then(response => response.url)
  //       .then(url => {
  //         setAudioSrc(url);
  //       })
  //       .catch(error => console.error('Ошибка при загрузке аудио:', error));
  // }, []);

  useEffect(() => {
    const fetchAudio = async () => {
      try {
        const response = await fetch(audioFile);
        const url = response.url;
        setAudioSrc(url);
      } catch (error) {
        console.error('Ошибка при загрузке аудио:', error);
      }
    };

    fetchAudio();
  }, []);

  function focusOn() {
    setFocus(true);
  }

  function focusOff() {
    if (!say) {
      setFocus(false);
    }
  }

  function startSay() {
    setSay(true);
  }

  function endSay() {
    setSay(false);
  }

  useEffect(() => {
    if (audioRef.current && audioSrc) {
      if (say) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [say, audioSrc]);

  const style = {
    transform: "scale(1.05)",
    boxShadow: `0 0 30px ${color}`,
  };

  const personImageClass = cn(classes.personImage, {
    [classes.cursorNot]: say, // если say true, добавляем класс cursorNot
  });

  return (
    <div
      className={classes.personWrapper}
      onClick={startSay}
      onMouseEnter={focusOn}
      onMouseLeave={focusOff}
      {...props}
    >
      <img
        className={personImageClass}
        src={image}
        alt={`${name} image`}
        style={focus ? style : null}
      />
      <audio ref={audioRef} src={audioSrc} type="audio/mpeg" onEnded={endSay}></audio>
    </div>
  );
}

export default Person;
