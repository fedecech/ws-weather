import { Route, BrowserRouter, Routes } from "react-router-dom"
import { Home } from "./Home";
import { Screen } from "./Screen";



export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Screen><Home /></Screen>} />
            </Routes>
        </BrowserRouter>
    );
}