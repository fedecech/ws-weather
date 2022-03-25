import { useEffect, useState } from "react";

function getGeoLocation(options) {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { coords } = position;
          resolve({
            isError: false,
            coords,
            message: "",
          });
        },
        (error) => {
          reject({ isError: true, message: error.message });
        },
        options
      );
    } else {
      reject({
        isError: true,
        message: "Geolocation is not supported for this Browser/OS.",
      });
    }
  });
}

const defaultGeoLocationOptions = {
  enableHighAccuracy: false,
  maximumAge: 0,
  timeout: Number.POSITIVE_INFINITY,
  when: true,
};

/**
 * Hook to get current location and handle authrization of location service
 * @param {*} geoLocationOptions 
 * @returns {any}
 */
export const useGeoLocation = (
  geoLocationOptions = defaultGeoLocationOptions
) => {
  const [geoObject, setGeoObject] = useState(null);
  const { when, enableHighAccuracy, timeout, maximumAge } = geoLocationOptions;

  useEffect(() => {
    async function getGeoCode() {
      try {
        const value = await getGeoLocation({
          enableHighAccuracy,
          maximumAge,
          timeout,
          when,
        });
        setGeoObject(value);
      } catch (error) {
        setGeoObject(error);
      }
    }
    if (when) {
      getGeoCode();
    }
  }, [when, enableHighAccuracy, timeout, maximumAge]);

  return geoObject;
};
