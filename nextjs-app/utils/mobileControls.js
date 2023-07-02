import { useEffect } from 'react';
import { useDeviceDetect } from 'react-device-detect';

import { movePlayer, shoot } from './movement';
import { playerState } from '../components/Player';

export const handleMobileControls = () => {
  const { isMobile } = useDeviceDetect();

  useEffect(() => {
    if (isMobile) {
      window.addEventListener('touchstart', handleTouchStart, false);
      window.addEventListener('touchmove', handleTouchMove, false);
    }

    return () => {
      if (isMobile) {
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, [isMobile]);

  let xDown = null;
  let yDown = null;

  const handleTouchStart = (evt) => {
    const firstTouch = evt.touches[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  };

  const handleTouchMove = (evt) => {
    if (!xDown || !yDown) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        movePlayer('left', playerState);
      } else {
        movePlayer('right', playerState);
      }
    } else {
      if (yDiff > 0) {
        shoot(playerState);
      }
    }

    xDown = null;
    yDown = null;
  };
};