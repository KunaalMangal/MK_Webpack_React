import React from 'react';

import { Card, Badge } from '../../components';

const Author: React.FC = () => {
  return (
    <article className='row justify-content-center'>
      <div className='col-lg-8 col-md-10 col-sm-12'>
        <header className='text-center mb-5'>
          <h1 className='display-4 text-primary'>
            <i className='fas fa-user-circle me-3'></i>
            About the Author
          </h1>
          <p className='lead mb-2'>
            <strong>KUNAAL MANGAL</strong> — Software Developer (5 Years
            Experience)
          </p>
          <div className='mb-3'>
            <a
              href='https://github.com/KunaalMangal'
              target='_blank'
              rel='noopener noreferrer'
              className='me-3'
              aria-label='GitHub'
            >
              <i className='fab fa-github fa-lg'></i>
            </a>
            <a
              href='https://www.linkedin.com/in/kunaalmangal/'
              target='_blank'
              rel='noopener noreferrer'
              className='me-3'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin fa-lg'></i>
            </a>
            <a
              href='https://kunaalmangal.github.io/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Portfolio'
            >
              <i className='fas fa-globe fa-lg'></i>
            </a>
          </div>
        </header>

        <Card title='Professional Summary'>
          <p>
            Versatile developer with expertise in web and mobile technologies,
            specializing in React, React Native, JavaScript, Redux, Firebase,
            Google Maps, Social Sign-in, Deep Linking, GIT, WebPack, Postman,
            REST API Integration, Web Sockets, Android Studio, Xcode, VSCode,
            and more.
          </p>
          <p>
            Passionate about creating innovative solutions and continuously
            improving skills to stay up-to-date with the latest industry trends.
          </p>
        </Card>

        <section className='mt-4' aria-labelledby='skills-heading'>
          <Card>
            <h2 id='skills-heading' className='h4 mb-3'>
              <i className='fas fa-tools me-2'></i>
              Skills &amp; Technologies
            </h2>
            <div className='mb-2'>
              <Badge variant='primary' className='me-2 mb-2'>
                <i className='fab fa-react me-1'></i>React.js
              </Badge>
              <Badge variant='success' className='me-2 mb-2'>
                <i className='fab fa-react me-1'></i>React Native
              </Badge>
              <Badge variant='info' className='me-2 mb-2'>
                <i className='fab fa-js-square me-1'></i>JavaScript
              </Badge>
              <Badge variant='secondary' className='me-2 mb-2'>
                <i className='fas fa-database me-1'></i>Redux
              </Badge>
              <Badge variant='warning' className='me-2 mb-2'>
                <i className='fas fa-fire me-1'></i>Firebase
              </Badge>
              <Badge variant='dark' className='me-2 mb-2'>
                <i className='fas fa-map-marker-alt me-1'></i>Google Maps
              </Badge>
              <Badge variant='primary' className='me-2 mb-2'>
                <i className='fas fa-sign-in-alt me-1'></i>Social Sign-in
              </Badge>
              <Badge variant='info' className='me-2 mb-2'>
                <i className='fas fa-link me-1'></i>Deep Linking
              </Badge>
              <Badge variant='secondary' className='me-2 mb-2'>
                <i className='fab fa-git-alt me-1'></i>GIT
              </Badge>
              <Badge variant='dark' className='me-2 mb-2'>
                <i className='fab fa-gitlab me-1'></i>GitLab
              </Badge>
              <Badge variant='dark' className='me-2 mb-2'>
                <i className='fab fa-bitbucket me-1'></i>BitBucket
              </Badge>
              <Badge variant='info' className='me-2 mb-2'>
                <i className='fas fa-cubes me-1'></i>WebPack
              </Badge>
              <Badge variant='success' className='me-2 mb-2'>
                <i className='fas fa-vial me-1'></i>Postman
              </Badge>
              <Badge variant='primary' className='me-2 mb-2'>
                <i className='fas fa-plug me-1'></i>REST API
              </Badge>
              <Badge variant='info' className='me-2 mb-2'>
                <i className='fas fa-exchange-alt me-1'></i>Web Sockets
              </Badge>
              <Badge variant='secondary' className='me-2 mb-2'>
                <i className='fab fa-android me-1'></i>Android Studio
              </Badge>
              <Badge variant='secondary' className='me-2 mb-2'>
                <i className='fab fa-apple me-1'></i>Xcode
              </Badge>
              <Badge variant='dark' className='me-2 mb-2'>
                <i className='fas fa-code me-1'></i>VSCode
              </Badge>
            </div>
          </Card>
        </section>

        <section className='mt-4' aria-labelledby='fellowship-heading'>
          <Card>
            <h2 id='fellowship-heading' className='h4 mb-3'>
              <i className='fas fa-award me-2'></i>
              XROS Fellowship 2023 (Sponsored by Meta)
            </h2>
            <ul>
              <li>
                Selected among 100 developers for the prestigious fellowship
              </li>
              <li>Industry mentorship from XR technology experts</li>
              <li>Open source contributions to XR-related projects</li>
              <li>Digital public goods development for the community</li>
              <li>
                Career facilitation in AR, VR, MR, and 3D Modeling organizations
              </li>
            </ul>
          </Card>
        </section>

        <section className='mt-4' aria-labelledby='about-heading'>
          <Card>
            <h2 id='about-heading' className='h4 mb-3'>
              <i className='fas fa-user me-2'></i>
              About
            </h2>
            <p>
              As a versatile developer, I possess a wide range of skills and
              expertise in web and mobile technologies. In the realm of web
              development, I am proficient in HTML, CSS, and JavaScript,
              allowing me to create visually appealing and interactive websites.
              Furthermore, my experience with platforms such as WordPress,
              React.js enables me to build dynamic and feature-rich web
              applications.
            </p>
            <p>
              In the mobile app development arena, I am skilled in React Native,
              NativeScript, which empowers me to create cross-platform mobile
              applications with seamless performance and intuitive user
              interfaces. With these technologies, I can efficiently develop
              apps that run smoothly on both iOS and Android platforms.
            </p>
            <p>
              In terms of software proficiency, I have hands-on experience with
              essential tools such as Xcode, Android Studio, and Visual Studio
              Code. These tools provide me with the necessary capabilities to
              develop, debug, and optimize applications for specific platforms.
            </p>
            <p>
              Additionally, I am well-versed in versioning tools like Git,
              Github, and Bitbucket, which enable me to effectively manage and
              collaborate on code repositories. By utilizing these tools, I can
              ensure smooth code integration, version control, and collaboration
              with other developers.
            </p>
            <p>
              With my diverse skill set and expertise in web and mobile
              technologies, I am well-prepared to take on complex projects and
              deliver high-quality results. I am passionate about creating
              innovative solutions and continuously improving my skills to stay
              up-to-date with the latest industry trends.
            </p>
          </Card>
        </section>
      </div>
    </article>
  );
};

export default Author;
