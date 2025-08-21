import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Footer } from '../components';

const Layout: React.FC = () => {
  return (
    <div className='min-vh-100 d-flex flex-column'>
      <Header />

      <main
        id='main-content'
        className='flex-grow-1 py-4'
        role='main'
        tabIndex={-1}
      >
        <div className='container'>
          <Outlet />
        </div>
      </main>

      <Footer />
      <div
        className='bg-light text-center py-2 border-top small'
        aria-label='Author Information'
      >
        <span>
          <strong>Author:</strong> <a href='/author'>KUNAAL MANGAL</a> &mdash;
          Software Developer |
          <a
            href='https://www.linkedin.com/in/kunaalmangal/'
            target='_blank'
            rel='noopener noreferrer'
            className='ms-1'
          >
            LinkedIn
          </a>{' '}
          |
          <a
            href='https://kunaalmangal.github.io/'
            target='_blank'
            rel='noopener noreferrer'
            className='ms-1'
          >
            Portfolio
          </a>
        </span>
      </div>
    </div>
  );
};

export default Layout;
