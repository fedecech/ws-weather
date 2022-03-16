import { useGeoLocation } from "./useGeoLocation";
import { useEffect, useState } from "react";

export const useStormGlass = () => {
  const [stormGlass, setStormGlass] = useState(null);
  const geoData = useGeoLocation();
  const params = 'waveHeight,waveDirection,waterTemperature,swellHeight,swellPeriod';

  useEffect(() => {
    if (geoData?.coords) {
      // use https://cors-anywhere.herokuapp.com to remove cors error
      fetch(
        `https://cors-anywhere.herokuapp.com/api.stormglass.io/v2/weather/point?lat=${geoData.coords.latitude}&lng=${geoData.coords.longitude}&params=${params}`,
        {
          method: "GET",
          headers: {
            'Authorization': `${process.env.STORM_GLASS_API_KEY}`,
          },
        }
      ).then((d) => {
        d.json().then((data) => {
          setStormGlass(data);
        });
      });
    }
  }, [geoData?.coords]);

  return stormGlass;
};
