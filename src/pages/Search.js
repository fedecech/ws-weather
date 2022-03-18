import { XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import styled from "styled-components";

import cities from "../cities.json";

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

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const Search = () => {
  const [query, setQuery] = useState("");
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
      <List>
        {query !== "" &&
          cities
            .filter((c) => c.country.includes(query) || c.name.includes(query))
            .splice(0, 20)
            .map((c) => (
              <Item>
                <span>{c.name}</span>
                <span
                  style={{ color: "rgb(175, 174, 174)", marginBottom: "4px" }}
                >
                  {c.country}
                </span>
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
