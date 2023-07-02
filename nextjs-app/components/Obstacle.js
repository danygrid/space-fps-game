import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

const Obstacle = ({ position }) => {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01));

  return (
    <mesh position={position} ref={ref}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="grey" />
    </mesh>
  );
};

export default Obstacle;