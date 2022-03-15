import { LoadingSpinner } from "../components/LoadingSpinner";
import { useCurrentWeather } from "../hooks/useCurrentWeather";
import moment from "moment";
import "../index.scss";
import { useWeather } from "../hooks/useWeather";

export const Weather = () => {
  const getHourlyWeather = (hourlyData) => {
    const endOfDay = moment().endOf("day").valueOf();
    const eodTimeStamp = Math.floor(endOfDay / 1000);

    const todaysData = hourlyData.filter((data) => data.dt < eodTimeStamp);

    return todaysData;
  };

  const weather = useCurrentWeather();
  const data = useWeather();

  var hourlyWeather =
    data != null
      ? getHourlyWeather(data.hourly)
      : [
          {
            dt: 1618315200,
            temp: 282.58,
            feels_like: 280.4,
            pressure: 1019,
            humidity: 68,
            dew_point: 276.98,
            uvi: 1.4,
            clouds: 19,
            visibility: 306,
            wind_speed: 4.12,
            wind_deg: 296,
            wind_gust: 7.33,
            weather: [
              {
                id: 801,
                main: "Clouds",
                description: "few clouds",
                icon: "02d",
              },
            ],
            pop: 0,
          },
        ];

  var weeklyWeather =
    data != null
      ? data.daily
      : [
          {
            dt: 1618308000,
            sunrise: 1618282134,
            sunset: 1618333901,
            moonrise: 1618284960,
            moonset: 1618339740,
            moon_phase: 0.04,
            temp: {
              day: 279.79,
              min: 275.09,
              max: 284.07,
              night: 275.09,
              eve: 279.21,
              morn: 278.49,
            },
            feels_like: {
              day: 277.59,
              night: 276.27,
              eve: 276.49,
              morn: 276.27,
            },
            pressure: 1020,
            humidity: 81,
            dew_point: 276.77,
            wind_speed: 3.06,
            wind_deg: 294,
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d",
              },
            ],
            clouds: 56,
            pop: 0.2,
            rain: 0.62,
            uvi: 1.93,
          },
        ];

  if (!weather || !data)
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LoadingSpinner />
      </div>
    );

  return (
    <div className="forecast">
      <div className="today">
        <div className="today__inner">
          <div className="today__left-content">
            <h1>
              {weather.name} ({weather.sys.country})
            </h1>

            <h2>
              <span>{weather.main.temp_max.toFixed(0)}&deg;C</span>
              <span>{weather.main.temp_min.toFixed(0)}&deg;C</span>
            </h2>

            <div className="today__sun-times">
              <div>
                <span>Sunrise</span>
                <span>{moment.unix(weather.sys.sunrise).format("LT")}</span>
              </div>

              <div>
                <span>Sunset</span>
                <span>{moment.unix(weather.sys.sunset).format("LT")}</span>
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

      <div className="hourly">
        <div className="hourly__inner">
          {hourlyWeather.length > 0 &&
            hourlyWeather.map((weather, index) => (
              <div className="hourly__box-wrapper" key={weather.dt}>
                <div className="hourly__box">
                  <span
                    className={`hourly__time ${
                      index === 0 ? "hourly__time--now" : ""
                    }`}
                  >
                    {index === 0 ? "Now" : moment.unix(weather.dt).format("LT")}
                  </span>

                  <img
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt={weather.weather[0].description}
                    width="100"
                    height="100"
                  />

                  <span>{weather.temp.toFixed(0)}&deg;C</span>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="weekly">
        <h3 className="weekly__title">
          Weekly <span>Weather</span>
        </h3>

        {weeklyWeather.length > 0 &&
          weeklyWeather.map((weather, index) => {
            if (index === 0) {
              return;
            }

            return (
              <div className="weekly__card" key={weather.dt}>
                <div className="weekly__inner">
                  <div className="weekly__left-content">
                    <div>
                      <h3>{moment.unix(weather.dt).format("dddd")}</h3>

                      <h4>
                        <span>{weather.temp.max.toFixed(0)}&deg;C</span>
                        <span>{weather.temp.min.toFixed(0)}&deg;C</span>
                      </h4>
                    </div>

                    <div className="weekly__sun-times">
                      <div>
                        <span>Sunrise</span>
                        <span>{moment.unix(weather.sunrise).format("LT")}</span>
                      </div>

                      <div>
                        <span>Sunset</span>
                        <span>{moment.unix(weather.sunset).format("LT")}</span>
                      </div>
                    </div>
                  </div>

                  <div className="weekly__right-content">
                    <div className="weekly__icon-wrapper">
                      <div>
                        <img
                          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                          alt="Weather Icon"
                          layout="fill"
                        />
                      </div>
                    </div>

                    <h5>{weather.weather[0].description}</h5>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
