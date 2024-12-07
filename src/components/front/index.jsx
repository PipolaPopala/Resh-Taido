import * as classes from "./Front.module.css";
import { useEffect, useRef, useState } from "react";
import { Typography, Button } from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import HeroesBoard from "../heroesBoard";

function Front() {
  const [opening, setOpening] = useState(false);
  const [ending, setEnding] = useState(false);
  const [openingSrc, setOpeningSrc] = useState(null);
  const [endingSrc, setEndingSrc] = useState(null);
  const audioOpening = useRef(null);
  const audioEnding = useRef(null);

  const pointerEvents = { pointerEvents: "auto" };

  function toggleOpening() {
    console.log('toggleOpening')
    setOpening(!opening);
    setEnding(false);
  }

  useEffect(() => {
    const fetchAudio = async () => {
      try {
        const openingResponse = await fetch(require("url:../../utilities/opening.mp3"));
        const openingUrl = openingResponse.url;
        setOpeningSrc(openingUrl);
      } catch (error) {
        console.error('Ошибка при загрузке аудио opening:', error);
      }

      try {
        const endingResponse = await fetch(require("url:../../utilities/ending.mp3"));
        const endingUrl = endingResponse.url;
        setEndingSrc(endingUrl);
      } catch (error) {
        console.error('Ошибка при загрузке аудио ending:', error);
      }
    };

    fetchAudio();
  }, []);

  useEffect(() => {
    if (audioOpening.current && openingSrc) {
      if (opening) {
        audioOpening.current.play();
      } else {
        audioOpening.current.pause();
      }
    }
  }, [opening, openingSrc]);

  function endOpening() {
    setOpening(!opening);
  }

  function toggleEnding() {
    setOpening(false);
    setEnding(!ending);
  }

  function endEnding() {
    setEnding(!ending);
  }

  useEffect(() => {
    if (audioEnding.current && endingSrc) {
      if (ending) {
        audioEnding.current.play();
      } else {
        audioEnding.current.pause();
      }
    }
  }, [ending, endingSrc]);

  return (
    <div className={classes.front}>
      <div className={classes.actionWrapper}>
        <Button
          variant="contained"
          color="inherit"
          style={pointerEvents}
          onClick={toggleOpening}
        >
          {opening ? <PauseRoundedIcon /> : <PlayArrowRoundedIcon />}
          <Typography variant="button">opening</Typography>
          <audio ref={audioOpening} src={openingSrc} type="audio/mpeg" onEnded={endOpening}></audio>
        </Button>
        <Button
          variant="contained"
          color="inherit"
          style={pointerEvents}
          onClick={toggleEnding}
        >
          {ending ? <PauseRoundedIcon /> : <PlayArrowRoundedIcon />}
          <Typography variant="button">ending</Typography>
          <audio ref={audioEnding} src={endingSrc} type="audio/mpeg" onEnded={endEnding}></audio>
        </Button>
      </div>

      <HeroesBoard />
    </div>
  );
}

export default Front;
