import React, { useState } from 'react';

interface ISettingsProps {
  p1Name: string;
  p2Name: string;
  autoReset: boolean;
  resetScore: () => void;
  saveSettingsChanges: (p1: string, p2: string, ar: boolean) => void;
}

export default function Settings({
  p1Name,
  p2Name,
  autoReset,
  resetScore,
  saveSettingsChanges,
}: ISettingsProps) {
  const [newP1Name, setNewP1Name] = useState(p1Name);
  const [newP2Name, setNewP2Name] = useState(p2Name);
  const [newAutoReset, setNewAutoReset] = useState(autoReset);

  const resetScoring = () => {
    if (window.confirm('Are you sure you want to reset the scoring history?')) {
      window.localStorage.setItem('winCount1', '0');
      window.localStorage.setItem('winCount2', '0');
    }
    resetScore();
  };

  const handleNameChange = (p: number, val: string) => {
    if (p === 1) {
      setNewP1Name(val);
      return;
    }
    setNewP2Name(val);
    return;
  };
  const handleAutoReset = () => {
    setNewAutoReset(!newAutoReset);
    return;
  };

  const saveChanges = () => {
    saveSettingsChanges(newP1Name, newP2Name, newAutoReset);
    return;
  };

  return (
    <div className="settings">
      <div className="settings-inner">
        <div className="setting">
          <label htmlFor="player1">Rename Player 1</label>
          <input
            id="player1"
            type="text"
            className="rename"
            value={newP1Name}
            onChange={(e) => handleNameChange(1, e.target.value)}
          ></input>
        </div>
        <div className="setting">
          <label htmlFor="player2">Rename Player 2</label>
          <input
            id="player2"
            type="text"
            className="rename"
            value={newP2Name}
            onChange={(e) => handleNameChange(2, e.target.value)}
          ></input>
        </div>
        <div className="setting autoReset">
          <label htmlFor="autoReset">Auto-Reset after each game</label>
          <input
            id="autoReset"
            type="checkbox"
            className="option"
            checked={newAutoReset == true}
            onChange={() => handleAutoReset()}
          ></input>
        </div>

        <div className="setting">
          {' '}
          <button className="reset-score" onClick={() => resetScoring()}>
            Reset Scoring
          </button>
        </div>

        <button
          className="save-changes hover:text-blue-800 hover:bg-blue-500 transition-all"
          onClick={() => saveChanges()}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
