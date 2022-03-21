import moment from "moment";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { useWeather } from "../hooks/useWeather";
import { useCurrentWeather } from "../hooks/useCurrentWeather";
import styled from "styled-components";

export const Wind = () => {
  const getHourlyWeather = (hourlyData) => {
    if (!hourlyData) return null;

    const endOfDay = moment().endOf("day").valueOf();
    const eodTimeStamp = Math.floor(endOfDay / 1000);

    const todaysData = hourlyData.filter((data) => data.dt < eodTimeStamp);

    return todaysData;
  };

  const w = useCurrentWeather();
  const data = useWeather(w?.coords?.lat, w?.coords?.lon);
  const hourlyWeather = getHourlyWeather(data?.hourly);

  if (!data || !hourlyWeather)
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LoadingSpinner />
      </div>
    );

  return (
    <Wrapper>
      {hourlyWeather.length > 0 &&
        hourlyWeather.map((weather, index) => (
          <CardWrapper>
            <Card>
              <Title>
                {index === 0 ? "Now" : moment.unix(weather.dt).format("LT")}
              </Title>
              <span>Wind Speed: {weather.wind_speed}</span>
              <span>Wind Degrees: {weather.wind_deg}</span>
              <span>Wind Gust: {weather.wind_gust}</span>
            </Card>
          </CardWrapper>
        ))}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 90%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  margin-left: 1rem;
  padding-right: 1rem;
`;

const CardWrapper = styled.section`
  width: 100%;
  background: rgba(131, 51, 158, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  margin-bottom: 0.8rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
`;

const Title = styled.span`
  font-weight: 700;
  margin-bottom: 0.4rem;
`;
