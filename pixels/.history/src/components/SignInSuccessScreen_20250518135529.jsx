import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignInSuccessScreen.css';

const SignInSuccessScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <div className="success-content">
        <div className="success-icon">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="30" stroke="#4CAF50" strokeWidth="4"/>
            <path d="M20 32L28 40L44 24" stroke="#4CAF50" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h1>Welcome Back!</h1>
        <p>You have successfully signed in to your account.</p>
        <button 
          className="continue-button"
          onClick={() => navigate('/dashboard')}
        >
          Continue to Dashboard
        </button>
      </div>
    </div>
  );
};

export default SignInSuccessScreen; 