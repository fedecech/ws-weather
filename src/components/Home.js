import { useEffect, useState } from "react";
import styled from "styled-components";

// import img from './background.png'

const useScreenType = () => {
    const ss = window.screen.width;
    if (ss < 300)
        return "mobile"
    else if (ss < 700)
        return "tablet"
    return "desktop"
}

// const MainMenu = styled.div`
//  background-image: url(${img})`;

export const Home = () => {



    return <div>

    </div>;
}