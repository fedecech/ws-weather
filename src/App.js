import styled from "styled-components";

const HeaderText = styled.h1`
  color: red;
  font-size: 2rem;
`

function App() {
  return (
    <div className="App">
      <HeaderText>WS Weather</HeaderText>
    </div>
  );
}

export default App;
