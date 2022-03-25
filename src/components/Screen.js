import styled from "styled-components";
import { useScreenType } from "../hooks/useScreenType";

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScreenLayout = styled.div`
  width: ${(props) => (props.screenType === "tablet" ? `500px` : `400px`)};
  height: 100%;
  position: relative;
`;

/**
 * Component to set the width depending on the current screen width (currently just uses a fix width -> mobile)
 * @param {any} props 
 * @returns {any}
 */
export const Screen = ({ children }) => {
  const screenType = useScreenType();

  return (
    <Layout id="lay">
      <ScreenLayout id="slay" screenType={screenType}>
        {children}
      </ScreenLayout>
    </Layout>
  );
};
