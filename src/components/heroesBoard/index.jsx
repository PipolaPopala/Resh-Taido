import * as classes from "./HeroesBoard.module.css";
import Person from "../person";

function HeroesBoard() {
    const dominik = new URL('../../utilities/dominik/dominik.png', import.meta.url);
    const ezra = new URL('../../utilities/ezra/ezra.png', import.meta.url);
    const fobitiya = new URL('../../utilities/fobitiya/fobitiya.png', import.meta.url);
    const kastor = new URL('../../utilities/kastor/kastor.png', import.meta.url);
    const letissiya = new URL('../../utilities/letissiya/letissiya.png', import.meta.url);
    const ritsar = new URL('../../utilities/ritsar/ritsar.png', import.meta.url);
    const sayDominik = require("url:../../utilities/dominik/dominik.mp3");
    const sayEzra = require("url:../../utilities/ezra/ezra.mp3");
    const sayFobitiya = require("url:../../utilities/fobitiya/fobitiya.mp3");
    const sayKastor = require("url:../../utilities/kastor/kastor.mp3");
    const sayLetissiya = require("url:../../utilities/letissiya/letissiya.mp3");
    const sayRitsar = require("url:../../utilities/ritsar/ritsar.mp3");
  return (
    <div className={classes.imageWrapper}>
      <Person
        name={"Dominik"}
        image={dominik}
        color={"#FFFFF2"}
        audioFile={sayDominik}
      />
      <Person
        name={"Ezra"}
        image={ezra}
        color={"#EACD80"}
        audioFile={sayEzra}
      />
      <Person
        name={"Fobitiya"}
        image={fobitiya}
        color={"#DC0708"}
        audioFile={sayFobitiya}
      />
      <Person
        name={"Kastor"}
        image={kastor}
        color={"#B863DD"}
        audioFile={sayKastor}
      />
      <Person
        name={"Letissiya"}
        image={letissiya}
        color={"#66B7F2"}
        audioFile={sayLetissiya}
      />
      <Person
        name={"Ritsar"}
        image={ritsar}
        color={"#DE6348"}
        audioFile={sayRitsar}
      />
    </div>
  );
}

export default HeroesBoard;
