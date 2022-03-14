import styled from "styled-components";
import { useScreenType } from "../hooks/useScreenType";

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ScreenLayout = styled.div`
  width: ${props => props.screenType === "tablet" ? `600px` : `400px`};
  height: 100%;
  
`

export const Screen = ({ children }) => {
    const screenType = useScreenType();

    return (
        <Layout>
            <ScreenLayout screenType={screenType} >{children}</ScreenLayout>
        </Layout>
    );
}