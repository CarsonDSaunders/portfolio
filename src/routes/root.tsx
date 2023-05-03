import { Footer } from 'sections/Footer';
import { Header } from 'sections/Header';

import Toggle from 'components/Toggle';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

function Root() {
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });

  const changeTheme = () => {
    if (localStorage.theme === 'light') {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
    } else {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="App relative min-h-screen dark:bg-gray-800 dark:text-gray-400 transition-colors">
      <Header />
      <Toggle onClick={() => changeTheme()} theme={localStorage.theme} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
