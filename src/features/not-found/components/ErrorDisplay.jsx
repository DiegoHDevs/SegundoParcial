import BackButton from "../../common/components/BackButton";
import SuggestionLink from "../../common/components/SuggestionLink";
import { ROUTES } from "../../../api/routes";
import { notFoundContent } from "../constants/content";
import styles from "../styles/ErrorDisplay.module.css";

/**
 * Componente para mostrar el contenido de error 404
 * @returns {JSX.Element} - Componente ErrorDisplay
 */
const ErrorDisplay = () => {
  return (
    <div className={styles.content}>
      {/* Código de error */}
      <div className={styles.errorCode}>{notFoundContent.errorCode}</div>
      
      {/* Ícono decorativo */}
      <div className={styles.globe}>{notFoundContent.globe}</div>
      
      {/* Título del error */}
      <h1 className={styles.title}>{notFoundContent.title}</h1>
      
      {/* Mensaje descriptivo */}
      <p className={styles.message}>{notFoundContent.message}</p>

      {/* Sección de sugerencias */}
      <div className={styles.suggestions}>
        <h3 className={styles.suggestionsTitle}>{notFoundContent.suggestionsTitle}</h3>
        <div className={styles.suggestionsList}>
          <BackButton />
          <SuggestionLink to={ROUTES.ABOUT}>
            {notFoundContent.aboutLink}
          </SuggestionLink>
        </div>
      </div>

      {/* Botón adicional para volver */}
      <BackButton />
    </div>
  );
};

export default ErrorDisplay;