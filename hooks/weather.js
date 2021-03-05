import React, { useState } from "react";

function useApi(initial) {
  let [weather, setWeather] = useState(initial);

  //debe estar en un archivo aparte
  async function api(city, country) {
    const apiKey = "e4bfd2e82565376da9672644df941162";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;

    let response = await fetch(url);
    let jsonResponse = await response.json();
    setWeather(jsonResponse);
  }

  return [weather, api];
}

function kelvinToCelcius(kelvin) {
  return parseInt(kelvin - 273.15, 10);
}

export { useApi, kelvinToCelcius };
