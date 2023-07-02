import React from 'react';
import Head from 'next/head';
import Game from '../components/Game';
import Controls from '../components/Controls';
import Score from '../components/Score';

const Home = () => {
  return (
    <div>
      <Head>
        <title>3D Target Shooter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Game />
        <Controls />
        <Score />
      </main>

      <footer>
        <p>Created with Next.js and Three.js</p>
      </footer>
    </div>
  );
};

export default Home;