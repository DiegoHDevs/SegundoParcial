import styles from "../styles/ErrorState.module.css";

/**
 * Componente para mostrar un estado de error
 * @param {Object} props - Props del componente
 * @param {string} props.message - Mensaje de error a mostrar
 * @param {string} props.icon - Icono a mostrar (emoji)
 * @param {ReactNode} props.children - Elementos hijos opcionales (ej: botones de acción)
 * @returns {JSX.Element} - Componente ErrorState
 */
const ErrorState = ({ message, icon, children }) => {
  return (
    <div className={styles.error}>
      <div className={styles.errorIcon}>{icon}</div>
      <p>{message}</p>
      {children}
    </div>
  );
};

export default ErrorState;