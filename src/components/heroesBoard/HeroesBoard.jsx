import './HeroesBoard.css';
import Person from '../person/Person';
import Dominik from '../../utilities/dominik.png';
import Ezra from '../../utilities/ezra.png';
import Fobitiya from '../../utilities/fobitiya.png';
import Kastor from '../../utilities/kastor.png';
import Letissiya from '../../utilities/letissiya.png';
import Ritsar from '../../utilities/ritsar.png';

function HeroesBoard() {
  return (
    <div className="image-wrapper">
      <Person name={'Dominik'} image={Dominik} color={'#FFFFF2'} /> 
      <Person name={'Ezra'} image={Ezra} color={'#EACD80'} /> 
      <Person name={'Fobitiya'} image={Fobitiya} color={'#DC0708'} /> 
      <Person name={'Kastor'} image={Kastor} color={'#B863DD'} /> 
      <Person name={'Letissiya'} image={Letissiya} color={'#66B7F2'} /> 
      <Person name={'Ritsar'} image={Ritsar} color={'#DE6348'} /> 
    </div>
  );
}

export default HeroesBoard;
