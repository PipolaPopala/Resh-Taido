import './Back.css';
import { useState, useEffect } from 'react';
import Square from '../square/Square';

function Back() {
  const [countSquares, setCountSquares] = useState(0);

  useEffect(() => {
    const calculateCountSquares = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      // Рассчитываем количество квадратов на основе размеров окна
      const squareSize = 20; // размер квадратов в пикселях
      const padding = 2; // отступы между квадратами в пикселях
      const countColumns = Math.floor(windowWidth / (squareSize + padding));
      const countRows = Math.floor(windowHeight / (squareSize + padding));
      const calculatedCountSquares = countColumns * countRows;
      return calculatedCountSquares;
    };
    
    const resizeHandler = () => {
      const calculatedCountSquares = calculateCountSquares();
      setCountSquares(calculatedCountSquares);
    };

    const calculatedCountSquares = calculateCountSquares();
    setCountSquares(calculatedCountSquares);
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <div className="container">
      <Square countSquares={countSquares} />
    </div>
  );
}

export default Back;
