import { Header } from 'components/Header';
import useLocalStorage from 'use-local-storage';
import Toggle from 'components/Toggle';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const changeTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };
  return (
    <div className="App" data-theme={theme}>
      <Header />
      <Toggle onClick={() => changeTheme()} state={theme} />
    </div>
  );
}

export default App;
