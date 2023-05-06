import React, { useEffect } from 'react';

interface IInfoProps {
  currentTurn: number;
  p1Name: string;
  p2Name: string;
}

function Info({ currentTurn, p1Name, p2Name }: IInfoProps) {
  const winCount1 = Number(window.localStorage.getItem('winCount1'));
  const winCount2 = Number(window.localStorage.getItem('winCount2'));
  const getCurrentTurn = (player: number) => {
    return currentTurn === player ? 'bold' : null;
  };
  return (
    <>
      <div className="info">
        <div className={`player-1`}>
          <div className={`${getCurrentTurn(1)}`}>{p1Name}</div>
          <div className="win-count">{winCount1}</div>
        </div>
        {/* <div className="taskList">
                    <h3>Dev Task List</h3>
                    <ul style={{ fontSize: 14 + "px" }}>
                        <li>Add cool "hold down on reset button" effect</li>
                    </ul>
                </div> */}
        <div className={`player-2`}>
          <div className={`${getCurrentTurn(2)}`}>{p2Name}</div>
          <div className="win-count">{winCount2}</div>
        </div>
      </div>
    </>
  );
}

export default Info;
