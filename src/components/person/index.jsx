import * as classes from "./Person.module.css";
import { useState, useRef, useEffect } from "react";
// import cn from "classnames";

function Person({ name, image, color, audioFile, playAudio, activePerson, setActivePerson, ...props }) {
  const [focus, setFocus] = useState(false);
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

  const onClick = () => {
    if (audioRef.current.paused) {
      playAudio(name, audioRef);
    } else {
      audioRef.current.pause();
      setActivePerson(null);
    }
  };

  const style = {
    transform: "scale(1.05)",
    boxShadow: `0 0 30px ${color}`,
  };

  return (
      <div
          className={classes.personWrapper}
          onClick={onClick}
          onMouseEnter={() => setFocus(true)}
          onMouseLeave={() => setFocus(false)}
          {...props}
      >
        <img
            className={classes.personImage}
            src={image}
            alt={`${name} image`}
            // style={focus || !audioRef.current.paused ? style : null}
            style={focus || activePerson?.name === name ? style : null}
        />
        <audio ref={audioRef} type="audio/mpeg"/>
      </div>
  );
}

export default Person;
