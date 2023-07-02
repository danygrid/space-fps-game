import { Vector3 } from 'three';

export function checkCollision(playerState, targetState, obstacleState) {
  const playerPosition = new Vector3(playerState.x, playerState.y, playerState.z);
  const shotPosition = new Vector3(playerState.shot.x, playerState.shot.y, playerState.shot.z);

  // Check collision with targets
  for (let i = 0; i < targetState.length; i++) {
    const targetPosition = new Vector3(targetState[i].x, targetState[i].y, targetState[i].z);
    if (shotPosition.distanceTo(targetPosition) <= targetState[i].radius) {
      return { type: 'target', index: i };
    }
  }

  // Check collision with obstacles
  for (let i = 0; i < obstacleState.length; i++) {
    const obstaclePosition = new Vector3(obstacleState[i].x, obstacleState[i].y, obstacleState[i].z);
    if (playerPosition.distanceTo(obstaclePosition) <= obstacleState[i].size) {
      return { type: 'obstacle', index: i };
    }
  }

  return null;
}