import React from 'react';
import logo from '../logo.svg';

const Home = () => (
  <div className="hero">
    <div className="hero-text">
      <h1 className="hero-title">Welcome to our Page!</h1>
      <p className="hero-description">
        Is a website for all fans of mathematics that allows users to:
      </p>
      <ul className="hero-detail">
        <li>
          Make simple calculations with memory functions similar
          to a small handheld calculator.
        </li>
        <li>Read a random math-related quote.</li>
      </ul>
    </div>
    <div className="hero-img">
      <img src={logo} className="image-hero" alt="calculator" />
    </div>

  </div>
);

export default Home;
