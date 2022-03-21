import { useWeather } from "../hooks/useWeather";
import { LoadingSpinner } from "../components/LoadingSpinner";
import "./Sea.scss";
import uvi from "../assets/uvi.png";
import dew from "../assets/dew.png";
import humidity from "../assets/humidity.png";
import atmpressure from "../assets/atmpressure.png";
import clouds from "../assets/clouds.png";
import visibility from "../assets/visibility.png";
import { useCurrentWeather } from "../hooks/useCurrentWeather";

export const Sea = () => {
  const w = useCurrentWeather();
  const data = useWeather(w?.coords?.lat, w?.coords?.lon);

  if (!data || !w)
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

  console.log(data);

  return (
    <div className="grid-container">
      <div className="grid-card">
        <img className="card-img" src={atmpressure} alt="Atmosphere pressure" />
        <h3 className="card-title"> Atmospheric Pressure</h3>
        <h5 className="card-value">{data.current.pressure} </h5>
      </div>

      <div className="grid-card">
        <img className="card-img" src={humidity} alt="Humidity" />
        <h3 className="card-title"> Humidity</h3>
        <h5 className="card-value">{data.current.humidity} </h5>
      </div>

      <div className="grid-card">
        <img className="card-img" src={dew} alt="dew" />
        <h3 className="card-title"> Dew Point</h3>
        <h5 className="card-value">{data.current.dew_point} </h5>
      </div>

      <div className="grid-card">
        <img className="card-img" src={uvi} alt="UVI" />
        <h3 className="card-title"> UVI</h3>
        <h5 className="card-value">{data.current.uvi} </h5>
      </div>

      <div className="grid-card">
        <img className="card-img" src={visibility} alt="Visibility" />
        <h3 className="card-title"> Visibility</h3>
        <h5 className="card-value">{data.current.visibility} </h5>
      </div>
      <div className="grid-card">
        <img className="card-img" src={clouds} alt="Clouds" />
        <h3 className="card-title">Clouds</h3>
        <h5 className="card-value">{data.current.clouds} </h5>
      </div>
    </div>
  );
};
