import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Contacto.css' 
const Contacto = ({ contact,mail, buscame }) => {
    const { t } = useTranslation('global');
    return (
        <section className='right flex-container-section contact'>
            <pre class="content about dash">
                {t(contact)}
                <Link to="mailto:pbuitron.bem@gmail.com" className='redes'>{t(mail)} </Link>
                

                {t(buscame)}
                <Link to={"https://github.com/pbuitron"} rel='noreferrer' target="_blank" className='redes'>Github</Link>
                <Link to={"https://www.linkedin.com/in/paul-dennis-buitron-velarde/"} rel='noreferrer' target="_blank" className='redes'>LinkedIn</Link>
                <Link to={"https://wa.me/51936312086?text=Hola,%20estoy%20interesado%20en%20tus%20servicios%20como%20desarrollador"} rel='noreferrer' target="_blank" className='redes'>WhatsApp</Link>
                
                
            </pre>
        </section>
    );
}

export default Contacto;
