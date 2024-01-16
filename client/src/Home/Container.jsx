import React from 'react';
import { Link } from 'react-router-dom'; // Import Link with a capital "L"
import bgImage from '../image/Bg-img.png'; // Make sure to provide the correct path to the image

const Main = () => {
  return (
    <div className="custom-div">
      <div className="custom-text">
        <h1 style={{ color: 'white' }}>Unlock Your Potential</h1>
        <p>Explore your abilities with interactive IQ tests. Unlock your potential through interactive IQ tests, revealing the genius within you.</p>
        <Link to='/start' style={{ textDecoration: 'none', color: 'white' }}>
          <button className="custom-button">
            Start  &nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="12">
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" fill="white"/>
            </svg>
          </button>
        </Link>
      </div>
      <div>
        <img src={bgImage} alt="Image" className="custom-image" />
      </div>
    </div>
  );
}

export default Main;
