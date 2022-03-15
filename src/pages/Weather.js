import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";

const Today = styled.div`
    background-color: $primary;
    border-radius: 10px;
    color: #fff;
    margin-top: 20px;
`

const TodayInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 30px;
`

const TodayLeft = styled.div`

`

export const Weather = () => {

    const [position, setPosition] = useState(null)

    const [weather, setWeather] = useState(null)


    const location = useLocation();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setPosition({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
        }, (err) => alert(err.message))
    }, [])



    useEffect(() => {
        if (position) {
            // use https://cors-anywhere.herokuapp.com to remove cors error
            fetch(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?lat=${position.latitude}&lon=${position.longitude}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
                // , {
                //     method: "GET",
                //     headers: {
                //         'Content-Type': 'application/json'
                //     }
                // }
            ).then(d => {
                d.json().then(data => {
                    setWeather(data)
                })
            })
        }
    }, [position])

    return <div>


    </div>
}