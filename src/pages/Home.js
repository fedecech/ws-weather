import styled from "styled-components";
import { MenuAlt2Icon, SearchIcon, SunIcon, XIcon } from '@heroicons/react/outline'
import img from '../assets/background.png'
import { WaveIcon } from "../icons/WaveIcon";
import { WindIcon } from "../icons/WindIcon";
import { DropIcon } from "../icons/DropIcon";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";


const TopNavBar = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 1rem 1rem;
    position: absolute;
    top: 1rem;
    left: 1rem;
    right: 1rem;
`
const Image = styled.img`
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
`

const BottomNavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem;
    border-radius: 1rem 1rem;
    background-color: #5e1a75;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    left: 1rem;
`

const Wrapper = styled.div`
    background-color: #360547;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const Temperature = styled.h1`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 4rem;
    font-weight: 500;

`

const WeatherInfo = styled.div`
    display: flex;
    color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 4rem;
`

const Location = styled.p`
    font-weight: 300;
    font-size: 1rem;
`



export const Home = () => {
    const [search, setSearch] = useState(false);

    const activateSearch = () => setSearch(true)
    const deactivateSearch = () => setSearch(false)
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
            fetch(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?lat=${position.latitude}&lon=${position.longitude}&appid=${process.env.REACT_APP_API_KEY}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(d => {
                d.json().then(data => {
                    setWeather(data)
                })
            })
        }
    }, [position])

    const bottomNavLinks = [
        {
            href: "/weather",
            icon: <SunIcon style={{ width: '30', heigth: '30', color: "white" }} strokeWidth={1.5} />
        },
        {
            href: "/sea",
            icon: <DropIcon style={{ width: '16', heigth: '16', color: "white" }} strokeWidth={3} />
        },
        {
            href: "/waves",
            icon: <WaveIcon style={{ width: '30', heigth: '30', color: "white" }} strokeWidth={10} />
        },
        {
            href: "/wind",
            icon: <WindIcon style={{ width: '30', heigth: '30', color: "white" }} />

        }
    ]

    return (
        <Wrapper>
            <TopNavBar >
                <MenuAlt2Icon style={{ width: '30', heigth: '30', color: "white" }} />
                {search
                    ? <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="text" />
                        <button onClick={deactivateSearch}>
                            <XIcon style={{ width: '25', heigth: '25', color: "white" }} />
                        </button>
                    </div>
                    : <button onClick={activateSearch}>
                        <SearchIcon style={{ width: '25', heigth: '25', color: "white" }} />
                    </button>}
            </TopNavBar>
            <Image src={img} alt="background" />
            <WeatherInfo>
                <Temperature>28&deg;</Temperature>
                <Location>{weather ? weather.name + ", " + weather.sys.country : "Loading location..."}</Location>
            </WeatherInfo>
            <BottomNavBar>
                {bottomNavLinks.map(l =>
                    <Link key={l.href} to={l.href}
                        state={{ backgroundLocation: location }}
                    >
                        {l.icon}
                    </Link>
                )}
            </BottomNavBar>
        </Wrapper>
    )
}