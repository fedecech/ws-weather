import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";

import "../index.scss";

export const Weather = () => {
  const [position, setPosition] = useState(null);

  const [weather, setWeather] = useState(null);

  const location = useLocation();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (err) => alert(err.message)
    );
  }, []);

  useEffect(() => {
    if (position) {
      // use https://cors-anywhere.herokuapp.com to remove cors error
      fetch(
        `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?lat=${position.latitude}&lon=${position.longitude}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
        // , {
        //     method: "GET",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }
      ).then((d) => {
        d.json().then((data) => {
          setWeather(data);
        });
      });
    }
  }, [position]);

  return (
    <div className="today">
      <div className="today__inner">
        <div className="today__left-content">
          <h1>
            {weather ? weather.name : "London"} (
            {weather ? weather.sys.country : "UK"})
          </h1>

          <h2>
            <span>{weather ? weather.temp_max.toFixed(0) : 28}&deg;C</span>
            <span>{weather ? weather.temp_min.toFixed(0) : 16}&deg;C</span>
          </h2>

          <div className="today__sun-times">
            <div>
              <span>Sunrise</span>
              <span>
                {/* {moment.unix(weather.sys.sunrise).tz(timezone).format("LT")} */}
                {weather ? weather.sys.sunrise : "4:00 am"}
              </span>
            </div>

            <div>
              <span>Sunset</span>
              <span>
                {/* {moment.unix(weather.sys.sunset).tz(timezone).format("LT")} */}
                {weather ? weather.sys.sunset : "6:00 pm"}
              </span>
            </div>
          </div>
        </div>

        <div lassName="today__right-content">
          <div className="today__icon-wrapper">
            <div>
              {weather ? (
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt="Weather Icon"
                  layout="fill"
                />
              ) : (
                "Still fetching"
              )}
            </div>
          </div>

          <h3>{weather ? weather.weather[0].description : "still fetching"}</h3>
        </div>
      </div>
    </div>
  );
};
