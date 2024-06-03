/*import React, { useEffect } from 'react';
import './Preloader.css';

const Preloader = ({ fadeOut, finalizarCarga }) => {
  useEffect(() => {
    const cargaLoader = () => {
      if (finalizarCarga) finalizarCarga();
    };
    
    return () => document.removeEventListener('click', cargaLoader);
  }, [finalizarCarga]);

  return (
    <div className={`preloader  ${fadeOut ? 'fade-out' : ''}`}>
      <div className="preloader-wrapper">
        <h1 className="glitch" data-text="Paul Buitron">
          Paul Buitron
        </h1>
        <span className="sub">{`<Web_Developer/>`}</span>
        <button className="preloader-button" onClick={finalizarCarga}>
          START
        </button>
      </div>
    </div>
  );
};

export default Preloader;
*/

import React, { useEffect } from 'react';
import './Preloader.css';

const Preloader = ({ fadeIn, fadeOut, onFinishLoading }) => {
  

  useEffect(() => {
    const handleSkip = () => {
      if (onFinishLoading) onFinishLoading();
    };
    return ()=> {document.removeEventListener('click', handleSkip)}
    
  }, [onFinishLoading]);

  return (
    <div className={`preloader ${fadeIn ? 'fade-in' : ''} ${fadeOut ? 'fade-out' : ''}`}>
      <div className="preloader-wrapper">
        <h1 className="glitch" data-text="Paul Buitron">
          Paul Buitron
        </h1>
        <span className="sub">{`<Web_Developer/>`}</span>
        <button  className="preloader-button" onClick={onFinishLoading}>
          START
        </button>
      </div>
    </div>
  );
};

export default Preloader;
