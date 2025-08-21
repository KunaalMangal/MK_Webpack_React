import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className='row justify-content-center align-items-center min-vh-75'>
      <div className='col-12 text-center'>
        <div className='error-content'>
          <h1 className='display-1 text-danger fw-bold mb-3'>404</h1>
          <h2 className='h3 text-dark mb-3'>Page Not Found</h2>
          <p className='lead text-muted mb-4'>
            The page you're looking for doesn't exist.
          </p>
          <Link to='/' className='btn btn-primary btn-lg'>
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
