import * as classes from "./HeroesBoard.module.css";
import Person from "../person";

const heroes = [
    {
        name: "Dominik",
        image: new URL('../../utilities/dominik/dominik.webp', import.meta.url),
        color: "#FFFFF2",
        // audioFile: require("url:../../utilities/dominik/dominik.mp3")
        audioFile: require("url:../../utilities/dominik/dominikSay.wav") // success!
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
  return (
    <div className={classes.imageWrapper}>
        {heroes.map((hero) => (
            <Person key={hero.name} name={hero.name} image={hero.image} color={hero.color} audioFile={hero.audioFile} />
        ))}
    </div>
  );
}

export default HeroesBoard;
