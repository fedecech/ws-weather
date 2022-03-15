/* eslint-disable no-undef */
import { Router } from "./components/Router";
import { BrowserRouter } from "react-router-dom";
import { Screen } from "./components/Screen";

function App() {
  return (
    <Screen>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Screen>
  );
}

export default App;
