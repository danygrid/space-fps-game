import React, { useState, useEffect } from 'react';
import { useThree } from 'react-three-fiber';
import { useKeyboardControls } from '../utils/movement';
import { FPVControls } from './Controls';

const SPEED = 6;

export function Player({ position }) {
  const { forward, backward, left, right, jump } = useKeyboardControls();
  const { camera } = useThree();
  const [velocity, setVelocity] = useState([0, 0, 0]);
  const [falling, setFalling] = useState(false);

  useEffect(() => {
    camera.position.y = 2;
  }, [camera.position]);

  useEffect(() => {
    setVelocity([
      forward ? SPEED : backward ? -SPEED : 0,
      jump && !falling ? SPEED * 2 : -SPEED,
      left ? -SPEED : right ? SPEED : 0,
    ]);
  }, [forward, backward, left, right, jump, falling]);

  return (
    <FPVControls velocity={velocity} position={position} />
  );
}