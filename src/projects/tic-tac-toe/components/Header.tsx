import React, { useState } from 'react';

type resetBoard = () => void;
interface IHeaderProps {
  alertType: string;
  data: any;
  resetBoard: resetBoard;
}

export default function Header({ alertType, data, resetBoard }: IHeaderProps) {
  const [timer, setTimer] = useState<NodeJS.Timeout | undefined>(undefined);
  const [progInterval, setProgInterval] = useState<NodeJS.Timeout | undefined>(undefined);
  const [progress, setProgress] = useState(0);

  const buttonStyle = {
    background: timer
      ? `linear-gradient(to right, #3498db 0%, #3498db ${progress}%, #FFFFFF ${progress}%, #FFFFFF 100%)`
      : 'white',
    color: timer ? '#a0a0a0' : '',
  };

  const startProgress = () => {
    console.log('reset pressed');
    const currTimer = setTimeout(() => {
      resetBoard();
    }, 1000);
    progInt();
    setTimer(currTimer);
  };
  const stopProgress = () => {
    console.log('reset lifted');
    // console.log(progress);
    clearTimeout(timer);
    clearInterval(progInterval);
    setTimer(undefined);
    setProgress(0);
  };

  const progInt = () => {
    let prog = 0;
    const currProgInterval = setInterval(() => {
      if (prog <= 100) {
        prog += 1;
        returnProg(prog);
      } else {
        clearInterval(currProgInterval);
      }
    }, 10);
    setProgInterval(currProgInterval);
  };

  const returnProg = (prog: number) => {
    setProgress(prog);
    return progress;
  };

  return (
    <>
      <header className="text-center flex flex-col justify-center items-center">
        <button
          style={buttonStyle}
          className="reset text-blue-500 text-xl bg-white no-underline cursor-pointer hover:text-blue-800 hover:bg-blue-500 transition-all"
          onPointerDown={(e) => startProgress()}
          onPointerUp={(e) => stopProgress()}
        >
          {' '}
          Reset Game
        </button>
      </header>
    </>
  );
}
