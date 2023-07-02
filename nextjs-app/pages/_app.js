import '../public/styles.css'
import { useEffect } from 'react'
import { isMobile } from 'react-device-detect'
import Game from '../components/Game'
import Player from '../components/Player'
import Target from '../components/Target'
import Obstacle from '../components/Obstacle'
import Controls from '../components/Controls'
import Score from '../components/Score'
import { handleDesktopControls, handleMobileControls } from '../utils/movement'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (isMobile) {
      handleMobileControls()
    } else {
      handleDesktopControls()
    }
  }, [])

  return (
    <div id="gameCanvas">
      <Game>
        <Player />
        <Target />
        <Obstacle />
        <Controls />
        <Score />
      </Game>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp