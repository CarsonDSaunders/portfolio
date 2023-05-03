/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from 'react-router-dom';
import 'styles/active.css';
import { ReactComponent as NarrowLogo } from 'assets/narrow-logo.svg';
import { ReactComponent as Logo } from 'assets/site-logo.svg';

export function Header() {
  return (
    <header className="text-gray-600 body-font dark:text-gray-400 ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer dark:text-white"
          href="/"
        >
          <Logo height={50} width={300} />
          <span className="ml-3 text-xl dark:text-white"></span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <NavLink
            className="mr-5 hover:text-gray-900 dark:hover:text-white cursor-pointer underline-offset-4"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="mr-5 hover:text-gray-900 dark:hover:text-white cursor-pointer underline-offset-4"
            to="/about"
          >
            About Me
          </NavLink>

          <NavLink
            className="mr-5 hover:text-gray-900 dark:hover:text-white cursor-pointer underline-offset-4"
            to="/projects"
          >
            Projects
          </NavLink>
          <NavLink
            className="mr-5 hover:text-gray-900 dark:hover:text-white cursor-pointer underline-offset-4"
            to="/blog"
          >
            Blog
          </NavLink>
        </nav>
        <span>
          <NavLink
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 cursor-pointer active:no-underline"
            to="/contact"
          >
            Contact Me {'>'}
          </NavLink>
        </span>
      </div>
    </header>
  );
}
