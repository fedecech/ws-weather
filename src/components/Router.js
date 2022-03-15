import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "../pages/Home";
import { Sea } from "../pages/Sea";
import { Waves } from "../pages/Waves";
import { Weather } from "../pages/Weather";
import { Wind } from "../pages/Wind";
import { Modal } from "./Modal";

export const Router = () => {
  const location = useLocation();

  const backgroundLocation = location.state?.backgroundLocation;

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {backgroundLocation && (
        <Routes>
          <Route
            path="/wind"
            element={
              <Modal>
                <Wind />
              </Modal>
            }
          />
        </Routes>
      )}
      {backgroundLocation && (
        <Routes>
          <Route
            path="/weather"
            element={
              <Modal>
                <Weather />
              </Modal>
            }
          />
        </Routes>
      )}
      {backgroundLocation && (
        <Routes>
          <Route
            path="/sea"
            element={
              <Modal>
                <Sea />
              </Modal>
            }
          />
        </Routes>
      )}
      {backgroundLocation && (
        <Routes>
          <Route
            path="/waves"
            element={
              <Modal>
                <Waves />
              </Modal>
            }
          />
        </Routes>
      )}

      <Routes location={backgroundLocation || location}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/wind" element={<Wind />} />
        <Route exact path="/weather" element={<Weather />} />
        <Route exact path="/sea" element={<Sea />} />
        <Route exact path="/waves" element={<Waves />} />
      </Routes>
    </div>
  );
};
