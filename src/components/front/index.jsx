import * as classes from "./Front.module.css";
import { useEffect, useRef } from "react";
import { Typography, Button } from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import HeroesBoard from "../heroesBoard";
import { useAtom } from 'jotai';
import { activeAudioAtom, activePersonAtom } from '../../store/audioStore';

function Front() {
  const [activePerson, setActivePerson] = useAtom(activePersonAtom);
  const [activeAudio, setActiveAudio] = useAtom(activeAudioAtom);
  const audioOpening = useRef(null);
  const audioEnding = useRef(null);

  useEffect(() => {
    const fetchAudio = async () => {
      try {
        const openingResponse = await fetch(require("url:../../utilities/opening.mp3"));
        audioOpening.current.src = openingResponse.url;
      } catch (error) {
        console.error('Ошибка при загрузке аудио opening:', error);
      }

      try {
        const endingResponse = await fetch(require("url:../../utilities/ending.mp3"));
        audioEnding.current.src = endingResponse.url;
      } catch (error) {
        console.error('Ошибка при загрузке аудио ending:', error);
      }
    };

    fetchAudio();
  }, []);

  const toggleOpening = () => {
    if (activeAudio && activeAudio !== audioOpening.current) {
      activeAudio.pause();
    }
    if (audioOpening.current.paused) {
      audioOpening.current.play();
      setActiveAudio(audioOpening.current);
      setActivePerson(null)
    } else {
      audioOpening.current.pause();
      setActiveAudio(null);
    }
  };

  const toggleEnding = () => {
    if (activeAudio && activeAudio !== audioEnding.current) {
      activeAudio.pause();
    }
    if (audioEnding.current.paused) {
      audioEnding.current.play();
      setActiveAudio(audioEnding.current);
      setActivePerson(null)
    } else {
      audioEnding.current.pause();
      setActiveAudio(null);
    }
  };

  return (
    <div className={classes.front}>
      <div className={classes.actionWrapper}>
        <Button
          variant="contained"
          color="inherit"
          style={{pointerEvents: "auto"}}
          onClick={toggleOpening}
        >
          {audioOpening.current && !audioOpening.current.paused ? <PauseRoundedIcon /> : <PlayArrowRoundedIcon />}
          <Typography variant="button">opening</Typography>
          <audio ref={audioOpening} type="audio/mpeg"/>
        </Button>
        <Button
          variant="contained"
          color="inherit"
          style={{pointerEvents: "auto"}}
          onClick={toggleEnding}
        >
          {audioEnding.current && !audioEnding.current.paused ? <PauseRoundedIcon /> : <PlayArrowRoundedIcon />}
          <Typography variant="button">ending</Typography>
          <audio ref={audioEnding} type="audio/mpeg"/>
        </Button>
      </div>

      <HeroesBoard />
    </div>
  );
}

export default Front;
