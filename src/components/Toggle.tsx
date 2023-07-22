import { ReactComponent as Dark } from 'assets/moon.svg';
import { ReactComponent as Light } from 'assets/sun.svg';

interface ToggleProps {
  onClick: () => void;
  theme: string;
}

function Toggle({ onClick, theme }: ToggleProps) {
  return (
    <button
      className="bg-none border-none absolute top-3 right-3 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
      onClick={onClick}
      data-testid="toggle"
      data-theme={theme}
    >
      {theme === 'dark' ? <Dark height={25} width={25} /> : <Light height={25} width={25} />}
    </button>
  );
}

export default Toggle;
