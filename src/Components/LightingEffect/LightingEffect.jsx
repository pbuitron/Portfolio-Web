import React, { useEffect, useState } from 'react';
import './LightingEffect.css';

const LightingEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="dark-background ">
      <article
        className="light"
        style={{
          left: `${position.x - 40}px`,
          top: `${position.y - 50}px`,
        }}
      ></article>
    </section>
  );
};

export default LightingEffect;
