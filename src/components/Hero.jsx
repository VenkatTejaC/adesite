import React from 'react';

function Hero() {
  return (
    <section
      className="relative h-[300px] md:h-[300px] lg:h-[625px] flex flex-col justify-center items-center text-white text-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/skills/FullStack.gif)',
        backgroundSize: '100%',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-85"></div>

      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-black bg-opacity-50 text-white z-50">
        {/* Left: Clickable Name */}
        <a href="/" className="no-underline text-3xl font-bold hover:text-blue-400">
          Tej C
        </a>

        {/* Right: Navigation links */}
        <nav className="space-x-6">
          <a href="/" className="no-underline hover:text-blue-400 font-bold">Home</a>
          <a href="/about-details.html" className="no-underline hover:text-blue-400 font-bold">About Me</a>
          <a href="/projects-details.html" className="no-underline hover:text-blue-400 font-bold">Projects</a>
          <a href="/contact.html" className="no-underline hover:text-blue-400 font-bold">Contact</a>
        </nav>
      </div>

      {/* Center Content */}
      <div className="relative z-10 mt-20 text-center">
        <p className="text-2xl mb-6">Data Engineer</p>

        {/* Info Box */}
        <div className="bg-white bg-opacity-5 backdrop-blur-sm p-6 rounded-2xl shadow-lg max-w-[800px] mx-auto text-white">
          <p className="text-lg">
            I’m a Data Engineer passionate about turning raw data into trusted, actionable insights. With experience in building scalable data pipelines, designing robust data models, and optimizing data workflows using Azure (Data Factory, Synapse, Databricks, and more), I help businesses unlock the full potential of their data. I’m skilled in SQL, Python, Spark, and cloud architecture and I focus on creating secure, efficient, and reliable data solutions that scale with business needs.I enjoy mentoring, collaborating with cross-functional teams, and constantly learning to stay ahead in the fast-evolving data space.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
