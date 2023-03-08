import { ReactComponent as Dark } from 'assets/moon.svg';
import { ReactComponent as Light } from 'assets/sun.svg';

interface ToggleProps {
  onClick: () => void;
  state: string;
}

function Toggle({ onClick, state }: ToggleProps) {
  return (
    <button className="bg-none border-none fixed top-3 right-3" onClick={onClick}>
      {state === 'dark' ? <Dark height={25} width={25} /> : <Light height={25} width={25} />}
    </button>
  );
}

export default Toggle;
