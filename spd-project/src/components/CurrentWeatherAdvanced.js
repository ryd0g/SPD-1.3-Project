import React, { useState, useEffect } from "react";

const key = "57ec25fe836ff428fdaf3d0167c32f00";
const k = 273.15;

const useGeolocate = () => {
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sunrise, setSunrise] = useState("0:00:00");
  const [sunset, setSunset] = useState("0:00:00");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`
        );
        const data = await response.json();
        setData(data);

        var sunrise = data.sys.sunrise;
        var sunset = data.sys.sunset;
        const sunriseDate = new Date(sunrise * 1000);
        const sunsetDate = new Date(sunset * 1000);

        setSunrise(
          `${sunriseDate.getHours()}:${sunriseDate.getMinutes()}:${sunriseDate.getSeconds()}`
        );
        setSunset(
          `${sunsetDate.getHours()}:${sunsetDate.getMinutes()}:${sunsetDate.getSeconds()}`
        );

        setLoading(false);
      });
    } else {
      setError(true);
    }
  }, []);

  return { error, data, loading, sunrise, sunset };
};

export default () => {
  const { error, data, loading, sunrise, sunset } = useGeolocate();
  if (!error) {
    return (
      <>
        <div class="weather-advanced-current-header">Advanced Statistics:</div>
        <div class="weather-advanced-current">
          {loading ? (
            <div class="weather-advanced-fl">...loading</div>
          ) : (
            <div class="weather-advanced-fl">
              Feels like: {Math.floor(data.main.feels_like - k)} ° C
            </div>
          )}
          {loading ? (
            <div class="weather-advanced-high">...loading</div>
          ) : (
            <div class="weather-advanced-high">
              Temp High: {Math.floor(data.main.temp_max - k)}° C
            </div>
          )}
          {loading ? (
            <div class="weather-advanced-low">...loading</div>
          ) : (
            <div class="weather-advanced-low">
              Temp Low: {Math.floor(data.main.temp_min - k)}° C
            </div>
          )}
          {loading ? (
            <div class="weather-advanced-sunrise">...loading</div>
          ) : (
            <div class="weather-advanced-sunrise">Sunrise: {sunrise}</div>
          )}
          {loading ? (
            <div class="weather-advanced-sunset">...loading</div>
          ) : (
            <div class="weather-advanced-sunset">Sunset: {sunset}</div>
          )}
          {loading ? (
            <div class="weather-advanced-pressure">...loading</div>
          ) : (
            <div class="weather-advanced-pressure">
              Pressure: {data.main.pressure} inHg
            </div>
          )}
          {loading ? (
            <div class="weather-advanced-humidity">...loading</div>
          ) : (
            <div class="weather-advanced-humidity">
              Humidity: {data.main.humidity}%
            </div>
          )}
          {loading ? (
            <div class="weather-advanced-speed">...loading</div>
          ) : (
            <div class="weather-advanced-speed">
              Wind Speed: {data.wind.speed} km/h
            </div>
          )}
          {loading ? (
            <div class="weather-advanced-deg">...loading</div>
          ) : (
            <div class="weather-advanced-deg">
              Wind Degree: {data.wind.deg}°
            </div>
          )}
          {loading ? (
            <div class="weather-advanced-visibility">...loading</div>
          ) : (
            <div class="weather-advanced-visibility">
              Visibility: {data.visibility} meters
            </div>
          )}
        </div>
      </>
    );
  } else {
    return (
      <div class="weather-main-current">
        Error: Your browser does not support Geolocation. For more infomation
        click <a href="https://caniuse.com/geolocation">here.</a>
      </div>
    );
  }
};
