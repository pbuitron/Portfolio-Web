import React from "react";
import { useTranslation } from "react-i18next";
import "./Carruselbrands.css";
const Carruselbrands = () => {
  const { t } = useTranslation("global");

  const logos = [
    { link: "https://www.svgrepo.com/show/452045/js.svg" },
    { link: "https://www.svgrepo.com/show/452228/html-5.svg" },
    { link: "https://www.svgrepo.com/show/373535/css.svg" },
    { link: "https://www.svgrepo.com/show/374061/sass.svg" },
    { link: "https://www.svgrepo.com/show/355190/reactjs.svg" },
    { link: "https://www.svgrepo.com/show/303266/nodejs-icon-logo.svg" },
    { link: "https://www.svgrepo.com/show/353498/bootstrap.svg" },
    { link: "https://www.svgrepo.com/show/374118/tailwind.svg" },
    { link: "https://www.svgrepo.com/show/331488/mongodb.svg" },
    { link: "https://www.svgrepo.com/show/452077/npm.svg" },
    
];
  return (
    <div className="logos">
      <div className="logo_items">
        {logos.map((logo,index) => (
          <img key={index} src={logo.link} alt={t("logo_alt_text_")} />
        ))}
      </div>
      <div className="logo_items">
        {logos.map((logo,index) => (
          <img key={index} src={logo.link} alt={t("logo_alt_text_")} />
        ))}
      </div>
      <div className="logo_items">
        {logos.map((logo,index) => (
          <img key={index} src={logo.link} alt={t("logo_alt_text_")} />
        ))}
      </div>
    </div>
  );
};

export default Carruselbrands;
