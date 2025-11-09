import styles from "../styles/LoadingState.module.css";

// Constantes para mensajes por defecto
const DEFAULT_MESSAGES = {
  LOADING: "Cargando...",
};

/**
 * Componente para mostrar un estado de carga
 * @param {Object} props - Props del componente
 * @param {string} props.message - Mensaje personalizado (default: "Cargando...")
 * @returns {JSX.Element} - Componente LoadingState
 */
const LoadingState = ({ message = DEFAULT_MESSAGES.LOADING }) => {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner}></div>
      <p>{message}</p>
    </div>
  );
};

export default LoadingState;