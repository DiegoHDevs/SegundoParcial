import { Link } from "react-router-dom";
import { ROUTES } from "../../../api/routes";
import styles from "../styles/BackButton.module.css";

// Constantes para el texto del botón
const BUTTON_TEXT = {
  BACK_TO_HOME: "← Volver al inicio",
};

/**
 * Componente de botón para volver al inicio
 * @returns {JSX.Element} - Componente BackButton
 */
const BackButton = () => {
  return (
    <div className={styles.backButtonContainer}>
      <Link to={ROUTES.HOME} className={styles.backButton}>
        {BUTTON_TEXT.BACK_TO_HOME}
      </Link>
    </div>
  );
};

export default BackButton;
