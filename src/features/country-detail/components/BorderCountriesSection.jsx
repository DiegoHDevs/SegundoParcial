import BorderCountry from "./BorderCountry";
import styles from "../styles/BorderCountriesSection.module.css";

/**
 * Componente para mostrar la sección de países limítrofes
 * @param {Object} props - Props del componente
 * @param {Array<string>} props.borders - Array de códigos de países limítrofes
 * @returns {JSX.Element|null} - Componente BorderCountriesSection o null si no hay borders
 */
const BorderCountriesSection = ({ borders }) => {
  // No mostrar la sección si no hay países limítrofes
  if (!borders || borders.length === 0) return null;

  return (
    <div className={styles.bordersSection}>
      <h3 className={styles.bordersTitle}>Países Limítrofes</h3>
      <div className={styles.bordersGrid}>
        {borders.map((borderCode) => (
          <BorderCountry key={borderCode} code={borderCode} />
        ))}
      </div>
    </div>
  );
};

export default BorderCountriesSection;