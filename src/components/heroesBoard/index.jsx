import * as classes from "./HeroesBoard.module.css";
import Person from "../person";
import { useAtom } from 'jotai';
import { activeAudioAtom, activePersonAtom } from '../../store/audioStore';

const heroes = [
    {
        name: "Dominik",
        image: new URL('../../utilities/dominik/dominik.webp', import.meta.url),
        color: "#FFFFF2",
        audioFile: require("url:../../utilities/dominik/dominik.mp3")
    },
    {
        name: "Ezra",
        image: new URL('../../utilities/ezra/ezra.webp', import.meta.url),
        color: "#EACD80",
        audioFile: require("url:../../utilities/ezra/ezra.mp3")
    },
    {
        name: "Fobitiya",
        image: new URL('../../utilities/fobitiya/fobitiya.webp', import.meta.url),
        color: "#DC0708",
        audioFile: require("url:../../utilities/fobitiya/fobitiya.mp3")
    },
    {
        name: "Kastor",
        image: new URL('../../utilities/kastor/kastor.webp', import.meta.url),
        color: "#B863DD",
        audioFile: require("url:../../utilities/kastor/kastor.mp3")
    },
    {
        name: "Letissiya",
        image: new URL('../../utilities/letissiya/letissiya.webp', import.meta.url),
        color: "#66B7F2",
        audioFile: require("url:../../utilities/letissiya/letissiya.mp3")
    },
    {
        name: "Ritsar",
        image: new URL('../../utilities/ritsar/ritsar.webp', import.meta.url),
        color: "#DE6348",
        audioFile: require("url:../../utilities/ritsar/ritsar.mp3")
    },
];

function HeroesBoard() {
    const [activePerson, setActivePerson] = useAtom(activePersonAtom);
    const [activeAudio, setActiveAudio] = useAtom(activeAudioAtom);

    const playAudio = (personName, audioRef) => {
        if (activePerson) {
            activePerson.audioRef.current.pause();
        }

        // Остановка глобально активного аудио
        if (activeAudio) {
            activeAudio.pause();
            setActiveAudio(null);
        }

        setActivePerson({ name: personName, audioRef });
        audioRef.current.play();
        setActiveAudio(audioRef.current);
    };

  return (
    <div className={classes.imageWrapper}>
        {heroes.map((hero) => (
            <Person key={hero.name}
                    name={hero.name}
                    image={hero.image}
                    color={hero.color}
                    audioFile={hero.audioFile}
                    playAudio={playAudio}
                    activePerson={activePerson}
                    setActivePerson={setActivePerson}
            />
        ))}
    </div>
  );
}

export default HeroesBoard;
