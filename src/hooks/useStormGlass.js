import { useGeoLocation } from "./useGeoLocation";
import { useEffect, useState } from "react";

export const useStormGlass = (lat, long) => {
  const [stormGlass, setStormGlass] = useState(null);
  const geoData = useGeoLocation();
  const params =
    "waveHeight,waveDirection,waterTemperature,swellHeight,swellPeriod";

  useEffect(() => {
    if (geoData?.coords || (long && lat)) {
      // use https://cors-anywhere.herokuapp.com to remove cors error
      fetch(
        `https://cors-anywhere.herokuapp.com/api.stormglass.io/v2/weather/point?lat=${geoData.coords.latitude || lat}&lng=${geoData.coords.longitude || long}&params=${params}`,
        {
          method: "GET",
          headers: {
            Authorization: `${process.env.STORM_GLASS_API_KEY}`,
          },
        }
      ).then((d) => {
        d.json().then((data) => {
          setStormGlass(data)
        }).catch(e => console.log(e));;
      }).catch(e => console.log(e));
    }
  }, [geoData?.coords, lat, long]);

  return stormGlass;
};
