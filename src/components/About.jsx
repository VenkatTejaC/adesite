import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

function About() {
  return (
    <section
      className="relative p-8 text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/about-bg.jpeg)'  // ✅ Update with your actual image path
      }}
    >
      {/* Overlay with 70% opacity */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Actual content */}
      <div className="relative z-10">
        <h2 className="flex items-center text-3xl font-bold mb-4">
          About Me
          <a href="/about-details.html" className="ml-2 text-blue-400 no-underline">
            <FaArrowRight size={16} />
          </a>
        </h2>

        <p>
          I’m a Data Engineer passionate about turning raw data into trusted, actionable insights. With experience in building scalable data pipelines, designing robust data models, and optimizing data workflows using Azure (Data Factory, DataLake Storage, Databricks, Synapse), I help businesses unlock the full potential of their data. I’m skilled in SQL, Python, Spark, and cloud architecture and I focus on creating secure, efficient, and reliable data solutions. I enjoy mentoring, collaborating with cross-functional teams, and constantly learning to stay ahead in the fast-evolving data space.
        </p>
      </div>
    </section>
  );
}

export default About;
