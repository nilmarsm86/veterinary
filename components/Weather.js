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
        Máxima temperatura: {kelvinToCelcius(data.main.temp_max)}
        &#x2103;
      </p>
      <p>
        Mínima temperatura: {kelvinToCelcius(data.main.temp_min)}
        &#x2103;
      </p>
    </>
  );
};

export default Weather;
