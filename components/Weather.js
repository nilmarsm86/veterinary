import React from "react";
import { kelvinToCelcius } from "../hooks/weather";

const Weather = ({ data }) => {
  return (
    <>
      <h2>{data.name}:</h2>
      <p className="temperatura">
        {kelvinToCelcius(data.main.temp)} <span>&#x2103;</span>
      </p>
      <p>
        <b>Tiempo:</b> {data.weather[0].description}
      </p>
      <p>
        <b>Presión:</b> {data.main.pressure}
      </p>
      <p>
        <b>Humedad:</b> {data.main.humidity}
      </p>
    </>
  );
};

export default Weather;
