
import './Titulo.css';
import { useTranslation } from 'react-i18next';


const Titulo = ({ textKey, id, className }) => {
  const { t } = useTranslation("global");
  
  

  return (
    
      <h1 className={className} >
        {t(textKey)}
      </h1>
      
    
  );
};

export default Titulo;


