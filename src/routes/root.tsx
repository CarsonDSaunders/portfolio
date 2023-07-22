import { Footer } from 'sections/Footer';
import { Header } from 'sections/Header';

import Toggle from 'components/Toggle';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

function Root() {
  const root = document.querySelector('#root');
  const [theme, setTheme] = useState(localStorage.theme || 'light');

  useEffect(() => {
    if (root) {
      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        root.classList.add('dark');
        setTheme('dark');
      } else {
        root.classList.remove('dark');
        setTheme('light');
      }
    }
  }, [root]);

  const changeTheme = () => {
    if (root) {
      if (localStorage.theme === 'light') {
        localStorage.theme = 'dark';
        setTheme('dark');
        root.classList.add('dark');
      } else {
        localStorage.theme = 'light';
        setTheme('light');
        root.classList.remove('dark');
      }
    }
  };

  return (
    <div
      id="page-container"
      className="App relative min-h-full sm:min-h-screen dark:bg-gray-900 dark:text-gray-400 transition-colors flex flex-col"
    >
      <Toggle onClick={() => changeTheme()} theme={theme} />
      <Header />
      <main className="pb-[100px]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Root;
