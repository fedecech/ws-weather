import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Draggable from "react-draggable";
import { useState, useRef } from "react";

export const Modal = ({ children }) => {
  let history = useNavigate();

  // to remove deprecation error
  const ref = useRef(null)

  const [position, setPosition] = useState(() => {
    return { x: 0, y: window.innerHeight * 0.2 };
  });

  let back = (e) => {
    if (e.target.id === "bg") history(-1);
  };

  const handleStop = (e, data) => {
    if (data.y <= 0)
      setPosition((p) => {
        return { ...p, y: window.innerHeight * 0.2 };
      });
    else if (data.y > window.innerHeight * 0.5) history(-1);
  };

  return (
    <OuterWrapper onClick={back} id="bg">
      <Draggable
        axis="y"
        handle=".handle"
        onStop={handleStop}
        position={position}
        bounds={{ top: 20, bottom: window.innerHeight * 0.6 }}
        nodeRef={ref}
      >
        <InnerWrapper id="inner w" ref={ref}>
          <Handle className="handle" />
          <Content>{children}</Content>
        </InnerWrapper>
      </Draggable>
    </OuterWrapper>
  );
};

const OuterWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(1, 1, 1, 0.4);
  z-index: 100;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  align-items: flex-end;
`;

const InnerWrapper = styled.div`
  background-color: #360547;
  z-index: 100;
  margin-top: 20%;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  flex-direction: column;
`;
const Handle = styled.button`
  width: 2rem;
  height: 5px;
  background: white;
  border-radius: 3px;
  margin-bottom: 1rem;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: baseline;
`;