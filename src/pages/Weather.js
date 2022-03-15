

import { LoadingSpinner } from "../components/LoadingSpinner";
import { useCurrentWeather } from "../hooks/useCurrentWeather";
import "../index.scss";

export const Weather = () => {

  const weather = useCurrentWeather();

  if (!weather) return <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><LoadingSpinner /></div>

  return (
    <div className="today">
      <div className="today__inner">
        <div className="today__left-content">
          <h1>
            {weather.name}
            {weather.sys.country}
          </h1>

          <h2>
            <span>{weather.main.temp_max.toFixed(0)}&deg;C</span>
            <span>{weather.main.temp_min.toFixed(0)}&deg;C</span>
          </h2>

          <div className="today__sun-times">
            <div>
              <span>Sunrise</span>
              <span>
                {/* {moment.unix(weather.sys.sunrise).tz(timezone).format("LT")} */}
                {weather.sys.sunrise}
              </span>
            </div>

            <div>
              <span>Sunset</span>
              <span>
                {/* {moment.unix(weather.sys.sunset).tz(timezone).format("LT")} */}
                {weather.sys.sunset}
              </span>
            </div>
          </div>
        </div>

        <div className="today__right-content">
          <div className="today__icon-wrapper">
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="Weather Icon"
                layout="fill"
              />
            </div>
          </div>

          <h3>{weather.weather[0].description}</h3>
        </div>
      </div>
    </div>
  );
};
