import styled from "styled-components";
import { MenuAlt2Icon, SearchIcon, SunIcon } from "@heroicons/react/outline";
import img from "../assets/background.png";
import { WaveIcon } from "../icons/WaveIcon";
import { WindIcon } from "../icons/WindIcon";
import { DropIcon } from "../icons/DropIcon";
import { useLocation, Link } from "react-router-dom";
import { useCurrentWeather } from "../hooks/useCurrentWeather";
import { LoadingSpinner } from "../components/LoadingSpinner";

export const Home = () => {
  // for routing not coords info
  const location = useLocation();
  
  const weather = useCurrentWeather();

  const bottomNavLinks = [
    {
      href: "/weather",
      icon: (
        <SunIcon
          style={{ width: "30", heigth: "30", color: "white" }}
          strokeWidth={1.5}
        />
      ),
    },
    {
      href: "/sea",
      icon: (
        <DropIcon
          style={{ width: "16", heigth: "16", color: "white" }}
          strokeWidth={3}
        />
      ),
    },
    {
      href: "/waves",
      icon: (
        <WaveIcon
          style={{ width: "30", heigth: "30", color: "white" }}
          strokeWidth={10}
        />
      ),
    },
    {
      href: "/wind",
      icon: <WindIcon style={{ width: "30", heigth: "30", color: "white" }} />,
    },
  ];

  return (
    <Wrapper>
      <TopNavBar>
        <MenuAlt2Icon style={{ width: "30", heigth: "30", color: "white" }} />
        <Link to="/search" state={{ backgroundLocation: location }}>
          <SearchIcon style={{ width: "25", heigth: "25", color: "white" }} />
        </Link>
      </TopNavBar>
      <Image src={img} alt="background" />
      <WeatherInfo>
        {weather ? (
          <>
            <Temperature>
              {" "}
              {weather ? parseInt(weather.main.temp) : 28}&deg;
            </Temperature>
            <Location>
              {weather
                ? weather.name + ", " + weather.sys.country
                : "Loading location..."}
            </Location>
          </>
        ) : (
          <LoadingSpinner style={{ position: "absolute", top: "10%" }} />
        )}
      </WeatherInfo>
      <BottomNavBar>
        {bottomNavLinks.map((l) => (
          <Link
            key={l.href}
            to={l.href}
            state={{ backgroundLocation: location }}
          >
            {l.icon}
          </Link>
        ))}
      </BottomNavBar>
    </Wrapper>
  );
};

const TopNavBar = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem;
  position: absolute;
  top: 1rem;
  left: 1rem;
  right: 1rem;
`;
const Image = styled.img`
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
`;

const BottomNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;
  border-radius: 1rem 1rem;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  left: 1rem;
  background: rgba(131, 51, 158, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const Wrapper = styled.div`
  background-color: #360547;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Temperature = styled.h1`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 4rem;
  font-weight: 500;
`;

const WeatherInfo = styled.div`
  display: flex;
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
`;

const Location = styled.p`
  font-weight: 300;
  font-size: 1rem;
`;
