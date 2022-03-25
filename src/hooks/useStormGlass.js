import { useGeoLocation } from "./useGeoLocation";
import { useEffect, useState } from "react";

/**
 * Hook to get info about waves and more specific data related to surfers. If lat and long not provided it will use current location coords.
 * @param {*} lat Latitude
 * @param {*} long Longitude
 * @returns {any}
 */
export const useStormGlass = (lat, long) => {
  const [stormGlass, setStormGlass] = useState(null);
  const geoData = useGeoLocation();
  const params =
    "waveHeight,waveDirection,waterTemperature,swellHeight,swellPeriod";

  useEffect(() => {
    if (geoData?.coords || (long && lat)) {
      // use https://cors-anywhere.herokuapp.com to remove cors error
      fetch(
        `https://cors-anywhere.herokuapp.com/api.stormglass.io/v2/weather/point?lat=${geoData.coords.latitude || lat
        }&lng=${geoData.coords.longitude || long}&params=${params}`,
        {
          method: "GET",
          headers: {
            Authorization: `${process.env.REACT_APP_STORM_GLASS_API_KEY}`,
          },
        }
      )
        .then((d) => {
          d.json()
            .then((data) => {
              setStormGlass(data);
            })
            .catch((e) => console.log(e));
        })
        .catch((e) => console.log(e));
    }
  }, [geoData?.coords, lat, long]);

  return stormGlass;
};




