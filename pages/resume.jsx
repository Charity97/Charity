import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Azwianewi Charity Madzhie | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Azwianewi Charity Madzhie</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/azwianewi-charity-madzhie-b9b9b1123'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/Azwianewi/SovTechProject.git'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Good interpersonal skills <span className='px-1'>|</span> Competent in Microsoft Word,Excel, Powerpoint and Outlook{' '}
              <span className='px-1'>|</span> Time Management
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Good understaning of system and operations</p>
            <p className='py-2'>Software Developer</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
         
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Backend Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>SQL
          </p>
          <p className='py-2'>
            <span className='font-bold'>Graduate</span>
            <span className='px-2'>|</span> Graduate Student
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Education
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Vaal University of Technology
            </span>
            <span className='px-2'>|National Diploma in Information Terchnology</span>
          </p>
          <p className='py-1 italic'>Year (2016 - 2019)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
               Software Development Ado.net, vb.net, Java and JavaScript.
            </li>
            <li>
              Web management Php, HTML, and CSS
            </li>
            <li>
              Business Analysts PL/Sql, SQL, Oracle
            </li>
            <li>
            System Software Installation of windows Server R2 2012, CCNA1 and CCNA2 and Introduction to Routing and Switching
            </li>
          </ul>
          </div>
        </div>
    </>
  );
};

export default resume;
