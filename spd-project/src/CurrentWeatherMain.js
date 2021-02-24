import React, { useState, useEffect } from "react";

const key = "57ec25fe836ff428fdaf3d0167c32f00";

const useGeolocate = () => {
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`
        );
        const data = await response.json();
        setData(data);
        setLoading(false);
      });
    } else {
      setError(true);
    }
  }, []);

  return { error, data, loading };
};

export default () => {
  const { error, data, loading } = useGeolocate();
  if (!error) {
    return (
      <div class="weather-main-current">
        {loading ? (
          <div>Temp: ...loading</div>
        ) : (
          <div>Temp: {data.main.temp}</div>
        )}
        {loading ? (
          <div>Hi: ...loading</div>
        ) : (
          <div>Hi: {data.main.temp_max}</div>
        )}
        {loading ? (
          <div>Lo: ...loading</div>
        ) : (
          <div>Lo: {data.main.temp_min}</div>
        )}
        {loading ? (
          <div>Desc: ...loading</div>
        ) : (
          <div>Desc: {data.weather[0].description}</div>
        )}
        {loading ? (
          <div>Locat: ...loading</div>
        ) : (
          <div>
            Locat: {data.name}, {data.sys.country}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div class="weather-main-current">
        Your browser does not support Geolocation.
      </div>
    );
  }
};
