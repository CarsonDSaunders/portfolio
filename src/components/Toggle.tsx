import { ReactComponent as Dark } from 'assets/moon.svg';
import { ReactComponent as Light } from 'assets/sun.svg';

interface ToggleProps {
  onClick: () => void;
  theme: string;
}

function Toggle({ onClick, theme }: ToggleProps) {
  return (
    <button
      className="bg-none border-none absolute top-3 right-3 text-gray-600 dark:text-gray-400"
      onClick={onClick}
    >
      {theme === 'dark' ? <Dark height={25} width={25} /> : <Light height={25} width={25} />}
    </button>
  );
}

export default Toggle;
