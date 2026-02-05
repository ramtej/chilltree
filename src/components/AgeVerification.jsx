import React, { useState, useEffect } from 'react';
import './AgeVerification.css';

const AgeVerification = ({ onVerified }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleYes = () => {
    setIsVisible(false);
    if (onVerified) onVerified();
  };

  const handleNo = () => {
    // Redirect or show message for underage users
    window.location.href = 'https://www.google.com';
  };

  useEffect(() => {
    // Prevent scrolling when modal is open
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="age-verification-overlay">
      <div className="age-verification-modal">
        <div className="age-verification-content">
          <div className="age-verification-brand">
            <h1 className="age-verification-brand-name">Chilltree</h1>
          </div>
          
          <h2 className="age-verification-title">Age Verification</h2>
          
          <div className="age-verification-message">
            <p className="age-verification-question">Are you over 21?</p>
            <p className="age-verification-subtitle">
              You must be at least 21 years old to enter. By clicking 'Yes', you confirm that you meet this age requirement.
            </p>
          </div>

          <div className="age-verification-buttons">
            <button 
              className="age-verification-btn age-verification-btn-yes"
              onClick={handleYes}
            >
              Yes
            </button>
            <button 
              className="age-verification-btn age-verification-btn-no"
              onClick={handleNo}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeVerification;
