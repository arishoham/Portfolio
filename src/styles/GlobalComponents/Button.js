import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// import { ButtonBack, ButtonFront } from './index';

const Button = (props) => {
  const [deg, setDeg] = useState(270);
  const intId = useRef(null);
  const hoverIn = () => {
    if (!intId.current) {
      intId.current = setInterval((_) => requestAnimationFrame((_) => setDeg((cur) => cur + 1)), 10);
    }
  };
  const hoverOut = () => {
    if (intId.current) {
      clearInterval(intId.current);
      intId.current = null;
    }
  };
  return (
    <ButtonBack>
      {props.children}
      <ButtonFront
        animate={{
          background: `linear-gradient(${deg}deg, #13adc7 0%, #945dd6 100%)`,
        }}
        whileHover={{
          background: `linear-gradient(${deg}deg, #00dbd8 0%, #b133ff 100%)`,
        }}
        onHoverStart={hoverIn}
        onHoverEnd={hoverOut}
        alt={props.alt}
        onClick={props.onClick}
      >
        {props.children}
      </ButtonFront>
    </ButtonBack>
  );
};

const ButtonBack = styled(motion.div)`
  width: 262px;
  height: 64px;
  border-radius: 50px;
  font-size: 24px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 80px;
  color: #fff;
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 184px;
    height: 48px;
    font-size: 16px;
    margin-bottom: 64px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 32px;
    font-size: 14px;
    margin-bottom: 32px;
  }
`;

const ButtonFront = styled(motion.button)`
  border: none;
  border-radius: 50px;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.4s ease;
  font-size: 24px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;

export default Button;
