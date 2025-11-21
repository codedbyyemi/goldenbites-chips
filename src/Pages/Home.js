import React from 'react';
import '../Styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Golden Bites Chips</h1>
      <p>Delicious plantain chips just for you!</p>
      <a
        href="https://wa.me/YOUR_PHONE_NUMBER"
        target="_blank"
        rel="noopener noreferrer"
        className="order-button"
      >
        Order Now
      </a>
    </div>
  );
};

export default Home;
