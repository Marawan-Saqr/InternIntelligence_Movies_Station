import React from 'react';
import './AboutIinformations.css';

const AboutInformations = () => {
  return (
    <div className="about-container mt-5 mb-5">
      <div className="about-content">
        <h2>About Us</h2>
        <p>We are a passionate team dedicated to bringing the best movie-watching experience to our users. Our mission is to provide a seamless platform for discovering, reviewing, and enjoying films of all genres.</p>
        <div className="about-highlights">
          <div className="highlight">
            <h3>Our Mission</h3>
            <p>To create the ultimate movie hub where film lovers can explore and share their passion for cinema.</p>
          </div>
          <div className="highlight">
            <h3>Our Vision</h3>
            <p>To be the go-to destination for movie enthusiasts, offering personalized recommendations and an engaging community.</p>
          </div>
          <div className="highlight">
            <h3>Our Values</h3>
            <p>Passion for cinema, commitment to quality content, and fostering a community of movie lovers worldwide.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInformations;