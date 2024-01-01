import './HeroesBoard.css';
import Person from '../person/Person';
import Dominik from '../../utilities/dominik/dominik.png';
import Ezra from '../../utilities/ezra/ezra.png';
import Fobitiya from '../../utilities/fobitiya/fobitiya.png';
import Kastor from '../../utilities/kastor/kastor.png';
import Letissiya from '../../utilities/letissiya/letissiya.png';
import Ritsar from '../../utilities/ritsar/ritsar.png';
import SayDiminik from '../../utilities/dominik/dominik.mp3'
import SayEzra from '../../utilities/ezra/ezra.mp3'
import SayFobitiya from '../../utilities/fobitiya/fobitiya.mp3'
import SayKastor from '../../utilities/kastor/kastor.mp3'
import SayLetissiya from '../../utilities/letissiya/letissiya.mp3'
import SayRitsar from '../../utilities/ritsar/ritsar.mp3'

function HeroesBoard() {
  const sayDominik = [SayDiminik]
  const sayEzra = [SayEzra]
  const sayFobitiya = [SayFobitiya]
  const sayKastor = [SayKastor]
  const sayLetissiya = [SayLetissiya]
  const sayRitsar = [SayRitsar]
  return (
    <div className="image-wrapper">
      <Person name={'Dominik'} image={Dominik} color={'#FFFFF2'} speech={sayDominik} />
      <Person name={'Ezra'} image={Ezra} color={'#EACD80'} speech={sayEzra} />
      <Person name={'Fobitiya'} image={Fobitiya} color={'#DC0708'} speech={sayFobitiya} />
      <Person name={'Kastor'} image={Kastor} color={'#B863DD'} speech={sayKastor} />
      <Person name={'Letissiya'} image={Letissiya} color={'#66B7F2'} speech={sayLetissiya} />
      <Person name={'Ritsar'} image={Ritsar} color={'#DE6348'} speech={sayRitsar} />
    </div>
  );
}

export default HeroesBoard;
