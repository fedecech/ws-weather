import moment from "moment";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { useStormGlass } from "../hooks/useStormGlass";
import styled from "styled-components";

export const Waves = () => {
  const data =null; 
  // useStormGlass();
  if (!data)
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
  return <div>Waves

    {/* {console.log(data)} */}
  </div>;
};
