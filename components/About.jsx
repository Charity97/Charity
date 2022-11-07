import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          My name is Azwianewi Charity Madzhie, I am originally from Limpopo from a town called Tshilamba but currently staying in Daveyton.
         I came to Gauteng to further my studies I have completed my National Diploma in Information Technology at Vaal University of Technology and graduated in May 2020, it was not an Easy Journey for me.
         As a fresher I am seeking for Software Development position in a challenging environment where I can utilize my skills and my career paths.
          </p>
          <h2>Why I want to be a Developer</h2>
          <p className='py-2 text-gray-600'>
          I want to be a software developer because designing computer programs lets me use my creative and problem-solving skills.
          I am highly self-motivated and self-managed, 
          I have strong organizational skills, time and priority management, able to meet all deadlines and
          I have the capability of making quick decisions, high level of integrity and discretion, ethical
           and professional in person presentation, performance and conduct.  
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
