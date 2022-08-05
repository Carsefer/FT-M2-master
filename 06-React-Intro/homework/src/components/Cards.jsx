import React from "react";
import cities from "../data";
import Card from "./Card";
export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div>
      {props.cities.map((x) => (
        <Card
          max={x.main.temp_max}
          min={x.main.temp_min}
          name={x.name}
          img={x.weather[0].icon}
          onClose={() => alert(x.name)}
        />
      ))}
    </div>
  );
}
