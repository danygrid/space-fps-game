const movePlayer = (direction, playerState) => {
  switch (direction) {
    case 'forward':
      playerState.position.z -= 1;
      break;
    case 'backward':
      playerState.position.z += 1;
      break;
    case 'left':
      playerState.position.x -= 1;
      break;
    case 'right':
      playerState.position.x += 1;
      break;
    case 'up':
      playerState.position.y += 1;
      break;
    case 'down':
      playerState.position.y -= 1;
      break;
    default:
      break;
  }
  return playerState;
};

export default movePlayer;