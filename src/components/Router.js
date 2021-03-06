import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "../pages/Home";
import { Sea } from "../pages/Sea";
import { Search } from "../pages/Search";
import { Waves } from "../pages/Waves";
import { Weather } from "../pages/Weather";
import { Wind } from "../pages/Wind";
import { Modal } from "./Modal";

/**
 * Router using react-router-dom. It uses useLocation to show the background page when a modal is displyed
 * @returns {any}
 */
export const Router = () => {
  const location = useLocation();

  const backgroundLocation = location.state?.backgroundLocation;

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
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
      {backgroundLocation && (
        <Routes>
          <Route
            path="/search"
            element={
              <Modal>
                <Search />
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
        <Route exact path="/search" element={<Search />} />
      </Routes>
    </div>
  );
};
