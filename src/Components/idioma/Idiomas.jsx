import React from 'react';
import { useTranslation } from 'react-i18next';
import "./idiomas.css";

const Idiomas = () => {
    const { i18n } = useTranslation();

    const handleChangeLanguage = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <section className="header-language">
            <select onChange={handleChangeLanguage} value={i18n.language} className="language-select">
                <option className="language-option option1" value="es">Español</option> className="language-option option"
                <option className="language-option option2" value="en">English</option>
                <option className="language-option option3" value="de">Deutsch</option>
            </select>
            
        </section>
    );
};

export default Idiomas;


