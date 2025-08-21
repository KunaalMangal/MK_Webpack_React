import React from 'react';

import {
  getAuthorData,
  getAuthorSocial,
  getAuthorProject,
} from '../../utils/authorData';
import { Card, Badge } from '../index';

const AuthorInfo: React.FC = () => {
  const author = getAuthorData();
  const social = getAuthorSocial();
  const project = getAuthorProject();

  return (
    <Card className='author-info-card border-primary'>
      <div className='text-center'>
        <div className='mb-3'>
          <i className='fas fa-user-circle fa-3x text-primary mb-2'></i>
          <h3 className='h4 mb-2'>Created by {author.name}</h3>
          <p className='text-muted mb-3'>
            {author.title} & {author.fellowship.name} (
            {author.fellowship.sponsor})
          </p>
        </div>

        <div className='d-flex justify-content-center gap-2 mb-3'>
          {project.technologies.slice(0, 3).map((tech, index) => (
            <Badge
              key={index}
              variant={
                index === 0 ? 'primary' : index === 1 ? 'info' : 'success'
              }
            >
              <i
                className={`${index === 0 ? 'fab fa-react' : index === 1 ? 'fas fa-cube' : 'fab fa-js-square'} me-1`}
              ></i>
              {tech}
            </Badge>
          ))}
        </div>

        <div className='d-flex justify-content-center gap-3'>
          <a
            href={social.github.url}
            className='btn btn-outline-primary btn-sm'
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`Visit ${author.name}'s GitHub profile`}
          >
            <i className='fab fa-github me-1'></i>
            GitHub
          </a>
          <a
            href={social.linkedin.url}
            className='btn btn-outline-primary btn-sm'
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`Visit ${author.name}'s LinkedIn profile`}
          >
            <i className='fab fa-linkedin me-1'></i>
            LinkedIn
          </a>
          <a
            href='/author'
            className='btn btn-outline-primary btn-sm'
            aria-label='View full author profile'
          >
            <i className='fas fa-user me-1'></i>
            Full Profile
          </a>
        </div>
      </div>
    </Card>
  );
};

export default AuthorInfo;
