/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from 'react-router-dom';
import 'styles/active.css';

export function Header() {
  return (
    <header className="text-gray-600 body-font dark:text-gray-400 ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl dark:text-white">Carson Saunders Dev</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900 dark:hover:text-white cursor-pointer">
            <NavLink to="/">Home</NavLink>
          </a>
          <a className="mr-5 hover:text-gray-900 dark:hover:text-white cursor-pointer">
            <NavLink to="/about">About Me</NavLink>
          </a>
          <a className="mr-5 hover:text-gray-900 dark:hover:text-white cursor-pointer">
            <NavLink to="/projects">Projects</NavLink>
          </a>
        </nav>
        <a className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer">
          <NavLink to="/contact">Contact Me</NavLink>
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </header>
  );
}
