import { LoadingSpinner } from "../components/LoadingSpinner";
import { useCurrentWeather } from "../hooks/useCurrentWeather";
import moment from "moment";
import "./Weather.scss";
import { useWeather } from "../hooks/useWeather";

export const Weather = () => {
  // Parsing info from use weather
  const getHourlyWeather = (hourlyData) => {
    if (!hourlyData) return null;

    const endOfDay = moment().endOf("day").valueOf();
    const eodTimeStamp = Math.floor(endOfDay / 1000);

    const todaysData = hourlyData.filter((data) => data.dt < eodTimeStamp);

    return todaysData;
  };

  // get current location selected coords and pass those to other hooks (that don't support search with city names)
  const weather = useCurrentWeather();

  const data = useWeather(weather?.coords?.lat, weather?.coords?.lon);

  const hourlyWeather = getHourlyWeather(data?.hourly);
  const weeklyWeather = data?.daily;

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
              return null;
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
