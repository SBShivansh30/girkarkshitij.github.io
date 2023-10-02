import React from 'react';
import data from '../../../data';

const Contact = () => {
  const { socialLinks } = data;

  return (
    <div
      id='contact'
      className='text-light text-center bg-dark px-4 pt-8 pb-8 md:px-32 md:pt-20 md:pb-16'
    >
      <h1 className='text-3xl text-light pb-24'>Get in Touch</h1>
      <h3 className='text-lg md:text-xl text-medium2 pb-8'>
        Want to discuss something or just want to say hi?
        <br /> My inbox is open for all
      </h3>
      <h3 className='text-xl text-light2 pb-8'>shivanshbansal30@gmail.com</h3>
      <ul className='pb-16'>
        {socialLinks.map((link) => {
          return (
            <li className='inline p-8 hover:text-light2' key={link.name}>
              <a href={link.url} target='_blank' rel='noreferrer'>
                <i className={link.className}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <a
        href='https://github.com/SBShivansh30'
        target='_blank'
        rel='noreferrer'
      >
        <h5 className='pt-32'>
          Built by
          <span translate='no' className='text-light2'>
            {' '}
            Shivansh Bansal
          </span>
        </h5>
      </a>
    </div>
  );
};

export default Contact;
