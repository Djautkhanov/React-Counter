import React from "react";
import { useState } from "react";
import "./Main.css";

const Main = () => {
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    setNumber(number + 1);
  };
  const reduceClick = () => {
    setNumber(number - 1);
  };
  const resetClick = () => {
    setNumber(0);
  };

  return (
    <main className="main">
      <div className="main__counter">{number}</div>
      <ul className="main__btn">
        <button className="btn btn__color1" onClick={handleClick}>
          Увеличить
        </button>
        <button className="btn btn__color2" onClick={reduceClick}>
          Уменьшить
        </button>
        <button className="btn btn__color3" onClick={resetClick}>
          Сбросить
        </button>
      </ul>
    </main>
  );
};
export default Main;
