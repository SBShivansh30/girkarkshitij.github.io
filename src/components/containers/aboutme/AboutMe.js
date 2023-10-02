import React from 'react';
import data from '../../../data';
import SkillItem from './SkillItem';

const AboutMe = () => {
  const { skills } = data;

  return (
    <div
      id='about'
      className='text-light bg-dark md: md:px-32 md:pb-32 md:pt-28'
    >
      <div className='md:flex md:divide-x md:divide-light2'>
        <h1 className='text-3xl h-2/4 text-light text-center pt-20 md:pr-8'>
          About Me
        </h1>
        <div className='p-8 text-base md:text-xl text-medium2'>
          <p className='pb-4'>
            I am Shivansh Bansal, currently pursuing my Bachelor's in Mechanical Engineering at the prestigious Indian Institute of Technology Bombay (IIT Bombay). I have consistently excelled academically, securing a Cumulative Performance Index (CPI) of 8.7 out of 10.
          </p>
          <p className='pb-4'>
            My journey in the world of trading and finance has been truly remarkable. I have a keen interest in trading and have honed my skills through extensive learning and hands-on experience. I have successfully completed five internships, including a full-time role at Barclays Investment Bank. During my time at Barclays, I played a crucial role as a Trading Analyst, where I was responsible for fully automating the post-trade performance and invoicing analysis of various exchange-traded products. This involved utilizing my expertise in Python, Pyspark, SQL, and KDB+.
          </p>
          <p className='pb-4'>
            I have hands-on experience in algorithmic trading, specializing in both mid-frequency and high-frequency trading. My passion for algorithmic trading led me to serve as the Team Lead at Algorithmic Trading IIT Bombay, where I achieved remarkable results, generating returns of over 3400% for ETH, 2700% for XRP, and 1700% for ADA over a span of 1.5 years. I outperformed the market by more than 4x in both back-testing and forward-testing periods with a Sharpe ratio exceeding 2.5.
          </p>
          <p className='pb-4'>
            My dedication to my field is unwavering, and I am constantly keeping up with the latest trends, technologies, and best practices in algorithmic trading and finance. I am eager to continue learning and growing in this ever-evolving domain.
          </p>
        </div>
      </div>
      <div className='text-center text-xl pt-12 md:text-lg md:p-12 md:pt-20'>
        Technologies I'm working with
        <br />
        {skills.map((item) => {
          return <SkillItem skill={item.skill} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default AboutMe;
