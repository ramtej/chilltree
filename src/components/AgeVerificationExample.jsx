import React, { useState } from 'react';
import AgeVerification from './AgeVerification';

const AgeVerificationExample = () => {
  const [isVerified, setIsVerified] = useState(false);

  const handleVerification = () => {
    setIsVerified(true);
  };

  return (
    <div>
      <AgeVerification onVerified={handleVerification} />
      
      {isVerified && (
        <div style={{ 
          padding: '20px', 
          textAlign: 'center',
          backgroundColor: '#f8fafc',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>
          <h1 style={{ color: '#0B2C5D', marginBottom: '16px' }}>
            Welcome to Chilltree
          </h1>
          <p style={{ color: '#64748b', fontSize: '18px' }}>
            Age verification complete. You may now enter the site.
          </p>
        </div>
      )}
    </div>
  );
};

export default AgeVerificationExample;
