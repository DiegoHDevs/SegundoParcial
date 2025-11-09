import styles from "../styles/RetryButton.module.css";

// Constantes para texto del botón
const BUTTON_TEXT = {
  RETRY: "Reintentar",
};

/**
 * Componente de botón para reintentar acciones
 * @param {Object} props - Props del componente
 * @param {function} props.onClick - Función a ejecutar al hacer click (por defecto recarga la página)
 * @param {string|ReactNode} props.children - Contenido del botón (por defecto "Reintentar")
 * @returns {JSX.Element} - Componente RetryButton
 */
const RetryButton = ({ onClick, children = BUTTON_TEXT.RETRY }) => {
  /**
   * Maneja el click del botón
   * Ejecuta la función onClick si existe, sino recarga la página
   */
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.location.reload();
    }
  };

  return (
    <button
      className={styles.retryButton}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default RetryButton;