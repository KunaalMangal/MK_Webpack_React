import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Layout from '../layouts/Layout';
import { Home, About, Contact, NotFound, Author } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'author',
        element: <Author />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
