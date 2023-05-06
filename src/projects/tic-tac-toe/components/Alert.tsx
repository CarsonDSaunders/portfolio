import React from 'react';

interface IAlertProps {
  alertType: string;
  data: any;
}
export default function Alert({ alertType, data }: IAlertProps) {
  const cT = data[0];

  const alertText = (text: string) => {
    switch (text) {
      case 'win':
        return `${cT === 1 ? "Ex's" : "Hoe's"} have won!`;
      case 'invalid':
        return `Invalid move, dumbass.`;
      case 'reset':
        return `Resetting the game.`;
      case 'cat':
        return `Cat. Meow.`;
      case 'save':
        return `Changes saved.`;
      default:
        return '';
    }
  };

  return (
    <div className={`alert${alertType ? ' inactive' : null} ${alertType}`}>
      <div className="alert-inner">{alertText(alertType)}</div>
    </div>
  );
}
