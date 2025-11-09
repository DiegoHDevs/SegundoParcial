import ErrorDisplay from "./components/ErrorDisplay";
import styles from "./styles/NotFound.module.css";

/**
 * Componente para la página 404 - Página no encontrada
 * @returns {JSX.Element} - Componente NotFound
 */
const NotFound = () => {
  return (
    <div className={styles.container}>
      <ErrorDisplay />
    </div>
  );
};

export default NotFound;
