import React, { useState, useEffect } from 'react';
import { useThree } from 'react-three-fiber';
import { Sphere } from '@react-three/drei';
import { useFrame } from 'react-three-fiber';
import { changeColor } from '../utils/colorChange';

const Target = ({ position, id }) => {
  const [color, setColor] = useState('blue');
  const { scene } = useThree();

  useEffect(() => {
    scene.getObjectById(id).material.color.set(color);
  }, [color, scene, id]);

  useFrame(({ mouse }) => {
    const intersect = scene.getObjectById(id).raycast(mouse);
    if (intersect) {
      setColor(changeColor());
    }
  });

  return (
    <Sphere args={[1, 32, 32]} position={position}>
      <meshStandardMaterial attach="material" color={color} />
    </Sphere>
  );
};

export default Target;