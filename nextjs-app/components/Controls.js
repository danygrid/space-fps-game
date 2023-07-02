import React, { useEffect } from 'react';
import { useDeviceDetect } from 'react-device-detect';

import { handleDesktopControls, handleMobileControls } from '../utils/movement';

const Controls = ({ playerState, setPlayerState }) => {
  const { isMobile } = useDeviceDetect();

  useEffect(() => {
    const handleControls = isMobile ? handleMobileControls : handleDesktopControls;
    window.addEventListener('keydown', (event) => handleControls(event, playerState, setPlayerState));

    return () => {
      window.removeEventListener('keydown', (event) => handleControls(event, playerState, setPlayerState));
    };
  }, [playerState, setPlayerState, isMobile]);

  return null;
};

export default Controls;