
import './Subtitulo.css';
import { useTranslation } from 'react-i18next';


const Subtitulo = ({ textKey, className}) => {
  const { t } = useTranslation("global");
  
  

  return (
    
      <h2 className={className} >
        {t(textKey)}
      </h2>
      
    
  );
};

export default Subtitulo;


