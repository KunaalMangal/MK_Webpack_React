import React from 'react';

import { Card, Badge } from '../../components';
import { getAuthorData, getAuthorProject } from '../../utils/authorData';

const About: React.FC = () => {
  const author = getAuthorData();
  const project = getAuthorProject();

  const technologies = [
    { name: 'React', variant: 'primary' as const, icon: 'fab fa-react' },
    {
      name: 'TypeScript',
      variant: 'success' as const,
      icon: 'fab fa-js-square',
    },
    { name: 'Webpack', variant: 'info' as const, icon: 'fas fa-box' },
    { name: 'SCSS', variant: 'warning' as const, icon: 'fas fa-palette' },
    { name: 'Router', variant: 'secondary' as const, icon: 'fas fa-route' },
  ];

  return (
    <div className='row justify-content-center'>
      <div className='col-lg-8 col-md-10 col-sm-12'>
        <div className='text-center mb-5'>
          <h1 className='display-4 text-primary'>
            <i className='fas fa-info-circle me-3'></i>
            About Us
          </h1>
          <p className='lead'>Welcome to our {project.name}!</p>
          <p className='text-muted'>
            This project was created by <strong>{author.name}</strong> as a
            demonstration of modern web development practices.
          </p>
        </div>

        <Card>
          <p className='card-text mb-4'>
            <i className='fas fa-code me-2'></i>
            This is a modern React application built with:
          </p>
          <ul className='list-group list-group-flush'>
            {technologies.map((tech, index) => (
              <li
                key={index}
                className='list-group-item d-flex align-items-center'
              >
                <Badge variant={tech.variant} className='me-3'>
                  <i className={`${tech.icon} me-1`}></i>
                  {tech.name}
                </Badge>
                {tech.name === 'React' && 'React 19 with modern features'}
                {tech.name === 'TypeScript' && 'Type-safe development'}
                {tech.name === 'Webpack' && 'Webpack 5 for bundling'}
                {tech.name === 'SCSS' && 'Advanced styling with SASS'}
                {tech.name === 'Router' && 'React Router for navigation'}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default About;
