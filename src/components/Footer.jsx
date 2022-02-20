import React from 'react';
import '../styles/Footer.css';

export const Footer = () => {
  return (
    <footer class='footer mt-4  '>
      <div className='row'>
        <div className='col'>
          <div className='col'>
            <div className='d-flex'>
              <a
                href='https://github.com/spertusatti/githubactions_codenoobs'
                target='_blank'
                rel='noopener noreferrer'
              >
                👾 Git Repository
              </a>
            </div>
          </div>
          <div className='col'>
            <div className='d-flex'>
              <a
                href='https://react-bootstrap.github.io/layout/grid/'
                target='_blank'
                rel='noopener noreferrer'
              >
                🎨 React bootstrap
              </a>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='d-flex'>
            <a
              href='https://developer.mozilla.org/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox'
              target='_blank'
              rel='noopener noreferrer'
            >
              📋 Css grid flex
            </a>
          </div>
          <div className='d-flex'>
            <a
              href='https://es.reactjs.org/'
              target='_blank'
              rel='noopener noreferrer'
            >
              👁️ Check out React.js
            </a>
          </div>
        </div>
      </div>
      <div className='col text-right'>
        <div className='col'>© SimpleWebApp {new Date().getFullYear()}</div>
      </div>
    </footer>
  );
};