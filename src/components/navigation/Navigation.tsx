import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    setFocusedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsMenuOpen(false);
      buttonRef.current?.focus();
    }
  };

  const handleMenuKeyDown = (e: React.KeyboardEvent, index: number) => {
    const menuItems = menuRef.current?.querySelectorAll('a[role="menuitem"]');
    if (!menuItems) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex((index + 1) % menuItems.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex(index === 0 ? menuItems.length - 1 : index - 1);
        break;
      case 'Home':
        e.preventDefault();
        setFocusedIndex(0);
        break;
      case 'End':
        e.preventDefault();
        setFocusedIndex(menuItems.length - 1);
        break;
    }
  };

  useEffect(() => {
    const menuItems = menuRef.current?.querySelectorAll('a[role="menuitem"]');
    if (menuItems && focusedIndex >= 0 && focusedIndex < menuItems.length) {
      (menuItems[focusedIndex] as HTMLElement).focus();
    }
  }, [focusedIndex]);

  useEffect(() => {
    // Close menu when route changes
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className='navbar navbar-expand-lg navbar-dark bg-dark'
      role='navigation'
      aria-label='Main navigation'
      onKeyDown={handleKeyDown}
    >
      <div className='container'>
        <Link
          className='navbar-brand fw-bold'
          to='/'
          aria-label='MK_Webpack_React - Home'
          tabIndex={0}
        >
          <span role='img' aria-label='react logo' className='me-2'>
            ⚛️
          </span>
          MK_Webpack_React
        </Link>

        <button
          ref={buttonRef}
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded={isMenuOpen}
          aria-label='Toggle navigation menu'
          onClick={handleMenuToggle}
        >
          <span className='navbar-toggler-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>
            {isMenuOpen ? 'Close menu' : 'Open menu'}
          </span>
        </button>

        <div
          ref={menuRef}
          className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
          id='navbarNav'
        >
          <ul
            className='navbar-nav ms-auto'
            role='menubar'
            aria-label='Main menu'
          >
            <li className='nav-item' role='none'>
              <Link
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                to='/'
                role='menuitem'
                aria-current={isActive('/') ? 'page' : undefined}
                tabIndex={0}
                onKeyDown={e => handleMenuKeyDown(e, 0)}
              >
                <i className='fas fa-home me-1' aria-hidden='true'></i>
                Home
              </Link>
            </li>
            <li className='nav-item' role='none'>
              <Link
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                to='/about'
                role='menuitem'
                aria-current={isActive('/about') ? 'page' : undefined}
                tabIndex={0}
                onKeyDown={e => handleMenuKeyDown(e, 1)}
              >
                <i className='fas fa-info-circle me-1' aria-hidden='true'></i>
                About
              </Link>
            </li>
            <li className='nav-item' role='none'>
              <Link
                className={`nav-link ${isActive('/author') ? 'active' : ''}`}
                to='/author'
                role='menuitem'
                aria-current={isActive('/author') ? 'page' : undefined}
                tabIndex={0}
                onKeyDown={e => handleMenuKeyDown(e, 3)}
              >
                <i className='fas fa-user-circle me-1' aria-hidden='true'></i>
                Author
              </Link>
            </li>
            <li className='nav-item' role='none'>
              <Link
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                to='/contact'
                role='menuitem'
                aria-current={isActive('/contact') ? 'page' : undefined}
                tabIndex={0}
                onKeyDown={e => handleMenuKeyDown(e, 2)}
              >
                <i className='fas fa-envelope me-1' aria-hidden='true'></i>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
