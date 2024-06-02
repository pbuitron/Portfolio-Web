import React, { useEffect } from 'react';
import './Preloader.css';

const Preloader = ({ fadeOut, onFinishLoading }) => {
  useEffect(() => {
    const handleSkip = () => {
      if (onFinishLoading) onFinishLoading();
    };
    document.addEventListener('click', handleSkip);
    return () => document.removeEventListener('click', handleSkip);
  }, [onFinishLoading]);

  return (
    <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
      <div className="preloader-wrapper">
        <h1 className="glitch" data-text="Paul Buitron">
          Paul Buitron
        </h1>
        <span className="sub">{`<Web_Developer/>`}</span>
        <button className="preloader-button" onClick={onFinishLoading}>
          START
        </button>
      </div>
    </div>
  );
};

export default Preloader;

