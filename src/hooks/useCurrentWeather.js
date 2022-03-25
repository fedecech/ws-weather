import { useGeoLocation } from "./useGeoLocation";
import { useEffect, useState } from "react";
import { useSelectedLocationStore } from "../stores/useSelectedLocationStore";

/**
 * Hook to get current location or selected location weather
 * @returns {object}
 */
export const useCurrentWeather = () => {
  const [weather, setWeather] = useState(null);
  const geoData = useGeoLocation();
  const { location } = useSelectedLocationStore();

  useEffect(() => {
    if (geoData?.coords) {
      // use https://cors-anywhere.herokuapp.com to remove cors error
      const queryString = location
        ? `q=${location}`
        : `lat=${geoData.coords.latitude}&lon=${geoData.coords.longitude}`;

      fetch(
        `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?${queryString}&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
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
  }, [geoData?.coords, location]);

  return weather;
};
