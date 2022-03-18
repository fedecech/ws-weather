import { useWeather } from "../hooks/useWeather";
import { LoadingSpinner } from "../components/LoadingSpinner";

export const Sea = () => {
  const data = useWeather();

  if (!data) return <LoadingSpinner />

  return (
    <div>
      {data.current.pressure}
      {data.current.humidity}
      {data.current.dew_point}
      {data.current.uvi}
      {data.current.visibility}
      {data.current.clouds}
    </div>
  );
};
