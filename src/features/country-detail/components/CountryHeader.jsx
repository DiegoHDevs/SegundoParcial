import styles from "../styles/CountryHeader.module.css";

// Constantes para tamaños de fuente
const FONT_SIZES = {
  SUBTITLE: "1.1rem",
};

// Constantes para opacidad
const OPACITY = {
  SUBTITLE: 0.8,
};

/**
 * Componente para mostrar el encabezado con información del país
 * @param {Object} props - Props del componente
 * @param {Object} props.countryDetails - Datos del país
 * @returns {JSX.Element} - Componente CountryHeader
 */
const CountryHeader = ({ countryDetails }) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{countryDetails.name.common}</h1>
      {countryDetails.name.official && (
        <p style={{ 
          opacity: OPACITY.SUBTITLE, 
          fontSize: FONT_SIZES.SUBTITLE 
        }}>
          {countryDetails.name.official}
        </p>
      )}
      <img
        src={countryDetails.flags.svg || countryDetails.flags.png}
        alt={countryDetails.flags.alt || `Bandera de ${countryDetails.name.common}`}
        className={styles.flag}
      />
    </div>
  );
};

export default CountryHeader;