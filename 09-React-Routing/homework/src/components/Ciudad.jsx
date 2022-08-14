import React from "react";
import { useParams } from "react-router-dom";

export default function City({ cb }) {
  let { ciudadId } = useParams();
  let city = cb(ciudadId);
  if (city) {
    return (
      <div className="city">
        <div className="container">
          <h2>{city.name}</h2>
          <div className="info">
            <div>Temperature: {city.temp} </div>
            <div>Weather: {city.weather} </div>
            <div>Wind: {city.wind} km/h </div>
            <div>Amount of clouds: {city.clouds}</div>
            <div>Latitude: {city.latitud}</div>
            <div>Longitude: {city.longitud}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return <h2>City not found</h2>;
  }
}
