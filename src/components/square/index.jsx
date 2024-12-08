import * as classes from "./Square.module.css";
import { useState } from "react";

const colors = [
  "#10D6D3",
  "#4BCEFA",
  "#F174E9",
  "#B253F9",
  "#2D91CF",
  "#F439C2",
  "#F2B67F",
  "#9D2938",
];

const whiteSquares = []; // Можно указать индексы квадратов, которые должны оставаться белыми

function Square({ countSquares }) {
  const [squares, setSquares] = useState({});

  const setColor = (index) => {
    if (whiteSquares.includes(index)) {
      setSquares((prevSquares) => ({ ...prevSquares, [index]: "#fff" }));
    } else {
      setSquares((prevSquares) => ({
        ...prevSquares,
        [index]: colors[Math.floor(Math.random() * colors.length)],
      }));
    }
  };

  const removeColor = (index) => {
    if (!whiteSquares.includes(index)) {
      setSquares((prevSquares) => {
        const newSquares = { ...prevSquares };
        delete newSquares[index];
        return newSquares;
      });
    }
  };

  return (
    <>
      {Array.from({ length: countSquares }, (_, index) => (
        <div
          key={index}
          className={classes.square}
          style={{
            backgroundColor: squares[index] || "",
            boxShadow: squares[index]
              ? `0 0 2px ${squares[index]}, 0 0 10px ${squares[index]}`
              : "",
          }}
          onMouseOver={() => setColor(index)}
          onMouseLeave={() => removeColor(index)}
        ></div>
      ))}
    </>
  );
}

export default Square;
