import React from 'react';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Proyectos.css'
const Proyectos = () => {
    const { t } = useTranslation("global");
    const proyectos = [
        { proyecto: "https://sealpro.vercel.app/", año: "2024", tt: t('projects.sealpro') },
        { proyecto: "https://tienda-react-one.vercel.app/", año: "2023", tt: t('projects.ecommerce') },
        { proyecto: "https://pbuitron.github.io/Javascript/", año: "2022", tt: t('projects.vanillaJavascript') },
        { proyecto: "https://pbuitron.github.io/Clinica_Dental-Codehouse/", año: "2022", tt: t('projects.clinica') },
        { proyecto: "https://pbuitron.github.io/etriath/", año: "2022", tt: t('projects.etriath') }
        
    ];

    return (
        <article className='proyectos'>
            <section className='proyecto'>
                {proyectos.map((proyecto, index) => (
                    <section className='proyectos-contenedor' key={index}>
                        <Link to={proyecto.proyecto} className='proyectos-link' target="_blank" rel="noopener noreferrer">
                            <p className='proyectos-nombre'>{proyecto.tt}</p>
                        </Link>
                        <span className="proyectos-fecha">
                            {proyecto.año}
                        </span>
                    </section>
                ))}
            </section>
        </article>
    );
};

export default Proyectos;
