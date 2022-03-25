import { useGeoLocation } from "./useGeoLocation";
import { useEffect, useState } from "react";

/**
 * Hook to get weather data for following days. If lat and long not provided it will use current location coords.
 * @param {number} lat Latitude
 * @param {number} long Longitude
 * @returns {any}
 */
export const useWeather = (lat, long) => {
  const [weather, setWeather] = useState(null);
  const geoData = useGeoLocation();

  useEffect(() => {
    if (geoData?.coords || (lat && long)) {
      // use https://cors-anywhere.herokuapp.com to remove cors error
      fetch(
        `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/onecall?lat=${
          geoData.coords.latitude || lat
        }&lon=${geoData.coords.longitude || long}&appid=${
          process.env.REACT_APP_API_KEY
        }&units=metric`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((d) => {
          d.json()
            .then((data) => {
              setWeather(data);
            })
            .catch((e) => console.log(e));
        })
        .catch((e) => console.log(e));
    }
  }, [geoData?.coords, lat, long]);

  return weather;
};
