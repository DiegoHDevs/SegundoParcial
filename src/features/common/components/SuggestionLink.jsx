import { Link } from "react-router-dom";
import styles from "../styles/SuggestionLink.module.css";

/**
 * Componente para enlaces de sugerencia en páginas de error
 * @param {string} to - Ruta de destino del enlace
 * @param {string} children - Contenido del enlace
 * @param {string} className - Clase CSS adicional (opcional)
 */
const SuggestionLink = ({ to, children, className = "" }) => {
  return (
    <Link
      to={to}
      className={`${styles.suggestionLink} ${className}`}
    >
      {children}
    </Link>
  );
};

export default SuggestionLink;