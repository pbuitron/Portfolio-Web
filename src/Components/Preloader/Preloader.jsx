import React from 'react';
import './Preloader.css'
const Preloader = () => {
    return (
        <div className="preloader">
            <div className="preloader-wrapper">
                <h1
                    className="glitch"
                    data-text="Paul Buitron">
                    Paul Buitron
                </h1>
                <span className="sub">{`<Web_Developer/>`} </span>
            </div>
        </div>
    );
};

export default Preloader;
