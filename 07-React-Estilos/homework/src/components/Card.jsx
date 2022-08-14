import React from "react";
import a from "./Card.module.css";
export default function Card(props) {
  // acá va tu código
  return (
    <div className={a.cuadro}>
      <button className={a.btn} onClick={props.onClose}>
        X
      </button>
      <h4>{props.name}</h4>
      <div className={a.infoCuadro}>
        <div>
          <h5>Min</h5>
          <p>{Math.round(props.min / 10)}°</p>
        </div>
        <div>
          <h5>Max</h5>
          <p>{Math.round(props.max / 10)}°</p>
        </div>
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
            alt="Not Found"
          ></img>
        </div>
      </div>
    </div>
  );
}
