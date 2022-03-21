import { LocationMarkerIcon, PlusIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import cities from "../cities.json";
import { useSelectedLocationStore } from "../stores/useSelectedLocationStore";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
`;
const InputWrapper = styled.div`
  width: 100%;
  background-color: rgba(38, 15, 57);
  border-radius: 8px;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
`;

const InputText = styled.input`
  width: 100%;
  padding: 10px 10px;
  color: white;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  height: 100%;
  overflow-y: auto;
  margin-bottom: 40px;
`;

const Item = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const Search = () => {
  const [query, setQuery] = useState("");
  const { setLocation, reset } = useSelectedLocationStore();
  const navigator = useNavigate();

  return (
    <Wrapper>
      <InputWrapper>
        <InputText
          id="search"
          type="text"
          placeholder="Search for city"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={() => setQuery("")}>
          <XIcon style={{ width: "20px", height: "20px", color: "white" }} />
        </button>
      </InputWrapper>
      <Item onClick={() => reset()}>
        <div style={{ display: 'flex', alignItems: "center" }}>
          <LocationMarkerIcon style={{ width: '20px', height: '20px', marginRight: '10px' }} />
          <span>
            Use your current location
          </span>
        </div>
      </Item>
      <List>
        {query !== "" &&
          cities
            .filter((c) => c.country.toLowerCase().includes(query.toLowerCase()) || c.name.toLowerCase().includes(query.toLowerCase()))
            .splice(0, 20)
            .map((c, i) => (
              <Item key={i} onClick={() => {
                setLocation(c.name, c.country.toLowerCase())
                navigator("/")
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", width: '100%' }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    <span>{c.name}</span>
                    <span
                      style={{ color: "rgb(175, 174, 174)", marginBottom: "4px" }}
                    >
                      {c.country}
                    </span>
                  </div>
                  <PlusIcon style={{ width: '20px', height: '20px' }} />
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "rgb(79, 79, 79)",
                  }}
                ></div>
              </Item>
            ))}
      </List>
    </Wrapper>
  );
};
