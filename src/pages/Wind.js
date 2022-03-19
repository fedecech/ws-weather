import moment from "moment";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { useWeather } from "../hooks/useWeather";
import wind from "../assets/wind.png";
import "./Wind.scss";


export const Wind = () => {
  const getHourlyWeather = (hourlyData) => {
    if (!hourlyData) return null;

    const endOfDay = moment().endOf("day").valueOf();
    const eodTimeStamp = Math.floor(endOfDay / 1000);

    const todaysData = hourlyData.filter((data) => data.dt < eodTimeStamp);

    return todaysData;
  };

  const data = useWeather();
  const hourlyWeather = getHourlyWeather(data?.hourly);

  if (!data || !hourlyWeather) return <LoadingSpinner />;

  return (
    <div className="windPage">
      {hourlyWeather.length > 0 &&
        hourlyWeather.map((weather, index) => (


          <div className="wind-card" key={weather.dt}>

            <div className="card-inner">
              <img
                className="box-image"
                src={wind}
                alt="Wind Image"

              />
              <div className="card-details">
                <span
                  className="time">
                  {index === 0 ? "Now" : moment.unix(weather.dt).format("LT")}
                </span>
                <h4>
                  Wind Speed: {weather.wind_speed}
                </h4>

                <h4>
                  Wind Degrees: {weather.wind_deg}
                </h4>

                <h4>
                  Wind Gust: {weather.wind_gust}
                </h4>


              </div>
            </div>
          </div>

        ))}
    </div>
  );
};
