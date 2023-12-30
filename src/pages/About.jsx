// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full md:max-w-lg">
        <div className="mb-4 text-center">
          <img
            src="ck.jpg" 
            alt="Chandan Kumar"
            className="rounded-full w-40 h-40 mx-auto mb-4"
          />
        </div>

        <h1 className="text-3xl font-bold mb-4 text-gray-800">About Me...</h1>
        <p className="text-gray-700 mb-4">
          Hi, I'm <span className='font-bold text-black'>Chandan Kumar</span>, a passionate frontend developer with expertise in React.js. I have
          a keen eye for detail and a commitment to delivering high-quality user experiences.
        </p>
        <p className="text-gray-700 mb-4">
          I specialize in building modern, responsive, and performance-optimized web applications.
          Whether it's creating beautiful user interfaces or solving complex technical challenges, I
          am dedicated to pushing the boundaries of what's possible in web development.
        </p>
        <p className="text-gray-700">
          Connect with me to explore the world of frontend development, React.js, and cutting-edge
          web technologies.
        </p>
      </div>
    </div>
  );
};

export default About;
