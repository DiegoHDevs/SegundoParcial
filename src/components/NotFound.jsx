import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.errorCode}>404</div>
        <div className={styles.globe}>🌍</div>
        <h1 className={styles.title}>¡Oops! Página no encontrada</h1>
        <p className={styles.message}>
          Parece que te has perdido en el mapa mundial. La página que buscas no existe o ha sido movida.
        </p>
        
        <div className={styles.suggestions}>
          <h3 className={styles.suggestionsTitle}>¿Qué puedes hacer?</h3>
          <div className={styles.suggestionsList}>  
            <Link to="/" className={styles.suggestionLink}>
              🏠 Volver al inicio
            </Link>
            <Link to="/about" className={styles.suggestionLink}>
              ℹ️ Conocer más sobre nosotros
            </Link>
          </div>
        </div>

        <Link to="/" className={styles.homeButton}>
          ← Regresar a la página principal
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
