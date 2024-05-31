import React from 'react';
import Idiomas from '../idioma/Idiomas';
import Titulo from '../Titulo/Titulo';
import Subtitulo from '../Subtitulo/Subtitulo';
import './Header.css'
const Header = () => {
    return (
        <header className='header header-position'>
            <Idiomas />
            <section>
                <Titulo textKey="header.hello" className="header-title title-animation"  />
                <Subtitulo textKey="charge.developer" className="header-subtitle subtitle-animation " id="hola" />
            </section>
        </header>
    );
}

export default Header;
