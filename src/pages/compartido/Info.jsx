import React from 'react';
import { useTranslation } from 'react-i18next';
import './Info.css'
const Info = ({ text }) => {
    const { t } = useTranslation('global');
    return (
        <section className='right flex-conteiner-section'>

            <p className='flex-conteiner-section-parrafo animated-paragraph'>
                {t(text)}
            </p>

        </section>
    );
}

export default Info;
