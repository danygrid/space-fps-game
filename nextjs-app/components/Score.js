import React from 'react';

const Score = ({ playerState }) => {
  return (
    <div id="scoreDisplay">
      Score: {playerState.score}
    </div>
  );
};

export default Score;