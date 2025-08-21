import React from 'react';

import Navigation from '../navigation/Navigation';

const Header: React.FC = () => {
  return (
    <header role='banner' className='bg-white shadow-sm'>
      <Navigation />
    </header>
  );
};

export default Header;
