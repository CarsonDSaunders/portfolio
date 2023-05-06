/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useEffect } from 'react';
import Square from './components/Square';
import Info from './components/Info';
import Header from './components/Header';
import Alert from './components/Alert';
import Settings from './components/Settings';
import './App.css';

export default function TicTacToe() {
  const [currentTurn, setCurrentTurn] = useState(1);
  const [alert, setAlert] = useState('');
  const [gameState, setGameState] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [winCombo, setWinCombo] = useState([]);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [p1Name, setP1Name] = useState('Exs');
  const [p2Name, setP2Name] = useState('Hoes');
  const [autoReset, setAutoReset] = useState(true);
  const [settings, setSettings] = useState({
    winCount1: 0,
    winCount2: 0,
    p1Name: 'Exs',
    p2Name: 'Hoes',
    autoReset: true,
  });

  useEffect(() => {
    if (typeof window.localStorage.getItem('settings') === 'string') {
      setSettings(JSON.parse(window.localStorage.getItem('settings')));
    } else {
      window.localStorage.setItem('settings', JSON.stringify(settings));
    }
  }, []);

  const resetBoard = () => {
    handleAlert('reset');
    setGameState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    setWinCombo([]);
    setCurrentTurn(1);
  };

  const handleGameEnd = (winner: string) => {
    if (winner === 'C') {
      handleAlert('cat');
    } else {
      handleAlert('win');
      if (window.localStorage.getItem(`winCount${currentTurn}`)) {
        window.localStorage.setItem(
          `winCount${currentTurn}`,
          String(window.localStorage.getItem(`winCount${currentTurn}`) + 1)
        );
      }
    }

    if (settings.autoReset === true) {
      setTimeout(() => {
        resetBoard();
      });
    }

    return;
  };

  const editBoard = (i) => {
    if (winCombo.length === 0) {
      let endGame = false;
      if (gameState[i] !== 0) {
        handleAlert('invalid');
        return false;
      }
      const newGameState = [...gameState];
      newGameState[i] = currentTurn;
      setGameState(newGameState);
      endGame = checkForEnd(newGameState);
      if (endGame) {
        handleGameEnd(currentTurn);
      } else {
        setCurrentTurn(currentTurn === 1 ? 2 : 1);
      }
    }
    return;
  };

  const takeTurn = (position: number) => {
    console.log(position);
    let validMove = true;
    if (currentTurn === 1) {
      validMove = editBoard(position);
      if (validMove) {
        setCurrentTurn(2);
      }
    } else if (currentTurn === 2) {
      validMove = editBoard(position);
      if (validMove) {
        setCurrentTurn(1);
      }
    }
  };

  const checkForEnd = (board: any[]) => {
    if (!board.includes(0)) {
      handleGameEnd('C');
      return false;
    } else {
      const wins = [
        [0, 1, 2],
        [1, 4, 7],
        [2, 5, 8],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
      ];
      for (let i = 0; i < wins.length; i++) {
        const [a, b, c] = wins[i];
        if (board[a] && board[a] === board[b] && board[b] === board[c]) {
          setWinCombo(wins[i]);
          return true;
        }
      }
    }
    return false;
  };

  const handleAlert = (alert: string) => {
    setAlert(alert);
    setTimeout(() => {
      setAlert('');
    }, 3000);

    return;
  };
  const handleClickGear = () => {
    setSettingsOpen(!settingsOpen);
    return;
  };

  const saveSettingsChanges = (p1: string, p2: string, ar: boolean) => {
    setSettings({ ...settings, p1Name: p1, p2Name: p2, autoReset: ar });
    window.localStorage.setItem('settings', JSON.stringify(settings));
    setSettingsOpen(!settingsOpen);
    handleAlert('save');
  };

  const handleResetScore = () => {
    setSettingsOpen(false);
    resetBoard();
    return;
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {alert !== '' && <Alert alertType={alert} data={[currentTurn]} />}
      <span
        className={`settings-button ${settingsOpen ? 'open' : ''}`}
        onClick={() => handleClickGear()}
      >
        &#9881;
      </span>
      {settingsOpen ? (
        <Settings
          p1Name={settings.p1Name}
          p2Name={settings.p2Name}
          autoReset={settings.autoReset}
          saveSettingsChanges={saveSettingsChanges}
          resetScore={handleResetScore}
        />
      ) : (
        <></>
      )}
      <Header resetBoard={resetBoard} />
      <div className="board grid">
        <Square position={0} squareStatus={gameState} takeTurn={takeTurn} winCombo={winCombo} />
        <Square position={1} squareStatus={gameState} takeTurn={takeTurn} winCombo={winCombo} />
        <Square position={2} squareStatus={gameState} takeTurn={takeTurn} winCombo={winCombo} />
        <Square position={3} squareStatus={gameState} takeTurn={takeTurn} winCombo={winCombo} />
        <Square position={4} squareStatus={gameState} takeTurn={takeTurn} winCombo={winCombo} />
        <Square position={5} squareStatus={gameState} takeTurn={takeTurn} winCombo={winCombo} />
        <Square position={6} squareStatus={gameState} takeTurn={takeTurn} winCombo={winCombo} />
        <Square position={7} squareStatus={gameState} takeTurn={takeTurn} winCombo={winCombo} />
        <Square position={8} squareStatus={gameState} takeTurn={takeTurn} winCombo={winCombo} />
      </div>
      <Info p1Name={settings.p1Name} p2Name={settings.p2Name} currentTurn={currentTurn} />
    </div>
  );
}
