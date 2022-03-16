
import "../index.scss";
import { useWeather } from "../hooks/useWeather";

export const Sea = () => {

  const data = useWeather();

  return <div>{data.current.pressure}
  {data.current.humidity}
  {data.current.dew_point}
  {data.current.uvi}
  {data.current.visibility}
  {data.current.clouds}

  
  </div>;
};
