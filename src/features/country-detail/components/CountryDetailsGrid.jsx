import styles from "../styles/CountryDetailsGrid.module.css";

/**
 * Componente para mostrar la grilla de detalles del país
 * @param {Object} props - Props del componente
 * @param {Object} props.countryDetails - Datos del país
 * @returns {JSX.Element} - Componente CountryDetailsGrid
 */
const CountryDetailsGrid = ({ countryDetails }) => {
  /**
   * Formatea un número con separadores de miles
   * @param {number} num - Número a formatear
   * @returns {string} - Número formateado
   */
  const formatNumber = (num) => num?.toLocaleString() || "N/A";

  /**
   * Obtiene los valores de un objeto como string separado por comas
   * @param {Object} obj - Objeto a procesar
   * @returns {string} - Valores concatenados
   */
  const getObjectValues = (obj) => Object.values(obj).join(", ");

  return (
    <div className={styles.detailsGrid}>
      {/* Capital */}
      {countryDetails.capital && (
        <div className={styles.detailItem}>
          <div className={styles.detailLabel}>Capital</div>
          <div className={styles.detailValue}>{countryDetails.capital[0]}</div>
        </div>
      )}

      {/* Región */}
      <div className={styles.detailItem}>
        <div className={styles.detailLabel}>Región</div>
        <div className={styles.detailValue}>{countryDetails.region}</div>
      </div>

      {/* Subregión */}
      {countryDetails.subregion && (
        <div className={styles.detailItem}>
          <div className={styles.detailLabel}>Subregión</div>
          <div className={styles.detailValue}>{countryDetails.subregion}</div>
        </div>
      )}

      {/* Población */}
      <div className={styles.detailItem}>
        <div className={styles.detailLabel}>Población</div>
        <div className={styles.detailValue}>
          {formatNumber(countryDetails.population)}
        </div>
      </div>

      {/* Idiomas */}
      {countryDetails.languages && (
        <div className={styles.detailItem}>
          <div className={styles.detailLabel}>Idiomas</div>
          <div className={styles.detailValue}>
            {getObjectValues(countryDetails.languages)}
          </div>
        </div>
      )}

      {/* Moneda */}
      {countryDetails.currencies && (
        <div className={styles.detailItem}>
          <div className={styles.detailLabel}>Moneda</div>
          <div className={styles.detailValue}>
            {Object.values(countryDetails.currencies)
              .map((curr) => `${curr.name} (${curr.symbol})`)
              .join(", ")}
          </div>
        </div>
      )}

      {/* Área */}
      {countryDetails.area && (
        <div className={styles.detailItem}>
          <div className={styles.detailLabel}>Área</div>
          <div className={styles.detailValue}>
            {formatNumber(countryDetails.area)} km²
          </div>
        </div>
      )}

      {/* Zona horaria */}
      {countryDetails.timezones && (
        <div className={styles.detailItem}>
          <div className={styles.detailLabel}>Zona horaria</div>
          <div className={styles.detailValue}>
            {countryDetails.timezones[0]}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetailsGrid;