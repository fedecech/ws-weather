import { useGeoLocation } from "./useGeoLocation";
import { useEffect, useState } from "react";

export const useCurrentWeather = () => {
    const [weather, setWeather] = useState(null);
    const geoData = useGeoLocation();

    useEffect(() => {
        if (geoData?.coords) {
            // use https://cors-anywhere.herokuapp.com to remove cors error
            fetch(
                `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?lat=${geoData.coords.latitude}&lon=${geoData.coords.longitude}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
                , {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            ).then((d) => {
                d.json().then((data) => {
                    setWeather(data);
                });
            });
        }
    }, [geoData?.coords]);

    return weather;
}