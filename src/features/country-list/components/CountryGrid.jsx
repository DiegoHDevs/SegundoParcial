import { Link } from "react-router-dom";
import { getCountryInfoRoute } from "../../../api/routes";
import styles from "../styles/CountryGrid.module.css";

// Constantes para tamaños de imagen
const IMAGE_SIZES = {
  FLAG_HEIGHT: 64,
};

/**
 * Componente para mostrar la grilla de países
 * @param {Object} props - Props del componente
 * @param {Array<Object>} props.currentCountries - Array de países a mostrar
 * @returns {JSX.Element} - Componente CountryGrid
 */
const CountryGrid = ({ currentCountries }) => {
  return (
    <ul className={styles.container}>
      {currentCountries.map((country) => (
        <Link
          key={country.name.common}
          to={getCountryInfoRoute(country.name.common)}
          className={styles.link}
        >
          <div className={styles.item}>
            <li>{country.name.common}</li>
            <img
              src={country.flags.png}
              alt={country.flags.alt || `Bandera de ${country.name.common}`}
              height={IMAGE_SIZES.FLAG_HEIGHT}
            />
          </div>
        </Link>
      ))}
    </ul>
  );
};

export default CountryGrid;