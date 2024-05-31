import React, {useState,useEffect} from 'react';
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

export default App;
