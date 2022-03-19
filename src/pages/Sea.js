import { useWeather } from "../hooks/useWeather";
import { LoadingSpinner } from "../components/LoadingSpinner";
import "./Sea.scss";
import uvi from "../assets/uvi.png";
import dew from "../assets/dew.png";
import humidity from "../assets/humidity.png";
import atmpressure from "../assets/atmpressure.png";
import clouds from "../assets/clouds.png";
import visibility from "../assets/visibility.png";

export const Sea = () => {
  const data = useWeather();

  if (!data) return <LoadingSpinner />;

  return (
    <div className="grid-container">
      <div className="grid-card">
        <img className="card-img" src={atmpressure} />
        <h3 className="card-title"> Atmospheric Pressure</h3>
        <h5 className="card-value">{data.current.pressure} </h5>
      </div>

      <div className="grid-card">
        <img className="card-img" src={humidity} />
        <h3 className="card-title"> Humidity</h3>
        <h5 className="card-value">{data.current.humidity} </h5>
      </div>

      <div className="grid-card">
        <img className="card-img" src={dew} />
        <h3 className="card-title"> Dew Point</h3>
        <h5 className="card-value">{data.current.dew_point} </h5>
      </div>

      <div className="grid-card">
        <img className="card-img" src={uvi} />
        <h3 className="card-title"> UVI</h3>
        <h5 className="card-value">{data.current.uvi} </h5>
      </div>

      <div className="grid-card">
        <img className="card-img" src={visibility} />
        <h3 className="card-title"> Visibility</h3>
        <h5 className="card-value">{data.current.visibility} </h5>
      </div>
      <div className="grid-card">
        <img className="card-img" src={clouds} />
        <h3 className="card-title">Clouds</h3>
        <h5 className="card-value">{data.current.clouds} </h5>
      </div>

      {/* {data.current.pressure}
      {data.current.humidity}
      {data.current.dew_point}
      {data.current.uvi}
      {data.current.visibility}
      {data.current.clouds} */}
    </div>
  );
};
