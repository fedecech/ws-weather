import { useEffect, useState } from "react";
import styled from "styled-components";

const useScreenType = () => {
    const ss = window.screen.width;
    if (ss < 300)
        return "mobile"
    else if (ss < 700)
        return "tablet"
    return "desktop"
}


const UserTile = styled.div`
    background-color: ${(props) => props.color};
`

export const Home = ({ text }) => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("red");
    const screenType = useScreenType();
    const [users, setUsers] = useState(null);

    useEffect(() => {
        fetch("https://6228fa6abe12fc45389356d8.mockapi.io/user", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((d) => d.json()).then((json) => setUsers(json));
    }, [])



    if (!users) return <div>loading...</div>

    return <UserTile color={color}>
        {users.map(user => (<div>{user.name}</div>))}
        {text}
        <input type="text" onChange={(e) => setColor(e.target.value)} value={color} />
    </UserTile>;
}