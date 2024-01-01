import './Person.css';
import { useState, useRef, useEffect } from 'react';

function Person({ name, image, color, speech, ...props }) {
  const [focus, setFocus] = useState(false)
  const [say, setSay] = useState(false)
  const audioSay = useRef(null);

  function focusOn() {
    setFocus(true)
  }

  function focusOff() {
    if (!say) {
      setFocus(false)
    }
  }

  function startSay() {
    setSay(true)
  }

  function endSay() {
    setSay(false)
  }

  useEffect(() => {
    if (say) {
      audioSay.current.play()
    } else {
      audioSay.current.pause()
      setFocus(false)
    }
  }, [say])

  const style = {
    transform: 'scale(1.05)',
    boxShadow: `0 0 30px ${color}`,
  }

  return (
    <div className="person-wrapper" onClick={startSay} onMouseEnter={focusOn} onMouseLeave={focusOff} {...props}>
      <img className={!say ? "person-image" : "person-image cursor-not"} src={image} alt={`${name} image`} style={focus ? style : null} />
      <audio ref={audioSay} src={speech[0]} onEnded={endSay}></audio>
    </div>
  );
}

export default Person;
