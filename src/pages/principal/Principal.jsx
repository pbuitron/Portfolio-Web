import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from '../../Components/sidebar/Sidebar';
import Info from '../compartido/Info';
import Carruselbrands from '../../Components/Carruselbrands/Carruselbrands/Carruselbrands';
import Proyectos from '../compartido/Proyectos';
import './Principal.css';
const Principal = () => {
    const location = useLocation();
    const isTecnologiasRoute = location.pathname === '/projects';

    return (
        <section className={`flex-container ${isTecnologiasRoute ? 'row-flex' : 'column-flex'}`}>
            <Sidebar />
            <Routes>
                <Route path='/' element={<Info text="info.me" />} />
                <Route path='/tecnologias' element={<Carruselbrands />} />
                <Route path='/projects' element={<Proyectos/>} />
            </Routes>
        </section>
    );
}

export default Principal;

