import React from 'react';

import { Card, AuthorInfo } from '../../components';
import { getAuthorData, getAuthorProject } from '../../utils/authorData';

const Home: React.FC = () => {
  const author = getAuthorData();
  const project = getAuthorProject();

  const features = [
    {
      icon: 'fab fa-react',
      title: 'React 19',
      description: 'Latest React with modern features',
      iconLabel: 'React logo',
    },
    {
      icon: 'fas fa-box',
      title: 'Webpack 5',
      description: 'Modern bundling and optimization',
      iconLabel: 'Package box',
    },
    {
      icon: 'fab fa-js-square',
      title: 'TypeScript',
      description: 'Type-safe development',
      iconLabel: 'TypeScript logo',
    },
    {
      icon: 'fas fa-palette',
      title: 'SCSS',
      description: 'Advanced styling with SASS',
      iconLabel: 'Color palette',
    },
  ];

  return (
    <article className='text-center'>
      <header>
        <h1 className='display-4 mb-4 text-primary'>
          <i className='fas fa-rocket me-3'></i>
          Welcome to {project.name}
        </h1>
        <p className='lead mb-5'>
          {project.description}
          <br />
          <small className='text-muted'>
            Created by <strong>{author.name}</strong>
          </small>
        </p>
      </header>

      <section aria-labelledby='features-heading'>
        <div className='row justify-content-center'>
          <div className='col-12'>
            <h2 id='features-heading' className='h3 mb-4'>
              <i className='fas fa-star me-2'></i>
              Features
            </h2>
          </div>
          {features.map((feature, index) => (
            <div key={index} className='col-lg-3 col-md-6 col-sm-12 mb-4'>
              <Card
                hoverable
                className='h-100'
                aria-label={`Feature: ${feature.title}`}
              >
                <div className='text-center'>
                  <h3 className='card-title h5'>
                    <i
                      className={`${feature.icon} fa-2x text-primary mb-3`}
                      aria-label={feature.iconLabel}
                    ></i>
                    <br />
                    {feature.title}
                  </h3>
                  <p className='card-text'>{feature.description}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby='author-heading' className='mt-5'>
        <div className='row justify-content-center'>
          <div className='col-lg-8 col-md-10 col-sm-12'>
            <h2 id='author-heading' className='h3 mb-4 text-center'>
              <i className='fas fa-user-circle me-2'></i>
              Project Creator
            </h2>
            <AuthorInfo />
          </div>
        </div>
      </section>
    </article>
  );
};

export default Home;
