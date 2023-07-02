import { Vector3 } from 'three';
import { checkCollision } from './collisionDetection';
import { changeColor } from './colorChange';
import { updateScore } from './score';

export function shoot(playerState, targetState, obstacleState) {
  const shotDirection = new Vector3(0, 0, -1);
  shotDirection.applyQuaternion(playerState.quaternion);

  const shot = {
    position: playerState.position.clone(),
    direction: shotDirection,
  };

  const hitTarget = checkCollision(shot, targetState, obstacleState);

  if (hitTarget) {
    changeColor(hitTarget);
    updateScore(playerState);
  }
}