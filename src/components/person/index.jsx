import * as classes from "./Person.module.css";
import { useState, useRef, useEffect } from "react";
import cn from "classnames";

function Person({ name, image, color, audioFile, ...props }) {
  const [focus, setFocus] = useState(false);
  const [isSaying, setIsSaying] = useState(false); // локальное состояние, которое вынусу в глобальное
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
    if (audioRef.current) {
      isSaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isSaying]);

  const style = {
    transform: "scale(1.05)",
    boxShadow: `0 0 30px ${color}`,
  };

  const personImageClass = cn(classes.personImage, {
    [classes.cursorNot]: isSaying,
  });

  const onEnded = () => {
    setIsSaying(false)
    setFocus(false)
  }

  return (
      <div
          className={classes.personWrapper}
          onClick={() => setIsSaying(true)}
          onMouseEnter={() => setFocus(true)}
          onMouseLeave={() => !isSaying && setFocus(false)}
          {...props}
      >
        <img
            className={personImageClass}
            src={image}
            alt={`${name} image`}
            style={focus ? style : null}
        />
        <audio ref={audioRef} type="audio/mpeg" onEnded={onEnded}/>
      </div>
  );
}

export default Person;
