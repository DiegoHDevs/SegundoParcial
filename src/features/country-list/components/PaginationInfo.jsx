import styles from "../styles/PaginationInfo.module.css";

/**
 * Componente para mostrar información sobre la paginación actual
 * @param {Object} props - Props del componente
 * @param {number} props.indexOfFirstCountry - Índice del primer país
 * @param {number} props.indexOfLastCountry - Índice del último país
 * @param {number} props.countriesLength - Total de países
 * @returns {JSX.Element} - Componente PaginationInfo
 */
const PaginationInfo = ({ indexOfFirstCountry, indexOfLastCountry, countriesLength }) => {
  // Calcular el número real del primer elemento (1-indexed)
  const firstItemNumber = indexOfFirstCountry + 1;
  
  // Calcular el número real del último elemento (no debe exceder el total)
  const lastItemNumber = Math.min(indexOfLastCountry, countriesLength);

  return (
    <div className={styles.paginationInfo}>
      Mostrando {firstItemNumber} - {lastItemNumber} de {countriesLength} países
    </div>
  );
};

export default PaginationInfo;