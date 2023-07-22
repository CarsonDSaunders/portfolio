import React, { useState } from 'react';

type resetBoard = () => void;
interface IHeaderProps {
  resetBoard: resetBoard;
}

export default function Header({ resetBoard }: IHeaderProps) {
  const [timer, setTimer] = useState<NodeJS.Timeout | undefined>(undefined);
  const [progInterval, setProgInterval] = useState<NodeJS.Timeout | undefined>(undefined);
  const [progress, setProgress] = useState(0);

  return (
    <>
      <div className="text-center flex flex-col justify-center items-center mt-10">
        <h2 className="text-4xl mt-5 sm:mt-2 sm:text-6xl text-gray-800 dark:text-white bold mb-4">
          Rando-Tac-Toe
        </h2>
        <button className=" bg-red-500 hover:bg-red-700  py-1 px-2 rounded text-white text-xl  no-underline cursor-pointer transition-all">
          Reset Game
        </button>
      </div>
    </>
  );
}
