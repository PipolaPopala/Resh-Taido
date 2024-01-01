import './Person.css';
import { useState } from 'react';

function Person({ name, image, color, ...props}) {
  const [focus, setFocus] = useState(false)

  function handleSay() {
    console.log(`запускай радио ${name}`)
  }

  function focusOn() {
    setFocus(true)
  }

  function focusOff() {
    setFocus(false)
  }

  const style = {
      transform: 'scale(1.05)',
      boxShadow: `0 0 30px ${color}`,
  }

  return (
    <div className="person-wrapper" onClick={handleSay} onMouseEnter={focusOn} onMouseLeave={focusOff} {...props}>
      <img className="person-image" src={image} alt={`${name} image`} style={focus ? style : null}/>
    </div>
  );
}

export default Person;
