import moment from "moment";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { useWeather } from "../hooks/useWeather";

export const Wind = () => {
  const getHourlyWeather = (hourlyData) => {
    if (!hourlyData) return null;

    const endOfDay = moment().endOf("day").valueOf();
    const eodTimeStamp = Math.floor(endOfDay / 1000);

    const todaysData = hourlyData.filter((data) => data.dt < eodTimeStamp);

    return todaysData;
  };

  const data = useWeather();
  const hourlyWeather = getHourlyWeather(data?.hourly)

  if (!data || !hourlyWeather) return <LoadingSpinner />

  return (
    <div className="windPage">
      {hourlyWeather.length > 0 &&
        hourlyWeather.map((weather, index) => (
          <div key={weather.dt}>
            {weather.wind_speed}
            {weather.wind_deg}
            {weather.wind_gust}
          </div>
        ))}
    </div>
  );
};
