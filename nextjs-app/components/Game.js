import React, { useState, useEffect } from 'react';
import { Canvas } from 'react-three-fiber';
import { useDetectDevice } from 'react-device-detect';

import Player from './Player';
import Target from './Target';
import Obstacle from './Obstacle';
import Controls from './Controls';
import Score from './Score';

import { initGame, endGame } from '../utils/game';
import { handleDesktopControls, handleMobileControls } from '../utils/controls';

const Game = () => {
  const [playerState, setPlayerState] = useState(initGame());
  const [targetState, setTargetState] = useState([]);
  const [obstacleState, setObstacleState] = useState([]);
  const isMobile = useDetectDevice();

  useEffect(() => {
    const gameInterval = setInterval(() => {
      if (playerState.gameOver) {
        clearInterval(gameInterval);
        endGame();
      } else {
        const newPlayerState = isMobile ? handleMobileControls(playerState) : handleDesktopControls(playerState);
        setPlayerState(newPlayerState);
      }
    }, 100);

    return () => clearInterval(gameInterval);
  }, [playerState, isMobile]);

  return (
    <div id="gameCanvas">
      <Canvas>
        <Player playerState={playerState} />
        {targetState.map((target, index) => (
          <Target key={index} targetState={target} />
        ))}
        {obstacleState.map((obstacle, index) => (
          <Obstacle key={index} obstacleState={obstacle} />
        ))}
        <Controls playerState={playerState} setPlayerState={setPlayerState} />
      </Canvas>
      <Score playerState={playerState} />
    </div>
  );
};

export default Game;