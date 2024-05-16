import { useEffect, useState } from "react";
import wheatherService from "../services/wheather";

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState({});

  console.log("Ingresa a weather");
  console.log("Tipo de varible: ", capital);

  useEffect(() => {
    wheatherService
      .getWheatherByCapital(capital)
      .then((infoWeather) => setWeather(infoWeather))
      .catch((error) => console.error("Error fetching weather data:", error));
  }, [capital]);

  return (
    <div>
      {weather && weather.main && weather.wind && (
        <div>
          <h2>Wheather in {capital}</h2>
          <p>Temperature {weather.main.temp - 273.15} Celsius</p>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt="Weather Icon"
          />
          <p>wind {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};
export default Weather;
