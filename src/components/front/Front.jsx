import './Front.css';
import { useEffect, useRef, useState } from 'react';
import { Typography, Button } from '@mui/material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import HeroesBoard from '../heroesBoard/HeroesBoard';
import Opening from '../../utilities/opening.mp3';
import Ending from '../../utilities/ending.mp3';
import Kiss from '../../utilities/kiss.mp3';
import Hearts from '../../utilities/hearts.gif';

function Front() {
  const [opening, setOpening] = useState(false)
  const [ending, setEnding] = useState(false)
  const [likeDisable, setLikeDisable] = useState(false)
  // const [likes, setLikes] = useState(0)
  const audioOpening = useRef(null);
  const audioEnding = useRef(null);
  const audioLike = useRef(null);

  const pointerEvents = { pointerEvents: 'auto' }

  function toggleOpening() {
    setOpening(!opening)
    setEnding(false)
  }

  function endOpening() {
    setOpening(!opening)
  }

  useEffect(() => {
    if (opening) {
      audioOpening.current.play()
    } else {
      audioOpening.current.pause()
    }
  }, [opening])

  function toggleEnding() {
    setOpening(false)
    setEnding(!ending)
  }

  function endEnding() {
    setEnding(!ending)
  }

  useEffect(() => {
    if (ending) {
      audioEnding.current.play()
    } else {
      audioEnding.current.pause()
    }
  }, [ending])

  function handleLike() {
    audioLike.current.play()
    setLikeDisable(true)
  }

  function endLikes() {
    setLikeDisable(false)
    // setLikes(likes + 1)
  }

  return (
    <div className="front">
      <div className="action-wrapper">
        <Button variant="contained" color="inherit" style={pointerEvents} onClick={toggleOpening}>
          {opening ? <PauseRoundedIcon /> : <PlayArrowRoundedIcon />}
          <Typography variant="button">opening</Typography>
          <audio ref={audioOpening} src={Opening} onEnded={endOpening}></audio>
        </Button>
        <Button variant="contained" color="inherit" style={pointerEvents} onClick={toggleEnding}>
          {ending ? <PauseRoundedIcon /> : <PlayArrowRoundedIcon />}
          <Typography variant="button">ending</Typography>
          <audio ref={audioEnding} src={Ending} onEnded={endEnding}></audio>
        </Button>
      </div>
      <img src={Hearts} className={likeDisable ? 'hearts hearst-visible' : 'hearts hearts-not'} />
      <HeroesBoard />
      <div className="action-wrapper">
        <Button variant={likeDisable ? "outlined" : "contained"} color="error" style={!likeDisable ? pointerEvents : null} onClick={handleLike}>
          <Typography variant="button">likes</Typography>
          <audio ref={audioLike} src={Kiss} onEnded={endLikes}></audio>
        </Button>
        {/* <Typography variant="h4" component="p" color="error">{likes}</Typography> */}
        <FavoriteRoundedIcon fontSize="large" color="error" />
      </div>
    </div>
  );
}

export default Front;
