import * as classes from "./Back.module.css";
import { useState, useEffect } from "react";
import Square from "../square";

const SQUARE_SIZE = 20; // размер квадратов в пикселях
const PADDING = 2; // отступы между квадратами в пикселях

function Back() {
  const [countSquares, setCountSquares] = useState(0);

  useEffect(() => {
    const calculateCountSquares = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      // Рассчитываем количество квадратов на основе размеров окна
      const countColumns = Math.floor(windowWidth / (SQUARE_SIZE + PADDING));
      const countRows = Math.floor(windowHeight / (SQUARE_SIZE + PADDING));
      return countColumns * countRows;
    };

    const resizeHandler = () => {
      setCountSquares(calculateCountSquares());
    };

    // Изначальный расчет
    setCountSquares(calculateCountSquares());

    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className={classes.container}>
      <Square countSquares={countSquares} />
    </div>
  );
}

export default Back;
