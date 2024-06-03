/*import React, {useState,useEffect} from 'react';
import LightingEffect from './Components/LightingEffect/LightingEffect';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import './Styles/App.css';
import './apply.css'
import Principal from './pages/principal/Principal';
import Fondo from './Components/Fondo/Fondo';
import Preloader from './Components/Preloader/Preloader';



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula la carga de contenido con un temporizador
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Cambia el tiempo según tus necesidades

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }
  return (
    <BrowserRouter>
    
      <div className="App">
        <div className='border'>
          <Fondo/>
          <LightingEffect />
          <Header/> 
       

          <Principal/>
          
          

        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;*/
/*
import React, { useState } from 'react';
import LightingEffect from './Components/LightingEffect/LightingEffect';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import './Styles/App.css';
import './apply.css'
import Principal from './pages/principal/Principal';
import Fondo from './Components/Fondo/Fondo';
import Preloader from './Components/Preloader/Preloader';

function App() {
 
  const [loading, setLoading] = useState(true);
   const [fadeOut, setFadeOut] = useState(false);
 
  const finalCarga = () => {
   
    setTimeout(() => setLoading(false), 1000); // Tiempo para el fade out
    setFadeOut(true);
  };
  
  if (loading) {
    return <Preloader fadeOut={fadeOut}  finalizarCarga={finalCarga} />;
  
  }

  

  return (
    <BrowserRouter>
      <div className="App">
        <div className="border">
          <Fondo />
          <LightingEffect />
          <Header />
          <Principal />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
*/
  
import React, { useState, useEffect } from 'react';
import LightingEffect from './Components/LightingEffect/LightingEffect';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import './Styles/App.css';
import './apply.css';
import Principal from './pages/principal/Principal';
import Fondo from './Components/Fondo/Fondo';
import Preloader from './Components/Preloader/Preloader';

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(false), 1000); // Tiempo para el fade in
    return () => clearTimeout(timer);
  }, []);

  const handleFinishLoading = () => {
    setFadeOut(true);
    setTimeout(() => setLoading(false), 1000); // Tiempo para el fade out
  };

  if (loading) {
    return <Preloader fadeIn={fadeIn} fadeOut={fadeOut} onFinishLoading={handleFinishLoading} />;
  }

  return (
    <BrowserRouter>
      <div className="App">
        <div className="border">
          <Fondo />
          <LightingEffect />
          <Header />
          <Principal />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

