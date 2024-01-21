// Top.tsx

import React from 'react';
import images from '../assets/index';
import '../styles/Top.scss';

const Top: React.FC = () => {
  return (
    <nav className="top">
      <div className="top-left">
        <img src={images.dahaDaha} alt="DahaDaha" className="icon" />
      </div>
      <div className="top-right">
      <button className="icon-right-giris">
          <img src={images.girisYap} alt="girisYap" className="button-icon" />
        </button>
        <div className="icon-right-oval">
          <img src={images.oval} alt="oval" className="oval-image" />
          <img src={images.profile} alt="profile" className="profile-image" />
        </div>
      </div>
    </nav>
  );
};

export default Top;
