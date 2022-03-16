import moment from "moment";
import "../index.scss";
import { useWeather } from "../hooks/useWeather";

export const Wind = () => {

  const getHourlyWeather = (hourlyData) => {
    const endOfDay = moment().endOf("day").valueOf();
    const eodTimeStamp = Math.floor(endOfDay / 1000);

    const todaysData = hourlyData.filter((data) => data.dt < eodTimeStamp);

    return todaysData;
  };

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
  return <div className="windPage">
    {hourlyWeather.length > 0 &&
      hourlyWeather.map((weather, index) => (
        <div key={weather.dt}>
          {weather.wind_speed}
          {weather.wind_deg}
          {weather.wind_gust}
        </div>
      ))
    }
  </div>;
};
