/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

interface ISquareProps {
  squareStatus: any;
  winCombo: any;
  takeTurn: (position: number) => void;
  position: any;
}

function Square({ squareStatus, winCombo, takeTurn, position }: ISquareProps) {
  const status = squareStatus[position];
  const displaySquare = () => {
    switch (status) {
      default:
        return <></>;
      case 1:
        return <>X</>;
      case 2:
        return <>O</>;
    }
  };
  return (
    <div
      className={`flex cursor-pointer justify-center items-center text-6xl text-gray-800 dark:text-white border border-solid border-gray-600 dark:border-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all ${
        status !== 0 ? 'used' : ''
      } ${winCombo.length !== 0 ? (winCombo.includes(position) ? 'win' : 'over') : ''}`}
      onClick={() => takeTurn(position)}
    >
      {displaySquare()}
    </div>
  );
}

export default Square;
