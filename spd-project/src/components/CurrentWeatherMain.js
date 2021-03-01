import React, { useState, useEffect } from "react";

const key = "57ec25fe836ff428fdaf3d0167c32f00";
const k = 273.15;

const useGeolocate = () => {
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState("Date");
  const [time, setTime] = useState("0:00:00");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`
        );
        const data = await response.json();
        setData(data);

        var dt = data.dt;
        const dateObj = new Date(dt * 1000);
        var ampm = "AM";
        var hours = dateObj.getHours();
        if (hours >= 12) {
          ampm = "PM";
          if (hours > 12) {
            hours = hours - 12;
          }
        }
        const minutes = dateObj.getMinutes();
        const seconds = dateObj.getSeconds();
        const dateString = dateObj.toDateString();
        setDate(dateString);
        setTime(`${hours}:${minutes}:${seconds} ${ampm}`);

        setLoading(false);
      });
    } else {
      setError(true);
    }
  }, []);

  return { error, data, loading, date, time };
};

export default () => {
  const { error, data, loading, date, time } = useGeolocate();
  if (!error) {
    return (
      <>
        <div class="weather-main-current-header">
          {loading ? (
            <div class="weather-main-date">...loading</div>
          ) : (
            <div class="weather-main-date">{date}</div>
          )}
        </div>
        <div class="weather-main-current">
          {loading ? (
            <div class="weather-main-locat">...loading</div>
          ) : (
            <div class="weather-main-locat">
              {data.name}, {data.sys.country}
            </div>
          )}
          {loading ? (
            <div class="weather-main-dt">...loading</div>
          ) : (
            <div class="weather-main-dt">{time}</div>
          )}
          {loading ? (
            <div class="weather-main-temp">...loading</div>
          ) : (
            <div class="weather-main-temp">
              {Math.floor(data.main.temp - k)}° C
            </div>
          )}
          {loading ? (
            <div class="weather-main-temp-hilo">...loading</div>
          ) : (
            <div class="weather-main-temp-hilo">
              {Math.floor(data.main.temp_max - k)}° C /
              {Math.floor(data.main.temp_min - k)}° C
            </div>
          )}
          {loading ? (
            <div class="weather-main-desc">...loading</div>
          ) : (
            <div class="weather-main-desc">{data.weather[0].description}</div>
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
