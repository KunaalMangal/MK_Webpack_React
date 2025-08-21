import React from 'react';
import { Link } from 'react-router-dom';

import {
  getAuthorData,
  getAuthorSocial,
  getAuthorProject,
  getAuthorCommunityLinks,
} from '../../utils/authorData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const author = getAuthorData();
  const social = getAuthorSocial();
  const project = getAuthorProject();
  const communityLinks = getAuthorCommunityLinks();

  return (
    <footer className='bg-dark text-light py-4 mt-auto' role='contentinfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5 col-md-6 mb-4 mb-md-0'>
            <h5>{project.name}</h5>
            <p className='mb-3'>
              {project.description} Created by <strong>{author.name}</strong>.
            </p>
            <div className='d-flex gap-3'>
              <a
                href={social.github.url}
                className='text-light text-decoration-none'
                aria-label={`Visit ${author.name}'s GitHub profile`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-github fs-5'></i>
              </a>
              <a
                href={social.linkedin.url}
                className='text-light text-decoration-none'
                aria-label={`Connect with ${author.name} on LinkedIn`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-linkedin fs-5'></i>
              </a>
              <a
                href={social.portfolio.url}
                className='text-light text-decoration-none'
                aria-label={`Visit ${author.name}'s portfolio`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fas fa-globe fs-5'></i>
              </a>
            </div>
          </div>

          <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
            <h6 className='mb-3'>Quick Links</h6>
            <ul className='list-unstyled'>
              <li className='mb-2'>
                <Link to='/' className='text-light text-decoration-none'>
                  <i className='fas fa-home me-2'></i>
                  Home
                </Link>
              </li>
              <li className='mb-2'>
                <Link to='/about' className='text-light text-decoration-none'>
                  <i className='fas fa-info-circle me-2'></i>
                  About
                </Link>
              </li>
              <li className='mb-2'>
                <Link to='/author' className='text-light text-decoration-none'>
                  <i className='fas fa-user-circle me-2'></i>
                  Author
                </Link>
              </li>
              <li className='mb-2'>
                <Link to='/contact' className='text-light text-decoration-none'>
                  <i className='fas fa-envelope me-2'></i>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className='col-lg-4 col-md-6 mb-4 mb-md-0'>
            <h6 className='mb-3'>Community Links</h6>
            <ul className='list-unstyled'>
              <li className='mb-2'>
                <a
                  href={communityLinks.react.url}
                  className='text-light text-decoration-none'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`Visit ${communityLinks.react.name} official website`}
                >
                  <i className={`${communityLinks.react.icon} me-2`}></i>
                  {communityLinks.react.name}
                </a>
              </li>
              <li className='mb-2'>
                <a
                  href={communityLinks.webpack.url}
                  className='text-light text-decoration-none'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`Visit ${communityLinks.webpack.name} official website`}
                >
                  <i className={`${communityLinks.webpack.icon} me-2`}></i>
                  {communityLinks.webpack.name}
                </a>
              </li>
              <li className='mb-2'>
                <a
                  href={social.github.url}
                  className='text-light text-decoration-none'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`Visit ${author.name}'s GitHub profile`}
                >
                  <i className='fab fa-github me-2'></i>
                  {author.name}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className='my-4 border-secondary' />

        <div className='row align-items-center'>
          <div className='col-lg-6 col-md-12 text-center text-lg-start mb-2 mb-lg-0'>
            <p className='mb-0'>
              <i className='fas fa-copyright me-1'></i>
              {currentYear} {author.name}. {project.license} License.
            </p>
          </div>
          <div className='col-lg-6 col-md-12 text-center text-lg-end'>
            <p className='mb-0'>
              <i className='fas fa-heart text-danger me-1'></i>
              Built with React, TypeScript & Webpack
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
