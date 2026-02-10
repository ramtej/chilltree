import React from 'react';
import './Marquee.css';

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-line marquee-left">
        <span>CLEAN ENERGY • ABSOLUTE FOCUS • CLEAN ENERGY • ABSOLUTE FOCUS • CLEAR MIND • MAXIMUM ENERGY • PURE DRIVE • ABSOLUTE CLARITY •</span>
      </div>
      <div className="marquee-line marquee-right">
        <span>10000+ ORDERS • SUBSCRIBE & SAVE • LAB TESTED • 10000+ ORDERS • SUBSCRIBE & SAVE • LAB TESTED • TRUSTED BY THOUSANDS • PREMIUM FORMULA</span>
      </div>
    </div>
  );
};

export default Marquee;
