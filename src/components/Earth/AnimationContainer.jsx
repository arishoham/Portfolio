import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import React, { Suspense, useState, useEffect, useRef } from 'react';
import { Earth } from './Earth';
import { motion } from 'framer-motion';

export const CanvasWrapper = styled(motion.div)`
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`;

function AnimationContainer(props) {
  //Delay showing the map for .5 seconds
  const [show, setShow] = useState(false);
  useEffect(() => {
    let timeout = setTimeout(() => setShow(true), 800);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const rot = useRef(true);
  const startRotation = () => (rot.current = true);
  const unsetLocation = () => props.setLocation(false);

  return (
    <CanvasWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Suspense fallback={null}>
        <Canvas
          style={{ borderRadius: '3rem' }}
          onClick={startRotation}
          onMouseDown={unsetLocation}
          onTouchEnd={startRotation}
          onTouchStart={unsetLocation}
          onScroll={unsetLocation}
          onWheel={unsetLocation}
        >
          <Suspense fallback={null}>
            <Earth rot={rot} {...props} />
          </Suspense>
          <Stars
            radius={300}
            depth={20}
            count={5000}
            factor={7}
            saturation={0}
            fade
          />
        </Canvas>
      </Suspense>
    </CanvasWrapper>
  );
}

export default AnimationContainer;