export const mockData = {
  "hours": [
    {
      "swellHeight": {
        "dwd": 0.12,
        "icon": 0.49,
        "sg": 0.49
      },
      "swellPeriod": {
        "dwd": 2.32,
        "icon": 8.83,
        "sg": 8.83
      },
      "time": "2022-03-23T00:00:00+00:00",
      "waterTemperature": {
        "meto": 8.97,
        "noaa": 9.41,
        "sg": 8.97
      },
      "waveDirection": {
        "icon": 195.13,
        "sg": 195.13
      },
      "waveHeight": {
        "dwd": 0.12,
        "icon": 0.5,
        "sg": 0.5
      }
    },
    {
      "swellHeight": {
        "dwd": 0.11,
        "icon": 0.5,
        "sg": 0.5
      },
      "swellPeriod": {
        "dwd": 2.35,
        "icon": 8.71,
        "sg": 8.71
      },
      "time": "2022-03-23T01:00:00+00:00",
      "waterTemperature": {
        "meto": 8.97,
        "noaa": 9.04,
        "sg": 8.97
      },
      "waveDirection": {
        "icon": 195.36,
        "sg": 195.36
      },
      "waveHeight": {
        "dwd": 0.11,
        "icon": 0.5,
        "sg": 0.5
      }
    },
    {
      "swellHeight": {
        "dwd": 0.11,
        "icon": 0.5,
        "sg": 0.5
      },
      "swellPeriod": {
        "dwd": 2.39,
        "icon": 8.58,
        "sg": 8.58
      },
      "time": "2022-03-23T02:00:00+00:00",
      "waterTemperature": {
        "meto": 8.97,
        "noaa": 8.68,
        "sg": 8.97
      },
      "waveDirection": {
        "icon": 195.59,
        "sg": 195.59
      },
      "waveHeight": {
        "dwd": 0.11,
        "icon": 0.51,
        "sg": 0.51
      }
    },
    {
      "swellHeight": {
        "dwd": 0.11,
        "icon": 0.51,
        "sg": 0.51
      },
      "swellPeriod": {
        "dwd": 2.42,
        "icon": 8.46,
        "sg": 8.46
      },
      "time": "2022-03-23T03:00:00+00:00",
      "waterTemperature": {
        "meto": 8.97,
        "noaa": 8.31,
        "sg": 8.97
      },
      "waveDirection": {
        "icon": 195.82,
        "sg": 195.82
      },
      "waveHeight": {
        "dwd": 0.11,
        "icon": 0.51,
        "sg": 0.51
      }
    },
    {
      "swellHeight": {
        "dwd": 0.11,
        "icon": 0.5,
        "sg": 0.5
      },
      "swellPeriod": {
        "dwd": 2.44,
        "icon": 8.6,
        "sg": 8.6
      },
      "time": "2022-03-23T04:00:00+00:00",
      "waterTemperature": {
        "meto": 8.97,
        "noaa": 8.01,
        "sg": 8.97
      },
      "waveDirection": {
        "icon": 198.47,
        "sg": 198.47
      },
      "waveHeight": {
        "dwd": 0.11,
        "icon": 0.5,
        "sg": 0.5
      }
    },
    {
      "swellHeight": {
        "dwd": 0.11,
        "icon": 0.49,
        "sg": 0.49
      },
      "swellPeriod": {
        "dwd": 2.45,
        "icon": 8.75,
        "sg": 8.75
      },
      "time": "2022-03-23T05:00:00+00:00",
      "waterTemperature": {
        "meto": 8.96,
        "noaa": 7.71,
        "sg": 8.96
      },
      "waveDirection": {
        "icon": 201.12,
        "sg": 201.12
      },
      "waveHeight": {
        "dwd": 0.11,
        "icon": 0.49,
        "sg": 0.49
      }
    },
    {
      "swellHeight": {
        "dwd": 0.1,
        "icon": 0.48,
        "sg": 0.48
      },
      "swellPeriod": {
        "dwd": 2.46,
        "icon": 8.89,
        "sg": 8.89
      },
      "time": "2022-03-23T06:00:00+00:00",
      "waterTemperature": {
        "meto": 8.96,
        "noaa": 7.4,
        "sg": 8.96
      },
      "waveDirection": {
        "icon": 203.77,
        "sg": 203.77
      },
      "waveHeight": {
        "dwd": 0.1,
        "icon": 0.48,
        "sg": 0.48
      }
    },
    {
      "swellHeight": {
        "dwd": 0.1,
        "icon": 0.47,
        "sg": 0.47
      },
      "swellPeriod": {
        "dwd": 2.45,
        "icon": 9.05,
        "sg": 9.05
      },
      "time": "2022-03-23T07:00:00+00:00",
      "waterTemperature": {
        "meto": 8.96,
        "noaa": 9.5,
        "sg": 8.96
      },
      "waveDirection": {
        "icon": 206,
        "sg": 206
      },
      "waveHeight": {
        "dwd": 0.1,
        "icon": 0.47,
        "sg": 0.47
      }
    },
    {
      "swellHeight": {
        "dwd": 0.09,
        "icon": 0.46,
        "sg": 0.46
      },
      "swellPeriod": {
        "dwd": 2.44,
        "icon": 9.22,
        "sg": 9.22
      },
      "time": "2022-03-23T08:00:00+00:00",
      "waterTemperature": {
        "meto": 8.96,
        "noaa": 11.59,
        "sg": 8.96
      },
      "waveDirection": {
        "icon": 208.23,
        "sg": 208.23
      },
      "waveHeight": {
        "dwd": 0.09,
        "icon": 0.47,
        "sg": 0.47
      }
    },
    {
      "swellHeight": {
        "dwd": 0.09,
        "icon": 0.45,
        "sg": 0.45
      },
      "swellPeriod": {
        "dwd": 2.43,
        "icon": 9.38,
        "sg": 9.38
      },
      "time": "2022-03-23T09:00:00+00:00",
      "waterTemperature": {
        "meto": 8.96,
        "noaa": 13.69,
        "sg": 8.96
      },
      "waveDirection": {
        "icon": 210.46,
        "sg": 210.46
      },
      "waveHeight": {
        "dwd": 0.09,
        "icon": 0.46,
        "sg": 0.46
      }
    },
    {
      "swellHeight": {
        "dwd": 0.08,
        "icon": 0.45,
        "sg": 0.45
      },
      "swellPeriod": {
        "dwd": 2.43,
        "icon": 9.38,
        "sg": 9.38
      },
      "time": "2022-03-23T10:00:00+00:00",
      "waterTemperature": {
        "meto": 8.96,
        "noaa": 15.65,
        "sg": 8.96
      },
      "waveDirection": {
        "icon": 210.97,
        "sg": 210.97
      },
      "waveHeight": {
        "dwd": 0.08,
        "icon": 0.46,
        "sg": 0.46
      }
    },
    {
      "swellHeight": {
        "dwd": 0.08,
        "icon": 0.44,
        "sg": 0.44
      },
      "swellPeriod": {
        "dwd": 2.42,
        "icon": 9.39,
        "sg": 9.39
      },
      "time": "2022-03-23T11:00:00+00:00",
      "waterTemperature": {
        "meto": 8.96,
        "noaa": 17.62,
        "sg": 8.96
      },
      "waveDirection": {
        "icon": 211.47,
        "sg": 211.47
      },
      "waveHeight": {
        "dwd": 0.08,
        "icon": 0.45,
        "sg": 0.45
      }
    },
    {
      "swellHeight": {
        "dwd": 0.07,
        "icon": 0.44,
        "sg": 0.44
      },
      "swellPeriod": {
        "dwd": 2.42,
        "icon": 9.39,
        "sg": 9.39
      },
      "time": "2022-03-23T12:00:00+00:00",
      "waterTemperature": {
        "meto": 8.96,
        "noaa": 19.59,
        "sg": 8.96
      },
      "waveDirection": {
        "icon": 211.98,
        "sg": 211.98
      },
      "waveHeight": {
        "dwd": 0.07,
        "icon": 0.45,
        "sg": 0.45
      }
    },
    {
      "swellHeight": {
        "dwd": 0.07,
        "icon": 0.44,
        "sg": 0.44
      },
      "swellPeriod": {
        "dwd": 2.41,
        "icon": 9.39,
        "sg": 9.39
      },
      "time": "2022-03-23T13:00:00+00:00",
      "waterTemperature": {
        "meto": 8.96,
        "noaa": 19.59,
        "sg": 8.96
      },
      "waveDirection": {
        "icon": 214.14,
        "sg": 214.14
      },
      "waveHeight": {
        "dwd": 0.07,
        "icon": 0.44,
        "sg": 0.44
      }
    },
    {
      "swellHeight": {
        "dwd": 0.07,
        "icon": 0.43,
        "sg": 0.43
      },
      "swellPeriod": {
        "dwd": 2.52,
        "icon": 9.4,
        "sg": 9.4
      },
      "time": "2022-03-23T14:00:00+00:00",
      "waterTemperature": {
        "meto": 8.95,
        "noaa": 19.6,
        "sg": 8.95
      },
      "waveDirection": {
        "icon": 216.29,
        "sg": 216.29
      },
      "waveHeight": {
        "dwd": 0.07,
        "icon": 0.44,
        "sg": 0.44
      }
    },
    {
      "swellHeight": {
        "dwd": 0.06,
        "icon": 0.43,
        "sg": 0.43
      },
      "swellPeriod": {
        "dwd": 2.62,
        "icon": 9.4,
        "sg": 9.4
      },
      "time": "2022-03-23T15:00:00+00:00",
      "waterTemperature": {
        "meto": 8.95,
        "noaa": 19.61,
        "sg": 8.95
      },
      "waveDirection": {
        "icon": 218.45,
        "sg": 218.45
      },
      "waveHeight": {
        "dwd": 0.08,
        "icon": 0.43,
        "sg": 0.43
      }
    },
    {
      "swellHeight": {
        "dwd": 0.06,
        "icon": 0.42,
        "sg": 0.42
      },
      "swellPeriod": {
        "dwd": 2.57,
        "icon": 9.49,
        "sg": 9.49
      },
      "time": "2022-03-23T16:00:00+00:00",
      "waterTemperature": {
        "meto": 8.95,
        "noaa": 17.79,
        "sg": 8.95
      },
      "waveDirection": {
        "icon": 220.1,
        "sg": 220.1
      },
      "waveHeight": {
        "dwd": 0.09,
        "icon": 0.42,
        "sg": 0.42
      }
    },
    {
      "swellHeight": {
        "dwd": 0.08,
        "icon": 0.41,
        "sg": 0.41
      },
      "swellPeriod": {
        "dwd": 2.04,
        "icon": 9.57,
        "sg": 9.57
      },
      "time": "2022-03-23T17:00:00+00:00",
      "waterTemperature": {
        "meto": 8.95,
        "noaa": 15.97,
        "sg": 8.95
      },
      "waveDirection": {
        "icon": 221.74,
        "sg": 221.74
      },
      "waveHeight": {
        "dwd": 0.1,
        "icon": 0.41,
        "sg": 0.41
      }
    },
    {
      "swellHeight": {
        "dwd": 0.09,
        "icon": 0.4,
        "sg": 0.4
      },
      "swellPeriod": {
        "dwd": 1.82,
        "icon": 9.66,
        "sg": 9.66
      },
      "time": "2022-03-23T18:00:00+00:00",
      "waterTemperature": {
        "meto": 8.95,
        "noaa": 14.15,
        "sg": 8.95
      },
      "waveDirection": {
        "icon": 223.39,
        "sg": 223.39
      },
      "waveHeight": {
        "dwd": 0.09,
        "icon": 0.4,
        "sg": 0.4
      }
    },
    {
      "swellHeight": {
        "dwd": 0.08,
        "icon": 0.39,
        "sg": 0.39
      },
      "swellPeriod": {
        "dwd": 1.91,
        "icon": 9.5,
        "sg": 9.5
      },
      "time": "2022-03-23T19:00:00+00:00",
      "waterTemperature": {
        "meto": 8.95,
        "noaa": 13.17,
        "sg": 8.95
      },
      "waveDirection": {
        "icon": 223.03,
        "sg": 223.03
      },
      "waveHeight": {
        "dwd": 0.08,
        "icon": 0.4,
        "sg": 0.4
      }
    },
    {
      "swellHeight": {
        "dwd": 0.07,
        "icon": 0.39,
        "sg": 0.39
      },
      "swellPeriod": {
        "dwd": 1.98,
        "icon": 9.34,
        "sg": 9.34
      },
      "time": "2022-03-23T20:00:00+00:00",
      "waterTemperature": {
        "meto": 8.95,
        "noaa": 12.18,
        "sg": 8.95
      },
      "waveDirection": {
        "icon": 222.68,
        "sg": 222.68
      },
      "waveHeight": {
        "dwd": 0.07,
        "icon": 0.39,
        "sg": 0.39
      }
    },
    {
      "swellHeight": {
        "dwd": 0.06,
        "icon": 0.38,
        "sg": 0.38
      },
      "swellPeriod": {
        "dwd": 2.02,
        "icon": 9.18,
        "sg": 9.18
      },
      "time": "2022-03-23T21:00:00+00:00",
      "waterTemperature": {
        "meto": 8.95,
        "noaa": 11.2,
        "sg": 8.95
      },
      "waveDirection": {
        "icon": 222.32,
        "sg": 222.32
      },
      "waveHeight": {
        "dwd": 0.06,
        "icon": 0.39,
        "sg": 0.39
      }
    },
    {
      "swellHeight": {
        "dwd": 0.06,
        "icon": 0.4,
        "sg": 0.4
      },
      "swellPeriod": {
        "dwd": 2.06,
        "icon": 8.63,
        "sg": 8.63
      },
      "time": "2022-03-23T22:00:00+00:00",
      "waterTemperature": {
        "meto": 8.95,
        "noaa": 10.7,
        "sg": 8.95
      },
      "waveDirection": {
        "icon": 215.55,
        "sg": 215.55
      },
      "waveHeight": {
        "dwd": 0.06,
        "icon": 0.4,
        "sg": 0.4
      }
    },
    {
      "swellHeight": {
        "dwd": 0.05,
        "icon": 0.41,
        "sg": 0.41
      },
      "swellPeriod": {
        "dwd": 2.09,
        "icon": 8.08,
        "sg": 8.08
      },
      "time": "2022-03-23T23:00:00+00:00",
      "waterTemperature": {
        "meto": 8.95,
        "noaa": 10.19,
        "sg": 8.95
      },
      "waveDirection": {
        "icon": 208.79,
        "sg": 208.79
      },
      "waveHeight": {
        "dwd": 0.05,
        "icon": 0.42,
        "sg": 0.42
      }
    },
    {
      "swellHeight": {
        "dwd": 0.05,
        "icon": 0.43,
        "sg": 0.43
      },
      "swellPeriod": {
        "dwd": 2.11,
        "icon": 7.53,
        "sg": 7.53
      },
      "time": "2022-03-24T00:00:00+00:00",
      "waterTemperature": {
        "meto": 9.55,
        "noaa": 9.68,
        "sg": 9.55
      },
      "waveDirection": {
        "icon": 202.02,
        "sg": 202.02
      },
      "waveHeight": {
        "dwd": 0.05,
        "icon": 0.43,
        "sg": 0.43
      }
    },
    {
      "swellHeight": {
        "dwd": 0.05,
        "icon": 0.43,
        "sg": 0.43
      },
      "swellPeriod": {
        "dwd": 2.12,
        "icon": 7.37,
        "sg": 7.37
      },
      "time": "2022-03-24T01:00:00+00:00",
      "waterTemperature": {
        "meto": 9.57,
        "noaa": 9.31,
        "sg": 9.57
      },
      "waveDirection": {
        "icon": 199.18,
        "sg": 199.18
      },
      "waveHeight": {
        "dwd": 0.05,
        "icon": 0.43,
        "sg": 0.43
      }
    },
    {
      "swellHeight": {
        "dwd": 0.05,
        "icon": 0.43,
        "sg": 0.43
      },
      "swellPeriod": {
        "dwd": 2.11,
        "icon": 7.21,
        "sg": 7.21
      },
      "time": "2022-03-24T02:00:00+00:00",
      "waterTemperature": {
        "meto": 9.58,
        "noaa": 8.94,
        "sg": 9.58
      },
      "waveDirection": {
        "icon": 196.35,
        "sg": 196.35
      },
      "waveHeight": {
        "dwd": 0.05,
        "icon": 0.43,
        "sg": 0.43
      }
    },
    {
      "swellHeight": {
        "dwd": 0.04,
        "icon": 0.43,
        "sg": 0.43
      },
      "swellPeriod": {
        "dwd": 2.12,
        "icon": 7.05,
        "sg": 7.05
      },
      "time": "2022-03-24T03:00:00+00:00",
      "waterTemperature": {
        "meto": 9.59,
        "noaa": 8.57,
        "sg": 9.59
      },
      "waveDirection": {
        "icon": 193.51,
        "sg": 193.51
      },
      "waveHeight": {
        "dwd": 0.04,
        "icon": 0.43,
        "sg": 0.43
      }
    },
    {
      "swellHeight": {
        "dwd": 0.04,
        "icon": 0.42,
        "sg": 0.42
      },
      "swellPeriod": {
        "dwd": 2.12,
        "icon": 7.09,
        "sg": 7.09
      },
      "time": "2022-03-24T04:00:00+00:00",
      "waterTemperature": {
        "meto": 9.6,
        "noaa": 8.3,
        "sg": 9.6
      },
      "waveDirection": {
        "icon": 196.96,
        "sg": 196.96
      },
      "waveHeight": {
        "dwd": 0.04,
        "icon": 0.42,
        "sg": 0.42
      }
    },
    {
      "swellHeight": {
        "dwd": 0.04,
        "icon": 0.42,
        "sg": 0.42
      },
      "swellPeriod": {
        "dwd": 2.13,
        "icon": 7.14,
        "sg": 7.14
      },
      "time": "2022-03-24T05:00:00+00:00",
      "waterTemperature": {
        "meto": 9.6,
        "noaa": 8.02,
        "sg": 9.6
      },
      "waveDirection": {
        "icon": 200.42,
        "sg": 200.42
      },
      "waveHeight": {
        "dwd": 0.04,
        "icon": 0.42,
        "sg": 0.42
      }
    },
    {
      "swellHeight": {
        "dwd": 0.04,
        "icon": 0.41,
        "sg": 0.41
      },
      "swellPeriod": {
        "dwd": 2.14,
        "icon": 7.18,
        "sg": 7.18
      },
      "time": "2022-03-24T06:00:00+00:00",
      "waterTemperature": {
        "meto": 9.61,
        "noaa": 7.75,
        "sg": 9.61
      },
      "waveDirection": {
        "icon": 203.87,
        "sg": 203.87
      },
      "waveHeight": {
        "dwd": 0.04,
        "icon": 0.41,
        "sg": 0.41
      }
    },
    {
      "swellHeight": {
        "dwd": 0.04,
        "icon": 0.39,
        "sg": 0.39
      },
      "swellPeriod": {
        "dwd": 2.16,
        "icon": 7.76,
        "sg": 7.76
      },
      "time": "2022-03-24T07:00:00+00:00",
      "waterTemperature": {
        "meto": 9.62,
        "noaa": 9.75,
        "sg": 9.62
      },
      "waveDirection": {
        "icon": 213.48,
        "sg": 213.48
      },
      "waveHeight": {
        "dwd": 0.04,
        "icon": 0.39,
        "sg": 0.39
      }
    },
    {
      "swellHeight": {
        "dwd": 0.03,
        "icon": 0.36,
        "sg": 0.36
      },
      "swellPeriod": {
        "dwd": 2.17,
        "icon": 8.35,
        "sg": 8.35
      },
      "time": "2022-03-24T08:00:00+00:00",
      "waterTemperature": {
        "meto": 9.63,
        "noaa": 11.75,
        "sg": 9.63
      },
      "waveDirection": {
        "icon": 223.09,
        "sg": 223.09
      },
      "waveHeight": {
        "dwd": 0.03,
        "icon": 0.36,
        "sg": 0.36
      }
    },
    {
      "swellHeight": {
        "dwd": 0.04,
        "icon": 0.34,
        "sg": 0.34
      },
      "swellPeriod": {
        "dwd": 2.12,
        "icon": 8.93,
        "sg": 8.93
      },
      "time": "2022-03-24T09:00:00+00:00",
      "waterTemperature": {
        "meto": 9.64,
        "noaa": 13.75,
        "sg": 9.64
      },
      "waveDirection": {
        "icon": 232.7,
        "sg": 232.7
      },
      "waveHeight": {
        "dwd": 0.04,
        "icon": 0.34,
        "sg": 0.34
      }
    },
    {
      "swellHeight": {
        "dwd": 0.03,
        "icon": 0.34,
        "sg": 0.34
      },
      "swellPeriod": {
        "dwd": 2.18,
        "icon": 8.84,
        "sg": 8.84
      },
      "time": "2022-03-24T10:00:00+00:00",
      "waterTemperature": {
        "meto": 9.64,
        "noaa": 15.46,
        "sg": 9.64
      },
      "waveDirection": {
        "icon": 233.05,
        "sg": 233.05
      },
      "waveHeight": {
        "dwd": 0.03,
        "icon": 0.34,
        "sg": 0.34
      }
    },
    {
      "swellHeight": {
        "dwd": 0.03,
        "icon": 0.33,
        "sg": 0.33
      },
      "swellPeriod": {
        "dwd": 2.3,
        "icon": 8.76,
        "sg": 8.76
      },
      "time": "2022-03-24T11:00:00+00:00",
      "waterTemperature": {
        "meto": 9.65,
        "noaa": 17.17,
        "sg": 9.65
      },
      "waveDirection": {
        "icon": 233.4,
        "sg": 233.4
      },
      "waveHeight": {
        "dwd": 0.03,
        "icon": 0.33,
        "sg": 0.33
      }
    },
    {
      "swellHeight": {
        "dwd": 0.03,
        "icon": 0.33,
        "sg": 0.33
      },
      "swellPeriod": {
        "dwd": 2.39,
        "icon": 8.67,
        "sg": 8.67
      },
      "time": "2022-03-24T12:00:00+00:00",
      "waterTemperature": {
        "meto": 9.66,
        "noaa": 18.88,
        "sg": 9.66
      },
      "waveDirection": {
        "icon": 233.75,
        "sg": 233.75
      },
      "waveHeight": {
        "dwd": 0.03,
        "icon": 0.33,
        "sg": 0.33
      }
    },
    {
      "swellHeight": {
        "dwd": 0.03,
        "icon": 0.33,
        "sg": 0.33
      },
      "swellPeriod": {
        "dwd": 2.42,
        "icon": 8.62,
        "sg": 8.62
      },
      "time": "2022-03-24T13:00:00+00:00",
      "waterTemperature": {
        "meto": 9.66,
        "noaa": 18.8,
        "sg": 9.66
      },
      "waveDirection": {
        "icon": 233.84,
        "sg": 233.84
      },
      "waveHeight": {
        "dwd": 0.03,
        "icon": 0.33,
        "sg": 0.33
      }
    },
    {
      "swellHeight": {
        "dwd": 0.03,
        "icon": 0.33,
        "sg": 0.33
      },
      "swellPeriod": {
        "dwd": 2.71,
        "icon": 8.57,
        "sg": 8.57
      },
      "time": "2022-03-24T14:00:00+00:00",
      "waterTemperature": {
        "meto": 9.67,
        "noaa": 18.72,
        "sg": 9.67
      },
      "waveDirection": {
        "icon": 233.92,
        "sg": 233.92
      },
      "waveHeight": {
        "dwd": 0.03,
        "icon": 0.33,
        "sg": 0.33
      }
    },
    {
      "swellHeight": {
        "dwd": 0.03,
        "icon": 0.33,
        "sg": 0.33
      },
      "swellPeriod": {
        "dwd": 2.42,
        "icon": 8.52,
        "sg": 8.52
      },
      "time": "2022-03-24T15:00:00+00:00",
      "waterTemperature": {
        "meto": 9.68,
        "noaa": 18.64,
        "sg": 9.68
      },
      "waveDirection": {
        "icon": 234.01,
        "sg": 234.01
      },
      "waveHeight": {
        "dwd": 0.03,
        "icon": 0.33,
        "sg": 0.33
      }
    },
    {
      "swellHeight": {
        "dwd": 0.03,
        "icon": 0.33,
        "sg": 0.33
      },
      "swellPeriod": {
        "dwd": 2.45,
        "icon": 8.37,
        "sg": 8.37
      },
      "time": "2022-03-24T16:00:00+00:00",
      "waterTemperature": {
        "meto": 9.68,
        "noaa": 17.05,
        "sg": 9.68
      },
      "waveDirection": {
        "icon": 234.31,
        "sg": 234.31
      },
      "waveHeight": {
        "dwd": 0.03,
        "icon": 0.33,
        "sg": 0.33
      }
    },
    {
      "swellHeight": {
        "dwd": 0.03,
        "icon": 0.32,
        "sg": 0.32
      },
      "swellPeriod": {
        "dwd": 2.51,
        "icon": 8.22,
        "sg": 8.22
      },
      "time": "2022-03-24T17:00:00+00:00",
      "waterTemperature": {
        "meto": 9.69,
        "noaa": 15.46,
        "sg": 9.69
      },
      "waveDirection": {
        "icon": 234.61,
        "sg": 234.61
      },
      "waveHeight": {
        "dwd": 0.03,
        "icon": 0.32,
        "sg": 0.32
      }
    },
    {
      "swellHeight": {
        "dwd": 0.03,
        "icon": 0.32,
        "sg": 0.32
      },
      "swellPeriod": {
        "dwd": 2.59,
        "icon": 8.07,
        "sg": 8.07
      },
      "time": "2022-03-24T18:00:00+00:00",
      "waterTemperature": {
        "meto": 9.7,
        "noaa": 13.87,
        "sg": 9.7
      },
      "waveDirection": {
        "icon": 234.91,
        "sg": 234.91
      },
      "waveHeight": {
        "dwd": 0.03,
        "icon": 0.32,
        "sg": 0.32
      }
    },
    {
      "swellHeight": {
        "dwd": 0.03,
        "icon": 0.32,
        "sg": 0.32
      },
      "swellPeriod": {
        "dwd": 2.66,
        "icon": 7.94,
        "sg": 7.94
      },
      "time": "2022-03-24T19:00:00+00:00",
      "waterTemperature": {
        "meto": 9.7,
        "noaa": 12.94,
        "sg": 9.7
      },
      "waveDirection": {
        "icon": 234.91,
        "sg": 234.91
      },
      "waveHeight": {
        "dwd": 0.03,
        "icon": 0.32,
        "sg": 0.32
      }
    },
    {
      "swellHeight": {
        "dwd": 0.03,
        "icon": 0.33,
        "sg": 0.33
      },
      "swellPeriod": {
        "dwd": 2.5,
        "icon": 7.81,
        "sg": 7.81
      },
      "time": "2022-03-24T20:00:00+00:00",
      "waterTemperature": {
        "meto": 9.71,
        "noaa": 12.01,
        "sg": 9.71
      },
      "waveDirection": {
        "icon": 234.9,
        "sg": 234.9
      },
      "waveHeight": {
        "dwd": 0.03,
        "icon": 0.33,
        "sg": 0.33
      }
    },
    {
      "swellHeight": {
        "dwd": 0.03,
        "icon": 0.33,
        "sg": 0.33
      },
      "swellPeriod": {
        "dwd": 2.57,
        "icon": 7.68,
        "sg": 7.68
      },
      "time": "2022-03-24T21:00:00+00:00",
      "waterTemperature": {
        "meto": 9.72,
        "noaa": 11.09,
        "sg": 9.72
      },
      "waveDirection": {
        "icon": 234.9,
        "sg": 234.9
      },
      "waveHeight": {
        "dwd": 0.03,
        "icon": 0.33,
        "sg": 0.33
      }
    },
    {
      "swellHeight": {
        "dwd": 0.03,
        "icon": 0.33,
        "sg": 0.33
      },
      "swellPeriod": {
        "dwd": 2.46,
        "icon": 7.55,
        "sg": 7.55
      },
      "time": "2022-03-24T22:00:00+00:00",
      "waterTemperature": {
        "meto": 9.72,
        "noaa": 10.56,
        "sg": 9.72
      },
      "waveDirection": {
        "icon": 234.28,
        "sg": 234.28
      },
      "waveHeight": {
        "dwd": 0.03,
        "icon": 0.33,
        "sg": 0.33
      }
    },
    {
      "swellHeight": {
        "dwd": 0.03,
        "icon": 0.33,
        "sg": 0.33
      },
      "swellPeriod": {
        "dwd": 2.55,
        "icon": 7.43,
        "sg": 7.43
      },
      "time": "2022-03-24T23:00:00+00:00",
      "waterTemperature": {
        "meto": 9.73,
        "noaa": 10.03,
        "sg": 9.73
      },
      "waveDirection": {
        "icon": 233.65,
        "sg": 233.65
      },
      "waveHeight": {
        "dwd": 0.03,
        "icon": 0.33,
        "sg": 0.33
      }
    },
    {
      "swellHeight": {
        "dwd": 0.03,
        "icon": 0.33,
        "sg": 0.33
      },
      "swellPeriod": {
        "dwd": 2.48,
        "icon": 7.3,
        "sg": 7.3
      },
      "time": "2022-03-25T00:00:00+00:00",
      "waterTemperature": {
        "meto": 9.63,
        "noaa": 9.51,
        "sg": 9.63
      },
      "waveDirection": {
        "icon": 233.03,
        "sg": 233.03
      },
      "waveHeight": {
        "dwd": 0.03,
        "icon": 0.33,
        "sg": 0.33
      }
    },
    {
      "swellHeight": {
        "dwd": 0.03,
        "icon": 0.33,
        "sg": 0.33
      },
      "swellPeriod": {
        "dwd": 2.46,
        "icon": 7.25,
        "sg": 7.25
      },
      "time": "2022-03-25T01:00:00+00:00",
      "waterTemperature": {
        "meto": 9.65,
        "noaa": 9.12,
        "sg": 9.65
      },
      "waveDirection": {
        "icon": 232.92,
        "sg": 232.92
      },
      "waveHeight": {
        "dwd": 0.03,
        "icon": 0.33,
        "sg": 0.33
      }
    },
    {
      "swellHeight": {
        "dwd": 0.03,
        "icon": 0.32,
        "sg": 0.32
      },
      "swellPeriod": {
        "dwd": 2.43,
        "icon": 7.2,
        "sg": 7.2
      },
      "time": "2022-03-25T02:00:00+00:00",
      "waterTemperature": {
        "meto": 9.66,
        "noaa": 8.74,
        "sg": 9.66
      },
      "waveDirection": {
        "icon": 232.8,
        "sg": 232.8
      },
      "waveHeight": {
        "dwd": 0.03,
        "icon": 0.32,
        "sg": 0.32
      }
    },
    {
      "swellHeight": {
        "dwd": 0.03,
        "icon": 0.32,
        "sg": 0.32
      },
      "swellPeriod": {
        "dwd": 2.4,
        "icon": 7.15,
        "sg": 7.15
      },
      "time": "2022-03-25T03:00:00+00:00",
      "waterTemperature": {
        "meto": 9.68,
        "noaa": 8.35,
        "sg": 9.68
      },
      "waveDirection": {
        "icon": 232.69,
        "sg": 232.69
      },
      "waveHeight": {
        "dwd": 0.03,
        "icon": 0.32,
        "sg": 0.32
      }
    },
    {
      "swellHeight": {
        "dwd": 0.03,
        "icon": 0.32,
        "sg": 0.32
      },
      "swellPeriod": {
        "dwd": 2.41,
        "icon": 7.11,
        "sg": 7.11
      },
      "time": "2022-03-25T04:00:00+00:00",
      "waterTemperature": {
        "meto": 9.69,
        "noaa": 8.02,
        "sg": 9.69
      },
      "waveDirection": {
        "icon": 233.03,
        "sg": 233.03
      },
      "waveHeight": {
        "dwd": 0.03,
        "icon": 0.32,
        "sg": 0.32
      }
    },
    {
      "swellHeight": {
        "dwd": 0.03,
        "icon": 0.31,
        "sg": 0.31
      },
      "swellPeriod": {
        "dwd": 2.39,
        "icon": 7.08,
        "sg": 7.08
      },
      "time": "2022-03-25T05:00:00+00:00",
      "waterTemperature": {
        "meto": 9.7,
        "noaa": 7.69,
        "sg": 9.7
      },
      "waveDirection": {
        "icon": 233.38,
        "sg": 233.38
      },
      "waveHeight": {
        "dwd": 0.03,
        "icon": 0.31,
        "sg": 0.31
      }
    },
    {
      "swellHeight": {
        "dwd": 0.03,
        "icon": 0.31,
        "sg": 0.31
      },
      "swellPeriod": {
        "dwd": 2.39,
        "icon": 7.04,
        "sg": 7.04
      },
      "time": "2022-03-25T06:00:00+00:00",
      "waterTemperature": {
        "meto": 9.7,
        "noaa": 7.37,
        "sg": 9.7
      },
      "waveDirection": {
        "icon": 233.72,
        "sg": 233.72
      },
      "waveHeight": {
        "dwd": 0.03,
        "icon": 0.31,
        "sg": 0.31
      }
    },
    {
      "swellHeight": {
        "dwd": 0.03,
        "icon": 0.31,
        "sg": 0.31
      },
      "swellPeriod": {
        "dwd": 2.4,
        "icon": 6.98,
        "sg": 6.98
      },
      "time": "2022-03-25T07:00:00+00:00",
      "waterTemperature": {
        "meto": 9.71,
        "noaa": 9.25,
        "sg": 9.71
      },
      "waveDirection": {
        "icon": 234.06,
        "sg": 234.06
      },
      "waveHeight": {
        "dwd": 0.03,
        "icon": 0.31,
        "sg": 0.31
      }
    },
    {
      "swellHeight": {
        "dwd": 0.03,
        "icon": 0.3,
        "sg": 0.3
      },
      "swellPeriod": {
        "dwd": 2.38,
        "icon": 6.91,
        "sg": 6.91
      },
      "time": "2022-03-25T08:00:00+00:00",
      "waterTemperature": {
        "meto": 9.72,
        "noaa": 11.14,
        "sg": 9.72
      },
      "waveDirection": {
        "icon": 234.39,
        "sg": 234.39
      },
      "waveHeight": {
        "dwd": 0.03,
        "icon": 0.3,
        "sg": 0.3
      }
    },
    {
      "swellHeight": {
        "dwd": 0.03,
        "icon": 0.3,
        "sg": 0.3
      },
      "swellPeriod": {
        "dwd": 2.36,
        "icon": 6.85,
        "sg": 6.85
      },
      "time": "2022-03-25T09:00:00+00:00",
      "waterTemperature": {
        "meto": 9.73,
        "noaa": 13.02,
        "sg": 9.73
      },
      "waveDirection": {
        "icon": 234.73,
        "sg": 234.73
      },
      "waveHeight": {
        "dwd": 0.03,
        "icon": 0.3,
        "sg": 0.3
      }
    },
    {
      "swellHeight": {
        "dwd": 0.03,
        "icon": 0.3,
        "sg": 0.3
      },
      "swellPeriod": {
        "dwd": 2.29,
        "icon": 6.78,
        "sg": 6.78
      },
      "time": "2022-03-25T10:00:00+00:00",
      "waterTemperature": {
        "meto": 9.74,
        "noaa": 14.71,
        "sg": 9.74
      },
      "waveDirection": {
        "icon": 234.62,
        "sg": 234.62
      },
      "waveHeight": {
        "dwd": 0.03,
        "icon": 0.3,
        "sg": 0.3
      }
    },
    {
      "swellHeight": {
        "dwd": 0.03,
        "icon": 0.3,
        "sg": 0.3
      },
      "swellPeriod": {
        "dwd": 2.34,
        "icon": 6.72,
        "sg": 6.72
      },
      "time": "2022-03-25T11:00:00+00:00",
      "waterTemperature": {
        "meto": 9.74,
        "noaa": 16.4,
        "sg": 9.74
      },
      "waveDirection": {
        "icon": 234.52,
        "sg": 234.52
      },
      "waveHeight": {
        "dwd": 0.03,
        "icon": 0.31,
        "sg": 0.31
      }
    },
    {
      "swellHeight": {
        "dwd": 0.03,
        "icon": 0.3,
        "sg": 0.3
      },
      "swellPeriod": {
        "dwd": 2.38,
        "icon": 6.65,
        "sg": 6.65
      },
      "time": "2022-03-25T12:00:00+00:00",
      "waterTemperature": {
        "meto": 9.75,
        "noaa": 18.09,
        "sg": 9.75
      },
      "waveDirection": {
        "icon": 234.41,
        "sg": 234.41
      },
      "waveHeight": {
        "dwd": 0.03,
        "icon": 0.31,
        "sg": 0.31
      }
    },
    {
      "swellHeight": {
        "dwd": 0.03,
        "icon": 0.3,
        "sg": 0.3
      },
      "swellPeriod": {
        "dwd": 2.36,
        "icon": 6.59,
        "sg": 6.59
      },
      "time": "2022-03-25T13:00:00+00:00",
      "waterTemperature": {
        "meto": 9.76,
        "noaa": 18.05,
        "sg": 9.76
      },
      "waveDirection": {
        "icon": 227.34,
        "sg": 227.34
      },
      "waveHeight": {
        "dwd": 0.03,
        "icon": 0.32,
        "sg": 0.32
      }
    },
    {
      "swellHeight": {
        "dwd": 0.02,
        "icon": 0.29,
        "sg": 0.29
      },
      "swellPeriod": {
        "dwd": 2.61,
        "icon": 6.52,
        "sg": 6.52
      },
      "time": "2022-03-25T14:00:00+00:00",
      "waterTemperature": {
        "meto": 9.76,
        "noaa": 18.01,
        "sg": 9.76
      },
      "waveDirection": {
        "icon": 220.26,
        "sg": 220.26
      },
      "waveHeight": {
        "dwd": 0.03,
        "icon": 0.32,
        "sg": 0.32
      }
    },
    {
      "swellHeight": {
        "dwd": 0.02,
        "icon": 0.29,
        "sg": 0.29
      },
      "swellPeriod": {
        "dwd": 2.62,
        "icon": 6.46,
        "sg": 6.46
      },
      "time": "2022-03-25T15:00:00+00:00",
      "waterTemperature": {
        "meto": 9.77,
        "noaa": 17.97,
        "sg": 9.77
      },
      "waveDirection": {
        "icon": 213.19,
        "sg": 213.19
      },
      "waveHeight": {
        "dwd": 0.03,
        "icon": 0.33,
        "sg": 0.33
      }
    },
    {
      "swellHeight": {
        "dwd": 0.03,
        "icon": 0.31,
        "sg": 0.31
      },
      "swellPeriod": {
        "dwd": 2.22,
        "icon": 5.97,
        "sg": 5.97
      },
      "time": "2022-03-25T16:00:00+00:00",
      "waterTemperature": {
        "meto": 9.78,
        "noaa": 16.35,
        "sg": 9.78
      },
      "waveDirection": {
        "icon": 175.78,
        "sg": 175.78
      },
      "waveHeight": {
        "dwd": 0.03,
        "icon": 0.34,
        "sg": 0.34
      }
    },
    {
      "swellHeight": {
        "dwd": 0.03,
        "icon": 0.33,
        "sg": 0.33
      },
      "swellPeriod": {
        "dwd": 2.25,
        "icon": 5.48,
        "sg": 5.48
      },
      "time": "2022-03-25T17:00:00+00:00",
      "waterTemperature": {
        "meto": 9.79,
        "noaa": 14.74,
        "sg": 9.79
      },
      "waveDirection": {
        "icon": 138.38,
        "sg": 138.38
      },
      "waveHeight": {
        "dwd": 0.03,
        "icon": 0.35,
        "sg": 0.35
      }
    },
    {
      "swellHeight": {
        "dwd": 0.02,
        "icon": 0.35,
        "sg": 0.35
      },
      "swellPeriod": {
        "dwd": 2.36,
        "icon": 4.99,
        "sg": 4.99
      },
      "time": "2022-03-25T18:00:00+00:00",
      "waterTemperature": {
        "meto": 9.79,
        "noaa": 13.12,
        "sg": 9.79
      },
      "waveDirection": {
        "icon": 100.97,
        "sg": 100.97
      },
      "waveHeight": {
        "dwd": 0.02,
        "icon": 0.36,
        "sg": 0.36
      }
    },
    {
      "swellHeight": {
        "icon": 0.35,
        "sg": 0.35
      },
      "swellPeriod": {
        "icon": 4.99,
        "sg": 4.99
      },
      "time": "2022-03-25T19:00:00+00:00",
      "waterTemperature": {
        "meto": 9.8,
        "noaa": 12.18,
        "sg": 9.8
      },
      "waveDirection": {
        "icon": 101.23,
        "sg": 101.23
      },
      "waveHeight": {
        "icon": 0.35,
        "sg": 0.35
      }
    },
    {
      "swellHeight": {
        "icon": 0.34,
        "sg": 0.34
      },
      "swellPeriod": {
        "icon": 4.99,
        "sg": 4.99
      },
      "time": "2022-03-25T20:00:00+00:00",
      "waterTemperature": {
        "meto": 9.81,
        "noaa": 11.24,
        "sg": 9.81
      },
      "waveDirection": {
        "icon": 101.48,
        "sg": 101.48
      },
      "waveHeight": {
        "icon": 0.35,
        "sg": 0.35
      }
    },
    {
      "swellHeight": {
        "icon": 0.34,
        "sg": 0.34
      },
      "swellPeriod": {
        "icon": 4.99,
        "sg": 4.99
      },
      "time": "2022-03-25T21:00:00+00:00",
      "waterTemperature": {
        "meto": 9.82,
        "noaa": 10.3,
        "sg": 9.82
      },
      "waveDirection": {
        "icon": 101.74,
        "sg": 101.74
      },
      "waveHeight": {
        "icon": 0.34,
        "sg": 0.34
      }
    },
    {
      "swellHeight": {
        "icon": 0.33,
        "sg": 0.33
      },
      "swellPeriod": {
        "icon": 5.01,
        "sg": 5.01
      },
      "time": "2022-03-25T22:00:00+00:00",
      "waterTemperature": {
        "meto": 9.82,
        "noaa": 9.78,
        "sg": 9.82
      },
      "waveDirection": {
        "icon": 101.9,
        "sg": 101.9
      },
      "waveHeight": {
        "icon": 0.34,
        "sg": 0.34
      }
    },
    {
      "swellHeight": {
        "icon": 0.33,
        "sg": 0.33
      },
      "swellPeriod": {
        "icon": 5.04,
        "sg": 5.04
      },
      "time": "2022-03-25T23:00:00+00:00",
      "waterTemperature": {
        "meto": 9.83,
        "noaa": 9.26,
        "sg": 9.83
      },
      "waveDirection": {
        "icon": 102.07,
        "sg": 102.07
      },
      "waveHeight": {
        "icon": 0.33,
        "sg": 0.33
      }
    },
    {
      "swellHeight": {
        "icon": 0.32,
        "sg": 0.32
      },
      "swellPeriod": {
        "icon": 5.06,
        "sg": 5.06
      },
      "time": "2022-03-26T00:00:00+00:00",
      "waterTemperature": {
        "meto": 9.76,
        "noaa": 8.73,
        "sg": 9.76
      },
      "waveDirection": {
        "icon": 102.23,
        "sg": 102.23
      },
      "waveHeight": {
        "icon": 0.33,
        "sg": 0.33
      }
    },
    {
      "swellHeight": {
        "icon": 0.32,
        "sg": 0.32
      },
      "swellPeriod": {
        "icon": 5.05,
        "sg": 5.05
      },
      "time": "2022-03-26T01:00:00+00:00",
      "waterTemperature": {
        "meto": 9.78,
        "noaa": 8.31,
        "sg": 9.78
      },
      "waveDirection": {
        "icon": 99.5,
        "sg": 99.5
      },
      "waveHeight": {
        "icon": 0.33,
        "sg": 0.33
      }
    },
    {
      "swellHeight": {
        "icon": 0.31,
        "sg": 0.31
      },
      "swellPeriod": {
        "icon": 5.05,
        "sg": 5.05
      },
      "time": "2022-03-26T02:00:00+00:00",
      "waterTemperature": {
        "meto": 9.79,
        "noaa": 7.89,
        "sg": 9.79
      },
      "waveDirection": {
        "icon": 96.77,
        "sg": 96.77
      },
      "waveHeight": {
        "icon": 0.32,
        "sg": 0.32
      }
    },
    {
      "swellHeight": {
        "icon": 0.31,
        "sg": 0.31
      },
      "swellPeriod": {
        "icon": 5.04,
        "sg": 5.04
      },
      "time": "2022-03-26T03:00:00+00:00",
      "waterTemperature": {
        "meto": 9.8,
        "noaa": 7.47,
        "sg": 9.8
      },
      "waveDirection": {
        "icon": 94.04,
        "sg": 94.04
      },
      "waveHeight": {
        "icon": 0.32,
        "sg": 0.32
      }
    },
    {
      "swellHeight": {
        "icon": 0.31,
        "sg": 0.31
      },
      "swellPeriod": {
        "icon": 4.97,
        "sg": 4.97
      },
      "time": "2022-03-26T04:00:00+00:00",
      "waterTemperature": {
        "meto": 9.81,
        "noaa": 7.21,
        "sg": 9.81
      },
      "waveDirection": {
        "icon": 90.79,
        "sg": 90.79
      },
      "waveHeight": {
        "icon": 0.32,
        "sg": 0.32
      }
    },
    {
      "swellHeight": {
        "icon": 0.31,
        "sg": 0.31
      },
      "swellPeriod": {
        "icon": 4.89,
        "sg": 4.89
      },
      "time": "2022-03-26T05:00:00+00:00",
      "waterTemperature": {
        "meto": 9.81,
        "noaa": 6.95,
        "sg": 9.81
      },
      "waveDirection": {
        "icon": 87.54,
        "sg": 87.54
      },
      "waveHeight": {
        "icon": 0.32,
        "sg": 0.32
      }
    },
    {
      "swellHeight": {
        "icon": 0.31,
        "sg": 0.31
      },
      "swellPeriod": {
        "icon": 4.82,
        "sg": 4.82
      },
      "time": "2022-03-26T06:00:00+00:00",
      "waterTemperature": {
        "meto": 9.82,
        "noaa": 6.69,
        "sg": 9.82
      },
      "waveDirection": {
        "icon": 84.29,
        "sg": 84.29
      },
      "waveHeight": {
        "icon": 0.32,
        "sg": 0.32
      }
    },
    {
      "swellHeight": {
        "icon": 0.3,
        "sg": 0.3
      },
      "swellPeriod": {
        "icon": 4.95,
        "sg": 4.95
      },
      "time": "2022-03-26T07:00:00+00:00",
      "waterTemperature": {
        "meto": 9.83,
        "noaa": 8.62,
        "sg": 9.83
      },
      "waveDirection": {
        "icon": 79.82,
        "sg": 79.82
      },
      "waveHeight": {
        "icon": 0.33,
        "sg": 0.33
      }
    },
    {
      "swellHeight": {
        "icon": 0.3,
        "sg": 0.3
      },
      "swellPeriod": {
        "icon": 5.08,
        "sg": 5.08
      },
      "time": "2022-03-26T08:00:00+00:00",
      "waterTemperature": {
        "meto": 9.84,
        "noaa": 10.55,
        "sg": 9.84
      },
      "waveDirection": {
        "icon": 75.35,
        "sg": 75.35
      },
      "waveHeight": {
        "icon": 0.34,
        "sg": 0.34
      }
    },
    {
      "swellHeight": {
        "icon": 0.29,
        "sg": 0.29
      },
      "swellPeriod": {
        "icon": 5.21,
        "sg": 5.21
      },
      "time": "2022-03-26T09:00:00+00:00",
      "waterTemperature": {
        "meto": 9.85,
        "noaa": 12.47,
        "sg": 9.85
      },
      "waveDirection": {
        "icon": 70.88,
        "sg": 70.88
      },
      "waveHeight": {
        "icon": 0.35,
        "sg": 0.35
      }
    },
    {
      "swellHeight": {
        "icon": 0.3,
        "sg": 0.3
      },
      "swellPeriod": {
        "icon": 5.11,
        "sg": 5.11
      },
      "time": "2022-03-26T10:00:00+00:00",
      "waterTemperature": {
        "meto": 9.86,
        "noaa": 14.17,
        "sg": 9.86
      },
      "waveDirection": {
        "icon": 71.26,
        "sg": 71.26
      },
      "waveHeight": {
        "icon": 0.37,
        "sg": 0.37
      }
    },
    {
      "swellHeight": {
        "icon": 0.3,
        "sg": 0.3
      },
      "swellPeriod": {
        "icon": 5.02,
        "sg": 5.02
      },
      "time": "2022-03-26T11:00:00+00:00",
      "waterTemperature": {
        "meto": 9.86,
        "noaa": 15.87,
        "sg": 9.86
      },
      "waveDirection": {
        "icon": 71.65,
        "sg": 71.65
      },
      "waveHeight": {
        "icon": 0.39,
        "sg": 0.39
      }
    },
    {
      "swellHeight": {
        "icon": 0.31,
        "sg": 0.31
      },
      "swellPeriod": {
        "icon": 4.92,
        "sg": 4.92
      },
      "time": "2022-03-26T12:00:00+00:00",
      "waterTemperature": {
        "meto": 9.87,
        "noaa": 17.56,
        "sg": 9.87
      },
      "waveDirection": {
        "icon": 72.03,
        "sg": 72.03
      },
      "waveHeight": {
        "icon": 0.41,
        "sg": 0.41
      }
    },
    {
      "swellHeight": {
        "icon": 0.3,
        "sg": 0.3
      },
      "swellPeriod": {
        "icon": 5.11,
        "sg": 5.11
      },
      "time": "2022-03-26T13:00:00+00:00",
      "waterTemperature": {
        "meto": 9.88,
        "noaa": 17.53,
        "sg": 9.88
      },
      "waveDirection": {
        "icon": 75.08,
        "sg": 75.08
      },
      "waveHeight": {
        "icon": 0.43,
        "sg": 0.43
      }
    },
    {
      "swellHeight": {
        "icon": 0.28,
        "sg": 0.28
      },
      "swellPeriod": {
        "icon": 5.3,
        "sg": 5.3
      },
      "time": "2022-03-26T14:00:00+00:00",
      "waterTemperature": {
        "meto": 9.89,
        "noaa": 17.5,
        "sg": 9.89
      },
      "waveDirection": {
        "icon": 78.14,
        "sg": 78.14
      },
      "waveHeight": {
        "icon": 0.45,
        "sg": 0.45
      }
    },
    {
      "swellHeight": {
        "icon": 0.27,
        "sg": 0.27
      },
      "swellPeriod": {
        "icon": 5.49,
        "sg": 5.49
      },
      "time": "2022-03-26T15:00:00+00:00",
      "waterTemperature": {
        "meto": 9.89,
        "noaa": 17.46,
        "sg": 9.89
      },
      "waveDirection": {
        "icon": 81.19,
        "sg": 81.19
      },
      "waveHeight": {
        "icon": 0.47,
        "sg": 0.47
      }
    },
    {
      "swellHeight": {
        "icon": 0.32,
        "sg": 0.32
      },
      "swellPeriod": {
        "icon": 5.15,
        "sg": 5.15
      },
      "time": "2022-03-26T16:00:00+00:00",
      "waterTemperature": {
        "meto": 9.9,
        "noaa": 15.86,
        "sg": 9.9
      },
      "waveDirection": {
        "icon": 79.86,
        "sg": 79.86
      },
      "waveHeight": {
        "icon": 0.49,
        "sg": 0.49
      }
    },
    {
      "swellHeight": {
        "icon": 0.37,
        "sg": 0.37
      },
      "swellPeriod": {
        "icon": 4.82,
        "sg": 4.82
      },
      "time": "2022-03-26T17:00:00+00:00",
      "waterTemperature": {
        "meto": 9.91,
        "noaa": 14.25,
        "sg": 9.91
      },
      "waveDirection": {
        "icon": 78.54,
        "sg": 78.54
      },
      "waveHeight": {
        "icon": 0.5,
        "sg": 0.5
      }
    },
    {
      "swellHeight": {
        "icon": 0.42,
        "sg": 0.42
      },
      "swellPeriod": {
        "icon": 4.48,
        "sg": 4.48
      },
      "time": "2022-03-26T18:00:00+00:00",
      "waterTemperature": {
        "meto": 9.91,
        "noaa": 12.65,
        "sg": 9.91
      },
      "waveDirection": {
        "icon": 77.21,
        "sg": 77.21
      },
      "waveHeight": {
        "icon": 0.52,
        "sg": 0.52
      }
    },
    {
      "swellHeight": {
        "icon": 0.44,
        "sg": 0.44
      },
      "swellPeriod": {
        "icon": 4.47,
        "sg": 4.47
      },
      "time": "2022-03-26T19:00:00+00:00",
      "waterTemperature": {
        "meto": 9.92,
        "noaa": 11.75,
        "sg": 9.92
      },
      "waveDirection": {
        "icon": 76.75,
        "sg": 76.75
      },
      "waveHeight": {
        "icon": 0.53,
        "sg": 0.53
      }
    },
    {
      "swellHeight": {
        "icon": 0.47,
        "sg": 0.47
      },
      "swellPeriod": {
        "icon": 4.45,
        "sg": 4.45
      },
      "time": "2022-03-26T20:00:00+00:00",
      "waterTemperature": {
        "meto": 9.92,
        "noaa": 10.84,
        "sg": 9.92
      },
      "waveDirection": {
        "icon": 76.29,
        "sg": 76.29
      },
      "waveHeight": {
        "icon": 0.53,
        "sg": 0.53
      }
    },
    {
      "swellHeight": {
        "icon": 0.49,
        "sg": 0.49
      },
      "swellPeriod": {
        "icon": 4.44,
        "sg": 4.44
      },
      "time": "2022-03-26T21:00:00+00:00",
      "waterTemperature": {
        "meto": 9.93,
        "noaa": 9.94,
        "sg": 9.93
      },
      "waveDirection": {
        "icon": 75.83,
        "sg": 75.83
      },
      "waveHeight": {
        "icon": 0.54,
        "sg": 0.54
      }
    },
    {
      "swellHeight": {
        "icon": 0.49,
        "sg": 0.49
      },
      "swellPeriod": {
        "icon": 4.45,
        "sg": 4.45
      },
      "time": "2022-03-26T22:00:00+00:00",
      "waterTemperature": {
        "meto": 9.94,
        "noaa": 9.49,
        "sg": 9.94
      },
      "waveDirection": {
        "icon": 75.7,
        "sg": 75.7
      },
      "waveHeight": {
        "icon": 0.53,
        "sg": 0.53
      }
    },
    {
      "swellHeight": {
        "icon": 0.5,
        "sg": 0.5
      },
      "swellPeriod": {
        "icon": 4.45,
        "sg": 4.45
      },
      "time": "2022-03-26T23:00:00+00:00",
      "waterTemperature": {
        "meto": 9.94,
        "noaa": 9.04,
        "sg": 9.94
      },
      "waveDirection": {
        "icon": 75.56,
        "sg": 75.56
      },
      "waveHeight": {
        "icon": 0.53,
        "sg": 0.53
      }
    },
    {
      "swellHeight": {
        "icon": 0.5,
        "sg": 0.5
      },
      "swellPeriod": {
        "icon": 4.46,
        "sg": 4.46
      },
      "time": "2022-03-27T00:00:00+00:00",
      "waterTemperature": {
        "meto": 9.42,
        "noaa": 8.6,
        "sg": 9.42
      },
      "waveDirection": {
        "icon": 75.43,
        "sg": 75.43
      },
      "waveHeight": {
        "icon": 0.52,
        "sg": 0.52
      }
    },
    {
      "swellHeight": {
        "icon": 0.48,
        "sg": 0.48
      },
      "swellPeriod": {
        "icon": 4.46,
        "sg": 4.46
      },
      "time": "2022-03-27T01:00:00+00:00",
      "waterTemperature": {
        "meto": 9.42,
        "noaa": 8.21,
        "sg": 9.42
      },
      "waveDirection": {
        "icon": 75.36,
        "sg": 75.36
      },
      "waveHeight": {
        "icon": 0.5,
        "sg": 0.5
      }
    },
    {
      "swellHeight": {
        "icon": 0.46,
        "sg": 0.46
      },
      "swellPeriod": {
        "icon": 4.46,
        "sg": 4.46
      },
      "time": "2022-03-27T02:00:00+00:00",
      "waterTemperature": {
        "meto": 9.42,
        "noaa": 7.83,
        "sg": 9.42
      },
      "waveDirection": {
        "icon": 75.29,
        "sg": 75.29
      },
      "waveHeight": {
        "icon": 0.47,
        "sg": 0.47
      }
    },
    {
      "swellHeight": {
        "icon": 0.44,
        "sg": 0.44
      },
      "swellPeriod": {
        "icon": 4.46,
        "sg": 4.46
      },
      "time": "2022-03-27T03:00:00+00:00",
      "waterTemperature": {
        "meto": 9.42,
        "noaa": 7.45,
        "sg": 9.42
      },
      "waveDirection": {
        "icon": 75.22,
        "sg": 75.22
      },
      "waveHeight": {
        "icon": 0.45,
        "sg": 0.45
      }
    },
    {
      "swellHeight": {
        "icon": 0.42,
        "sg": 0.42
      },
      "swellPeriod": {
        "icon": 4.49,
        "sg": 4.49
      },
      "time": "2022-03-27T04:00:00+00:00",
      "waterTemperature": {
        "meto": 9.42,
        "noaa": 7.2,
        "sg": 9.42
      },
      "waveDirection": {
        "icon": 75.52,
        "sg": 75.52
      },
      "waveHeight": {
        "icon": 0.43,
        "sg": 0.43
      }
    },
    {
      "swellHeight": {
        "icon": 0.4,
        "sg": 0.4
      },
      "swellPeriod": {
        "icon": 4.53,
        "sg": 4.53
      },
      "time": "2022-03-27T05:00:00+00:00",
      "waterTemperature": {
        "meto": 9.42,
        "noaa": 6.95,
        "sg": 9.42
      },
      "waveDirection": {
        "icon": 75.83,
        "sg": 75.83
      },
      "waveHeight": {
        "icon": 0.4,
        "sg": 0.4
      }
    },
    {
      "swellHeight": {
        "icon": 0.38,
        "sg": 0.38
      },
      "swellPeriod": {
        "icon": 4.56,
        "sg": 4.56
      },
      "time": "2022-03-27T06:00:00+00:00",
      "waterTemperature": {
        "meto": 9.42,
        "noaa": 6.7,
        "sg": 9.42
      },
      "waveDirection": {
        "icon": 76.13,
        "sg": 76.13
      },
      "waveHeight": {
        "icon": 0.38,
        "sg": 0.38
      }
    },
    {
      "swellHeight": {
        "icon": 0.36,
        "sg": 0.36
      },
      "swellPeriod": {
        "icon": 4.64,
        "sg": 4.64
      },
      "time": "2022-03-27T07:00:00+00:00",
      "waterTemperature": {
        "meto": 9.42,
        "noaa": 8.55,
        "sg": 9.42
      },
      "waveDirection": {
        "icon": 76.16,
        "sg": 76.16
      },
      "waveHeight": {
        "icon": 0.36,
        "sg": 0.36
      }
    },
    {
      "swellHeight": {
        "icon": 0.34,
        "sg": 0.34
      },
      "swellPeriod": {
        "icon": 4.72,
        "sg": 4.72
      },
      "time": "2022-03-27T08:00:00+00:00",
      "waterTemperature": {
        "meto": 9.41,
        "noaa": 10.4,
        "sg": 9.41
      },
      "waveDirection": {
        "icon": 76.18,
        "sg": 76.18
      },
      "waveHeight": {
        "icon": 0.35,
        "sg": 0.35
      }
    },
    {
      "swellHeight": {
        "icon": 0.32,
        "sg": 0.32
      },
      "swellPeriod": {
        "icon": 4.8,
        "sg": 4.8
      },
      "time": "2022-03-27T09:00:00+00:00",
      "waterTemperature": {
        "meto": 9.41,
        "noaa": 12.25,
        "sg": 9.41
      },
      "waveDirection": {
        "icon": 76.21,
        "sg": 76.21
      },
      "waveHeight": {
        "icon": 0.33,
        "sg": 0.33
      }
    },
    {
      "swellHeight": {
        "icon": 0.31,
        "sg": 0.31
      },
      "swellPeriod": {
        "icon": 4.82,
        "sg": 4.82
      },
      "time": "2022-03-27T10:00:00+00:00",
      "waterTemperature": {
        "meto": 9.41,
        "noaa": 13.95,
        "sg": 9.41
      },
      "waveDirection": {
        "icon": 77.65,
        "sg": 77.65
      },
      "waveHeight": {
        "icon": 0.32,
        "sg": 0.32
      }
    },
    {
      "swellHeight": {
        "icon": 0.3,
        "sg": 0.3
      },
      "swellPeriod": {
        "icon": 4.85,
        "sg": 4.85
      },
      "time": "2022-03-27T11:00:00+00:00",
      "waterTemperature": {
        "meto": 9.41,
        "noaa": 15.66,
        "sg": 9.41
      },
      "waveDirection": {
        "icon": 79.1,
        "sg": 79.1
      },
      "waveHeight": {
        "icon": 0.3,
        "sg": 0.3
      }
    },
    {
      "swellHeight": {
        "icon": 0.29,
        "sg": 0.29
      },
      "swellPeriod": {
        "icon": 4.87,
        "sg": 4.87
      },
      "time": "2022-03-27T12:00:00+00:00",
      "waterTemperature": {
        "meto": 9.4,
        "noaa": 17.36,
        "sg": 9.4
      },
      "waveDirection": {
        "icon": 80.54,
        "sg": 80.54
      },
      "waveHeight": {
        "icon": 0.29,
        "sg": 0.29
      }
    },
    {
      "swellHeight": {
        "icon": 0.28,
        "sg": 0.28
      },
      "swellPeriod": {
        "icon": 5.05,
        "sg": 5.05
      },
      "time": "2022-03-27T13:00:00+00:00",
      "waterTemperature": {
        "meto": 9.4,
        "noaa": 17.25,
        "sg": 9.4
      },
      "waveDirection": {
        "icon": 84.36,
        "sg": 84.36
      },
      "waveHeight": {
        "icon": 0.28,
        "sg": 0.28
      }
    },
    {
      "swellHeight": {
        "icon": 0.26,
        "sg": 0.26
      },
      "swellPeriod": {
        "icon": 5.24,
        "sg": 5.24
      },
      "time": "2022-03-27T14:00:00+00:00",
      "waterTemperature": {
        "meto": 9.39,
        "noaa": 17.14,
        "sg": 9.39
      },
      "waveDirection": {
        "icon": 88.17,
        "sg": 88.17
      },
      "waveHeight": {
        "icon": 0.26,
        "sg": 0.26
      }
    },
    {
      "swellHeight": {
        "icon": 0.25,
        "sg": 0.25
      },
      "swellPeriod": {
        "icon": 5.42,
        "sg": 5.42
      },
      "time": "2022-03-27T15:00:00+00:00",
      "waterTemperature": {
        "meto": 9.39,
        "noaa": 17.03,
        "sg": 9.39
      },
      "waveDirection": {
        "icon": 91.99,
        "sg": 91.99
      },
      "waveHeight": {
        "icon": 0.25,
        "sg": 0.25
      }
    },
    {
      "swellHeight": {
        "icon": 0.24,
        "sg": 0.24
      },
      "swellPeriod": {
        "icon": 5.66,
        "sg": 5.66
      },
      "time": "2022-03-27T16:00:00+00:00",
      "waterTemperature": {
        "meto": 9.39,
        "noaa": 15.64,
        "sg": 9.39
      },
      "waveDirection": {
        "icon": 102.39,
        "sg": 102.39
      },
      "waveHeight": {
        "icon": 0.24,
        "sg": 0.24
      }
    },
    {
      "swellHeight": {
        "icon": 0.24,
        "sg": 0.24
      },
      "swellPeriod": {
        "icon": 5.91,
        "sg": 5.91
      },
      "time": "2022-03-27T17:00:00+00:00",
      "waterTemperature": {
        "meto": 9.38,
        "noaa": 14.24,
        "sg": 9.38
      },
      "waveDirection": {
        "icon": 112.79,
        "sg": 112.79
      },
      "waveHeight": {
        "icon": 0.24,
        "sg": 0.24
      }
    },
    {
      "swellHeight": {
        "icon": 0.23,
        "sg": 0.23
      },
      "swellPeriod": {
        "icon": 6.15,
        "sg": 6.15
      },
      "time": "2022-03-27T18:00:00+00:00",
      "waterTemperature": {
        "meto": 9.37,
        "noaa": 12.85,
        "sg": 9.37
      },
      "waveDirection": {
        "icon": 123.19,
        "sg": 123.19
      },
      "waveHeight": {
        "icon": 0.23,
        "sg": 0.23
      }
    },
    {
      "swellHeight": {
        "icon": 0.22,
        "sg": 0.22
      },
      "swellPeriod": {
        "icon": 6.46,
        "sg": 6.46
      },
      "time": "2022-03-27T19:00:00+00:00",
      "waterTemperature": {
        "meto": 9.37,
        "noaa": 11.92,
        "sg": 9.37
      },
      "waveDirection": {
        "icon": 144.49,
        "sg": 144.49
      },
      "waveHeight": {
        "icon": 0.22,
        "sg": 0.22
      }
    },
    {
      "swellHeight": {
        "icon": 0.22,
        "sg": 0.22
      },
      "swellPeriod": {
        "icon": 6.76,
        "sg": 6.76
      },
      "time": "2022-03-27T20:00:00+00:00",
      "waterTemperature": {
        "meto": 9.36,
        "noaa": 10.98,
        "sg": 9.36
      },
      "waveDirection": {
        "icon": 165.79,
        "sg": 165.79
      },
      "waveHeight": {
        "icon": 0.22,
        "sg": 0.22
      }
    },
    {
      "swellHeight": {
        "icon": 0.21,
        "sg": 0.21
      },
      "swellPeriod": {
        "icon": 7.07,
        "sg": 7.07
      },
      "time": "2022-03-27T21:00:00+00:00",
      "waterTemperature": {
        "meto": 9.35,
        "noaa": 10.05,
        "sg": 9.35
      },
      "waveDirection": {
        "icon": 187.09,
        "sg": 187.09
      },
      "waveHeight": {
        "icon": 0.21,
        "sg": 0.21
      }
    },
    {
      "swellHeight": {
        "icon": 0.21,
        "sg": 0.21
      },
      "swellPeriod": {
        "icon": 7.41,
        "sg": 7.41
      },
      "time": "2022-03-27T22:00:00+00:00",
      "waterTemperature": {
        "meto": 9.35,
        "noaa": 9.49,
        "sg": 9.35
      },
      "waveDirection": {
        "icon": 196.84,
        "sg": 196.84
      },
      "waveHeight": {
        "icon": 0.21,
        "sg": 0.21
      }
    },
    {
      "swellHeight": {
        "icon": 0.2,
        "sg": 0.2
      },
      "swellPeriod": {
        "icon": 7.75,
        "sg": 7.75
      },
      "time": "2022-03-27T23:00:00+00:00",
      "waterTemperature": {
        "meto": 9.34,
        "noaa": 8.93,
        "sg": 9.34
      },
      "waveDirection": {
        "icon": 206.58,
        "sg": 206.58
      },
      "waveHeight": {
        "icon": 0.2,
        "sg": 0.2
      }
    },
    {
      "swellHeight": {
        "icon": 0.2,
        "sg": 0.2
      },
      "swellPeriod": {
        "icon": 8.09,
        "sg": 8.09
      },
      "time": "2022-03-28T00:00:00+00:00",
      "waterTemperature": {
        "meto": 9.27,
        "noaa": 8.37,
        "sg": 9.27
      },
      "waveDirection": {
        "icon": 216.33,
        "sg": 216.33
      },
      "waveHeight": {
        "icon": 0.2,
        "sg": 0.2
      }
    },
    {
      "swellHeight": {
        "icon": 0.2,
        "sg": 0.2
      },
      "swellPeriod": {
        "icon": 8.43,
        "sg": 8.43
      },
      "time": "2022-03-28T01:00:00+00:00",
      "waterTemperature": {
        "meto": 9.26,
        "noaa": 8.01,
        "sg": 9.26
      },
      "waveDirection": {
        "icon": 219.5,
        "sg": 219.5
      },
      "waveHeight": {
        "icon": 0.2,
        "sg": 0.2
      }
    },
    {
      "swellHeight": {
        "icon": 0.19,
        "sg": 0.19
      },
      "swellPeriod": {
        "icon": 8.76,
        "sg": 8.76
      },
      "time": "2022-03-28T02:00:00+00:00",
      "waterTemperature": {
        "meto": 9.26,
        "noaa": 7.65,
        "sg": 9.26
      },
      "waveDirection": {
        "icon": 222.67,
        "sg": 222.67
      },
      "waveHeight": {
        "icon": 0.19,
        "sg": 0.19
      }
    },
    {
      "swellHeight": {
        "icon": 0.19,
        "sg": 0.19
      },
      "swellPeriod": {
        "icon": 9.1,
        "sg": 9.1
      },
      "time": "2022-03-28T03:00:00+00:00",
      "waterTemperature": {
        "meto": 9.25,
        "noaa": 7.29,
        "sg": 9.25
      },
      "waveDirection": {
        "icon": 225.84,
        "sg": 225.84
      },
      "waveHeight": {
        "icon": 0.19,
        "sg": 0.19
      }
    },
    {
      "swellHeight": {
        "icon": 0.19,
        "sg": 0.19
      },
      "swellPeriod": {
        "icon": 9.38,
        "sg": 9.38
      },
      "time": "2022-03-28T04:00:00+00:00",
      "waterTemperature": {
        "meto": 9.25,
        "noaa": 7.06,
        "sg": 9.25
      },
      "waveDirection": {
        "icon": 227.15,
        "sg": 227.15
      },
      "waveHeight": {
        "icon": 0.19,
        "sg": 0.19
      }
    },
    {
      "swellHeight": {
        "icon": 0.19,
        "sg": 0.19
      },
      "swellPeriod": {
        "icon": 9.67,
        "sg": 9.67
      },
      "time": "2022-03-28T05:00:00+00:00",
      "waterTemperature": {
        "meto": 9.25,
        "noaa": 6.83,
        "sg": 9.25
      },
      "waveDirection": {
        "icon": 228.45,
        "sg": 228.45
      },
      "waveHeight": {
        "icon": 0.19,
        "sg": 0.19
      }
    },
    {
      "swellHeight": {
        "icon": 0.19,
        "sg": 0.19
      },
      "swellPeriod": {
        "icon": 9.95,
        "sg": 9.95
      },
      "time": "2022-03-28T06:00:00+00:00",
      "waterTemperature": {
        "meto": 9.24,
        "noaa": 6.6,
        "sg": 9.24
      },
      "waveDirection": {
        "icon": 229.76,
        "sg": 229.76
      },
      "waveHeight": {
        "icon": 0.19,
        "sg": 0.19
      }
    },
    {
      "swellHeight": {
        "icon": 0.19,
        "sg": 0.19
      },
      "swellPeriod": {
        "icon": 10.41,
        "sg": 10.41
      },
      "time": "2022-03-28T07:00:00+00:00",
      "waterTemperature": {
        "meto": 9.24,
        "noaa": 8.69,
        "sg": 9.24
      },
      "waveDirection": {
        "icon": 230.27,
        "sg": 230.27
      },
      "waveHeight": {
        "icon": 0.21,
        "sg": 0.21
      }
    },
    {
      "swellHeight": {
        "icon": 0.19,
        "sg": 0.19
      },
      "swellPeriod": {
        "icon": 10.87,
        "sg": 10.87
      },
      "time": "2022-03-28T08:00:00+00:00",
      "waterTemperature": {
        "meto": 9.24,
        "noaa": 10.77,
        "sg": 9.24
      },
      "waveDirection": {
        "icon": 230.77,
        "sg": 230.77
      },
      "waveHeight": {
        "icon": 0.22,
        "sg": 0.22
      }
    },
    {
      "swellHeight": {
        "icon": 0.19,
        "sg": 0.19
      },
      "swellPeriod": {
        "icon": 11.33,
        "sg": 11.33
      },
      "time": "2022-03-28T09:00:00+00:00",
      "waterTemperature": {
        "meto": 9.23,
        "noaa": 12.85,
        "sg": 9.23
      },
      "waveDirection": {
        "icon": 231.28,
        "sg": 231.28
      },
      "waveHeight": {
        "icon": 0.24,
        "sg": 0.24
      }
    },
    {
      "swellHeight": {
        "icon": 0.21,
        "sg": 0.21
      },
      "swellPeriod": {
        "icon": 10.31,
        "sg": 10.31
      },
      "time": "2022-03-28T10:00:00+00:00",
      "waterTemperature": {
        "meto": 9.23,
        "noaa": 14.57,
        "sg": 9.23
      },
      "waveDirection": {
        "icon": 178.66,
        "sg": 178.66
      },
      "waveHeight": {
        "icon": 0.36,
        "sg": 0.36
      }
    },
    {
      "swellHeight": {
        "icon": 0.23,
        "sg": 0.23
      },
      "swellPeriod": {
        "icon": 9.3,
        "sg": 9.3
      },
      "time": "2022-03-28T11:00:00+00:00",
      "waterTemperature": {
        "meto": 9.23,
        "noaa": 16.29,
        "sg": 9.23
      },
      "waveDirection": {
        "icon": 126.03,
        "sg": 126.03
      },
      "waveHeight": {
        "icon": 0.49,
        "sg": 0.49
      }
    },
    {
      "swellHeight": {
        "icon": 0.25,
        "sg": 0.25
      },
      "swellPeriod": {
        "icon": 8.28,
        "sg": 8.28
      },
      "time": "2022-03-28T12:00:00+00:00",
      "waterTemperature": {
        "meto": 9.23,
        "noaa": 18,
        "sg": 9.23
      },
      "waveDirection": {
        "icon": 73.41,
        "sg": 73.41
      },
      "waveHeight": {
        "icon": 0.61,
        "sg": 0.61
      }
    },
    {
      "swellHeight": {
        "icon": 0.3,
        "sg": 0.3
      },
      "swellPeriod": {
        "icon": 7.57,
        "sg": 7.57
      },
      "time": "2022-03-28T13:00:00+00:00",
      "waterTemperature": {
        "meto": 9.22,
        "noaa": 17.77,
        "sg": 9.22
      },
      "waveDirection": {
        "icon": 75.62,
        "sg": 75.62
      },
      "waveHeight": {
        "icon": 0.65,
        "sg": 0.65
      }
    },
    {
      "swellHeight": {
        "icon": 0.35,
        "sg": 0.35
      },
      "swellPeriod": {
        "icon": 6.86,
        "sg": 6.86
      },
      "time": "2022-03-28T14:00:00+00:00",
      "waterTemperature": {
        "meto": 9.22,
        "noaa": 17.53,
        "sg": 9.22
      },
      "waveDirection": {
        "icon": 77.84,
        "sg": 77.84
      },
      "waveHeight": {
        "icon": 0.7,
        "sg": 0.7
      }
    },
    {
      "swellHeight": {
        "icon": 0.4,
        "sg": 0.4
      },
      "swellPeriod": {
        "icon": 6.15,
        "sg": 6.15
      },
      "time": "2022-03-28T15:00:00+00:00",
      "waterTemperature": {
        "meto": 9.22,
        "noaa": 17.29,
        "sg": 9.22
      },
      "waveDirection": {
        "icon": 80.05,
        "sg": 80.05
      },
      "waveHeight": {
        "icon": 0.74,
        "sg": 0.74
      }
    },
    {
      "swellHeight": {
        "icon": 0.42,
        "sg": 0.42
      },
      "swellPeriod": {
        "icon": 6.11,
        "sg": 6.11
      },
      "time": "2022-03-28T16:00:00+00:00",
      "waterTemperature": {
        "meto": 9.22,
        "noaa": 16.02,
        "sg": 9.22
      },
      "waveDirection": {
        "icon": 79.22,
        "sg": 79.22
      },
      "waveHeight": {
        "icon": 0.77,
        "sg": 0.77
      }
    },
    {
      "swellHeight": {
        "icon": 0.44,
        "sg": 0.44
      },
      "swellPeriod": {
        "icon": 6.07,
        "sg": 6.07
      },
      "time": "2022-03-28T17:00:00+00:00",
      "waterTemperature": {
        "meto": 9.22,
        "noaa": 14.75,
        "sg": 9.22
      },
      "waveDirection": {
        "icon": 78.39,
        "sg": 78.39
      },
      "waveHeight": {
        "icon": 0.79,
        "sg": 0.79
      }
    },
    {
      "swellHeight": {
        "icon": 0.46,
        "sg": 0.46
      },
      "swellPeriod": {
        "icon": 6.03,
        "sg": 6.03
      },
      "time": "2022-03-28T18:00:00+00:00",
      "waterTemperature": {
        "meto": 9.21,
        "noaa": 13.47,
        "sg": 9.21
      },
      "waveDirection": {
        "icon": 77.56,
        "sg": 77.56
      },
      "waveHeight": {
        "icon": 0.82,
        "sg": 0.82
      }
    },
    {
      "swellHeight": {
        "icon": 0.52,
        "sg": 0.52
      },
      "swellPeriod": {
        "icon": 5.88,
        "sg": 5.88
      },
      "time": "2022-03-28T19:00:00+00:00",
      "waterTemperature": {
        "meto": 9.21,
        "noaa": 12.65,
        "sg": 9.21
      },
      "waveDirection": {
        "icon": 76.69,
        "sg": 76.69
      },
      "waveHeight": {
        "icon": 0.84,
        "sg": 0.84
      }
    },
    {
      "swellHeight": {
        "icon": 0.58,
        "sg": 0.58
      },
      "swellPeriod": {
        "icon": 5.73,
        "sg": 5.73
      },
      "time": "2022-03-28T20:00:00+00:00",
      "waterTemperature": {
        "meto": 9.21,
        "noaa": 11.82,
        "sg": 9.21
      },
      "waveDirection": {
        "icon": 75.82,
        "sg": 75.82
      },
      "waveHeight": {
        "icon": 0.87,
        "sg": 0.87
      }
    },
    {
      "swellHeight": {
        "icon": 0.64,
        "sg": 0.64
      },
      "swellPeriod": {
        "icon": 5.58,
        "sg": 5.58
      },
      "time": "2022-03-28T21:00:00+00:00",
      "waterTemperature": {
        "meto": 9.21,
        "noaa": 10.99,
        "sg": 9.21
      },
      "waveDirection": {
        "icon": 74.95,
        "sg": 74.95
      },
      "waveHeight": {
        "icon": 0.89,
        "sg": 0.89
      }
    },
    {
      "swellHeight": {
        "icon": 0.67,
        "sg": 0.67
      },
      "swellPeriod": {
        "icon": 5.42,
        "sg": 5.42
      },
      "time": "2022-03-28T22:00:00+00:00",
      "waterTemperature": {
        "meto": 9.21,
        "noaa": 10.48,
        "sg": 9.21
      },
      "waveDirection": {
        "icon": 75.26,
        "sg": 75.26
      },
      "waveHeight": {
        "icon": 0.85,
        "sg": 0.85
      }
    },
    {
      "swellHeight": {
        "icon": 0.69,
        "sg": 0.69
      },
      "swellPeriod": {
        "icon": 5.27,
        "sg": 5.27
      },
      "time": "2022-03-28T23:00:00+00:00",
      "waterTemperature": {
        "meto": 9.21,
        "noaa": 9.98,
        "sg": 9.21
      },
      "waveDirection": {
        "icon": 75.57,
        "sg": 75.57
      },
      "waveHeight": {
        "icon": 0.8,
        "sg": 0.8
      }
    },
    {
      "swellHeight": {
        "icon": 0.72,
        "sg": 0.72
      },
      "swellPeriod": {
        "icon": 5.11,
        "sg": 5.11
      },
      "time": "2022-03-29T00:00:00+00:00",
      "waterTemperature": {
        "meto": 9.84,
        "noaa": 9.47,
        "sg": 9.84
      },
      "waveDirection": {
        "icon": 75.88,
        "sg": 75.88
      },
      "waveHeight": {
        "icon": 0.76,
        "sg": 0.76
      }
    },
    {
      "swellHeight": {
        "icon": 0.68,
        "sg": 0.68
      },
      "swellPeriod": {
        "icon": 5.09,
        "sg": 5.09
      },
      "time": "2022-03-29T01:00:00+00:00",
      "waterTemperature": {
        "meto": 9.85,
        "noaa": 9.18,
        "sg": 9.85
      },
      "waveDirection": {
        "icon": 76.24,
        "sg": 76.24
      },
      "waveHeight": {
        "icon": 0.71,
        "sg": 0.71
      }
    },
    {
      "swellHeight": {
        "icon": 0.64,
        "sg": 0.64
      },
      "swellPeriod": {
        "icon": 5.08,
        "sg": 5.08
      },
      "time": "2022-03-29T02:00:00+00:00",
      "waterTemperature": {
        "meto": 9.86,
        "noaa": 8.88,
        "sg": 9.86
      },
      "waveDirection": {
        "icon": 76.6,
        "sg": 76.6
      },
      "waveHeight": {
        "icon": 0.67,
        "sg": 0.67
      }
    },
    {
      "swellHeight": {
        "icon": 0.6,
        "sg": 0.6
      },
      "swellPeriod": {
        "icon": 5.06,
        "sg": 5.06
      },
      "time": "2022-03-29T03:00:00+00:00",
      "waterTemperature": {
        "meto": 9.87,
        "noaa": 8.59,
        "sg": 9.87
      },
      "waveDirection": {
        "icon": 76.96,
        "sg": 76.96
      },
      "waveHeight": {
        "icon": 0.62,
        "sg": 0.62
      }
    },
    {
      "swellHeight": {
        "icon": 0.56,
        "sg": 0.56
      },
      "swellPeriod": {
        "icon": 5.08,
        "sg": 5.08
      },
      "time": "2022-03-29T04:00:00+00:00",
      "waterTemperature": {
        "meto": 9.87,
        "noaa": 8.42,
        "sg": 9.87
      },
      "waveDirection": {
        "icon": 76.3,
        "sg": 76.3
      },
      "waveHeight": {
        "icon": 0.59,
        "sg": 0.59
      }
    },
    {
      "swellHeight": {
        "icon": 0.52,
        "sg": 0.52
      },
      "swellPeriod": {
        "icon": 5.11,
        "sg": 5.11
      },
      "time": "2022-03-29T05:00:00+00:00",
      "waterTemperature": {
        "meto": 9.88,
        "noaa": 8.26,
        "sg": 9.88
      },
      "waveDirection": {
        "icon": 75.65,
        "sg": 75.65
      },
      "waveHeight": {
        "icon": 0.56,
        "sg": 0.56
      }
    },
    {
      "swellHeight": {
        "icon": 0.48,
        "sg": 0.48
      },
      "swellPeriod": {
        "icon": 5.13,
        "sg": 5.13
      },
      "time": "2022-03-29T06:00:00+00:00",
      "waterTemperature": {
        "meto": 9.89,
        "noaa": 8.09,
        "sg": 9.89
      },
      "waveDirection": {
        "icon": 74.99,
        "sg": 74.99
      },
      "waveHeight": {
        "icon": 0.53,
        "sg": 0.53
      }
    },
    // {
    //   "time": "2022-03-29T07:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.9,
    //     "noaa": 8.51,
    //     "sg": 9.9
    //   }
    // },
    // {
    //   "time": "2022-03-29T08:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.91,
    //     "noaa": 8.93,
    //     "sg": 9.91
    //   }
    // },
    // {
    //   "time": "2022-03-29T09:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.91,
    //     "noaa": 9.35,
    //     "sg": 9.91
    //   }
    // },
    // {
    //   "time": "2022-03-29T10:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.92,
    //     "noaa": 9.45,
    //     "sg": 9.92
    //   }
    // },
    // {
    //   "time": "2022-03-29T11:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.93,
    //     "noaa": 9.55,
    //     "sg": 9.93
    //   }
    // },
    // {
    //   "time": "2022-03-29T12:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.93,
    //     "noaa": 9.65,
    //     "sg": 9.93
    //   }
    // },
    // {
    //   "time": "2022-03-29T13:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.94,
    //     "noaa": 9.52,
    //     "sg": 9.94
    //   }
    // },
    // {
    //   "time": "2022-03-29T14:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.95,
    //     "noaa": 9.4,
    //     "sg": 9.95
    //   }
    // },
    // {
    //   "time": "2022-03-29T15:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.95,
    //     "noaa": 9.27,
    //     "sg": 9.95
    //   }
    // },
    // {
    //   "time": "2022-03-29T16:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.96,
    //     "noaa": 8.93,
    //     "sg": 9.96
    //   }
    // },
    // {
    //   "time": "2022-03-29T17:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.96,
    //     "noaa": 8.59,
    //     "sg": 9.96
    //   }
    // },
    // {
    //   "time": "2022-03-29T18:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.97,
    //     "noaa": 8.25,
    //     "sg": 9.97
    //   }
    // },
    // {
    //   "time": "2022-03-29T19:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.98,
    //     "noaa": 7.87,
    //     "sg": 9.98
    //   }
    // },
    // {
    //   "time": "2022-03-29T20:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.98,
    //     "noaa": 7.49,
    //     "sg": 9.98
    //   }
    // },
    // {
    //   "time": "2022-03-29T21:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.99,
    //     "noaa": 7.11,
    //     "sg": 9.99
    //   }
    // },
    // {
    //   "time": "2022-03-29T22:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.99,
    //     "noaa": 6.68,
    //     "sg": 9.99
    //   }
    // },
    // {
    //   "time": "2022-03-29T23:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 10,
    //     "noaa": 6.26,
    //     "sg": 10
    //   }
    // },
    // {
    //   "time": "2022-03-30T00:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.63,
    //     "noaa": 5.83,
    //     "sg": 9.63
    //   }
    // },
    // {
    //   "time": "2022-03-30T01:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.63,
    //     "noaa": 5.6,
    //     "sg": 9.63
    //   }
    // },
    // {
    //   "time": "2022-03-30T02:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.63,
    //     "noaa": 5.38,
    //     "sg": 9.63
    //   }
    // },
    // {
    //   "time": "2022-03-30T03:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.63,
    //     "noaa": 5.15,
    //     "sg": 9.63
    //   }
    // },
    // {
    //   "time": "2022-03-30T04:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.63,
    //     "noaa": 4.58,
    //     "sg": 9.63
    //   }
    // },
    // {
    //   "time": "2022-03-30T05:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.62,
    //     "noaa": 4.02,
    //     "sg": 9.62
    //   }
    // },
    // {
    //   "time": "2022-03-30T06:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.62,
    //     "noaa": 3.45,
    //     "sg": 9.62
    //   }
    // },
    // {
    //   "time": "2022-03-30T07:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.62,
    //     "noaa": 5.03,
    //     "sg": 9.62
    //   }
    // },
    // {
    //   "time": "2022-03-30T08:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.62,
    //     "noaa": 6.61,
    //     "sg": 9.62
    //   }
    // },
    // {
    //   "time": "2022-03-30T09:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.62,
    //     "noaa": 8.18,
    //     "sg": 9.62
    //   }
    // },
    // {
    //   "time": "2022-03-30T10:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.62,
    //     "noaa": 9.72,
    //     "sg": 9.62
    //   }
    // },
    // {
    //   "time": "2022-03-30T11:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.62,
    //     "noaa": 11.26,
    //     "sg": 9.62
    //   }
    // },
    // {
    //   "time": "2022-03-30T12:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.61,
    //     "noaa": 12.81,
    //     "sg": 9.61
    //   }
    // },
    // {
    //   "time": "2022-03-30T13:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.61,
    //     "noaa": 12.16,
    //     "sg": 9.61
    //   }
    // },
    // {
    //   "time": "2022-03-30T14:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.61,
    //     "noaa": 11.51,
    //     "sg": 9.61
    //   }
    // },
    // {
    //   "time": "2022-03-30T15:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.61,
    //     "noaa": 10.86,
    //     "sg": 9.61
    //   }
    // },
    // {
    //   "time": "2022-03-30T16:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.61,
    //     "noaa": 9.89,
    //     "sg": 9.61
    //   }
    // },
    // {
    //   "time": "2022-03-30T17:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.61,
    //     "noaa": 8.91,
    //     "sg": 9.61
    //   }
    // },
    // {
    //   "time": "2022-03-30T18:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.61,
    //     "noaa": 7.94,
    //     "sg": 9.61
    //   }
    // },
    // {
    //   "time": "2022-03-30T19:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.61,
    //     "noaa": 7.56,
    //     "sg": 9.61
    //   }
    // },
    // {
    //   "time": "2022-03-30T20:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.61,
    //     "noaa": 7.19,
    //     "sg": 9.61
    //   }
    // },
    // {
    //   "time": "2022-03-30T21:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.61,
    //     "noaa": 6.81,
    //     "sg": 9.61
    //   }
    // },
    // {
    //   "time": "2022-03-30T22:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.61,
    //     "noaa": 6.54,
    //     "sg": 9.61
    //   }
    // },
    // {
    //   "time": "2022-03-30T23:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.6,
    //     "noaa": 6.27,
    //     "sg": 9.6
    //   }
    // },
    // {
    //   "time": "2022-03-31T00:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.22,
    //     "noaa": 6.01,
    //     "sg": 9.22
    //   }
    // },
    // {
    //   "time": "2022-03-31T01:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.22,
    //     "noaa": 6.04,
    //     "sg": 9.22
    //   }
    // },
    // {
    //   "time": "2022-03-31T02:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.22,
    //     "noaa": 6.08,
    //     "sg": 9.22
    //   }
    // },
    // {
    //   "time": "2022-03-31T03:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.21,
    //     "noaa": 6.12,
    //     "sg": 9.21
    //   }
    // },
    // {
    //   "time": "2022-03-31T04:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.21,
    //     "noaa": 5.77,
    //     "sg": 9.21
    //   }
    // },
    // {
    //   "time": "2022-03-31T05:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.21,
    //     "noaa": 5.43,
    //     "sg": 9.21
    //   }
    // },
    // {
    //   "time": "2022-03-31T06:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.21,
    //     "noaa": 5.09,
    //     "sg": 9.21
    //   }
    // },
    // {
    //   "time": "2022-03-31T07:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.21,
    //     "noaa": 5.85,
    //     "sg": 9.21
    //   }
    // },
    // {
    //   "time": "2022-03-31T08:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.2,
    //     "noaa": 6.6,
    //     "sg": 9.2
    //   }
    // },
    // {
    //   "time": "2022-03-31T09:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.2,
    //     "noaa": 7.36,
    //     "sg": 9.2
    //   }
    // },
    // {
    //   "time": "2022-03-31T10:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.2,
    //     "noaa": 8.16,
    //     "sg": 9.2
    //   }
    // },
    // {
    //   "time": "2022-03-31T11:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.2,
    //     "noaa": 8.96,
    //     "sg": 9.2
    //   }
    // },
    // {
    //   "time": "2022-03-31T12:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.19,
    //     "noaa": 9.76,
    //     "sg": 9.19
    //   }
    // },
    // {
    //   "time": "2022-03-31T13:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.19,
    //     "noaa": 10.26,
    //     "sg": 9.19
    //   }
    // },
    // {
    //   "time": "2022-03-31T14:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.18,
    //     "noaa": 10.76,
    //     "sg": 9.18
    //   }
    // },
    // {
    //   "time": "2022-03-31T15:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.18,
    //     "noaa": 11.26,
    //     "sg": 9.18
    //   }
    // },
    // {
    //   "time": "2022-03-31T16:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.17,
    //     "noaa": 10.79,
    //     "sg": 9.17
    //   }
    // },
    // {
    //   "time": "2022-03-31T17:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.17,
    //     "noaa": 10.32,
    //     "sg": 9.17
    //   }
    // },
    // {
    //   "time": "2022-03-31T18:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.16,
    //     "noaa": 9.84,
    //     "sg": 9.16
    //   }
    // },
    // {
    //   "time": "2022-03-31T19:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.16,
    //     "noaa": 9.57,
    //     "sg": 9.16
    //   }
    // },
    // {
    //   "time": "2022-03-31T20:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.15,
    //     "noaa": 9.29,
    //     "sg": 9.15
    //   }
    // },
    // {
    //   "time": "2022-03-31T21:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.15,
    //     "noaa": 9.01,
    //     "sg": 9.15
    //   }
    // },
    // {
    //   "time": "2022-03-31T22:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.14,
    //     "noaa": 8.88,
    //     "sg": 9.14
    //   }
    // },
    // {
    //   "time": "2022-03-31T23:00:00+00:00",
    //   "waterTemperature": {
    //     "meto": 9.14,
    //     "noaa": 8.75,
    //     "sg": 9.14
    //   }
    // },
    // {
    //   "time": "2022-04-01T00:00:00+00:00",
    //   "waterTemperature": {
    //     "noaa": 8.62,
    //     "sg": 8.62
    //   }
    // },
    // {
    //   "time": "2022-04-01T01:00:00+00:00",
    //   "waterTemperature": {
    //     "noaa": 8.64,
    //     "sg": 8.64
    //   }
    // },
    // {
    //   "time": "2022-04-01T02:00:00+00:00",
    //   "waterTemperature": {
    //     "noaa": 8.65,
    //     "sg": 8.65
    //   }
    // },
    // {
    //   "time": "2022-04-01T03:00:00+00:00",
    //   "waterTemperature": {
    //     "noaa": 8.67,
    //     "sg": 8.67
    //   }
    // },
    // {
    //   "time": "2022-04-01T04:00:00+00:00",
    //   "waterTemperature": {
    //     "noaa": 8.69,
    //     "sg": 8.69
    //   }
    // },
    // {
    //   "time": "2022-04-01T05:00:00+00:00",
    //   "waterTemperature": {
    //     "noaa": 8.71,
    //     "sg": 8.71
    //   }
    // },
    // {
    //   "time": "2022-04-01T06:00:00+00:00",
    //   "waterTemperature": {
    //     "noaa": 8.73,
    //     "sg": 8.73
    //   }
    // },
    // {
    //   "time": "2022-04-01T07:00:00+00:00",
    //   "waterTemperature": {
    //     "noaa": 8.75,
    //     "sg": 8.75
    //   }
    // },
    // {
    //   "time": "2022-04-01T08:00:00+00:00",
    //   "waterTemperature": {
    //     "noaa": 8.77,
    //     "sg": 8.77
    //   }
    // },
    // {
    //   "time": "2022-04-01T09:00:00+00:00",
    //   "waterTemperature": {
    //     "noaa": 8.79,
    //     "sg": 8.79
    //   }
    // },
    // {
    //   "time": "2022-04-01T10:00:00+00:00",
    //   "waterTemperature": {
    //     "noaa": 8.81,
    //     "sg": 8.81
    //   }
    // },
    // {
    //   "time": "2022-04-01T11:00:00+00:00",
    //   "waterTemperature": {
    //     "noaa": 8.83,
    //     "sg": 8.83
    //   }
    // },
    // {
    //   "time": "2022-04-01T12:00:00+00:00",
    //   "waterTemperature": {
    //     "noaa": 8.84,
    //     "sg": 8.84
    //   }
    // },
    // {
    //   "time": "2022-04-01T13:00:00+00:00",
    //   "waterTemperature": {
    //     "noaa": 8.9,
    //     "sg": 8.9
    //   }
    // },
    // {
    //   "time": "2022-04-01T14:00:00+00:00",
    //   "waterTemperature": {
    //     "noaa": 8.95,
    //     "sg": 8.95
    //   }
    // },
    // {
    //   "time": "2022-04-01T15:00:00+00:00",
    //   "waterTemperature": {
    //     "noaa": 9,
    //     "sg": 9
    //   }
    // },
    // {
    //   "time": "2022-04-01T16:00:00+00:00",
    //   "waterTemperature": {
    //     "noaa": 9.05,
    //     "sg": 9.05
    //   }
    // },
    // {
    //   "time": "2022-04-01T17:00:00+00:00",
    //   "waterTemperature": {
    //     "noaa": 9.1,
    //     "sg": 9.1
    //   }
    // },
    // {
    //   "time": "2022-04-01T18:00:00+00:00",
    //   "waterTemperature": {
    //     "noaa": 9.16,
    //     "sg": 9.16
    //   }
    // },
    // {
    //   "time": "2022-04-01T19:00:00+00:00",
    //   "waterTemperature": {
    //     "noaa": 9.21,
    //     "sg": 9.21
    //   }
    // },
    // {
    //   "time": "2022-04-01T20:00:00+00:00",
    //   "waterTemperature": {
    //     "noaa": 9.26,
    //     "sg": 9.26
    //   }
    // },
    // {
    //   "time": "2022-04-01T21:00:00+00:00",
    //   "waterTemperature": {
    //     "noaa": 9.31,
    //     "sg": 9.31
    //   }
    // },
    // {
    //   "time": "2022-04-01T22:00:00+00:00",
    //   "waterTemperature": {
    //     "noaa": 9.36,
    //     "sg": 9.36
    //   }
    // },
    // {
    //   "time": "2022-04-01T23:00:00+00:00",
    //   "waterTemperature": {
    //     "noaa": 9.41,
    //     "sg": 9.41
    //   }
    // },
    // {
    //   "time": "2022-04-02T00:00:00+00:00",
    //   "waterTemperature": {
    //     "noaa": 9.47,
    //     "sg": 9.47
    //   }
    // }
  ],
  "meta": {
    "cost": 1,
    "dailyQuota": 10,
    "end": "2022-04-02 00:00",
    "lat": 51.5255264,
    "lng": -0.0352277,
    "params": [
      "waveHeight",
      "waveDirection",
      "waterTemperature",
      "swellHeight",
      "swellPeriod"
    ],
    "requestCount": 3,
    "start": "2022-03-23 00:00"
  }
}