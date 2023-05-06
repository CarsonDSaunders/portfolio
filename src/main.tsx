import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import 'tailwindcss/tailwind.css';
import './index.css';

import About from './routes/about';
import Contact from './routes/contact';
import ErrorPage from './routes/error';
import Home from './routes/home';
import Projects from './routes/projects';
import Blog from './routes/blog';
import Root from './routes/root';
import Dev from './routes/dev';
import TicTacToe from './projects/tic-tac-toe/TicTacToe';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route index path="projects" element={<Projects />} />
      <Route path="projects/tic-tac-toe" element={<TicTacToe />} />
      <Route path="blog" element={<Blog />}>
        <Route path=":slug" element={<Blog />} />
      </Route>
      <Route path="contact" element={<Contact />} />
      <Route path="dev" element={<Dev />} />
    </Route>
  )
);

const container = document.getElementById('root');
if (container) {
  container.dataset.testid = 'root';
}
console.log(router);
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
