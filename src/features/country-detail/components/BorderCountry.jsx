import { useFetch } from "../../common/hooks/useFetch";
import { API_BASE_URL, API_ENDPOINTS, STATE_ICONS } from "../../../api/api";
import { getCountryInfoRoute } from "../../../api/routes";
import { Link } from "react-router-dom";
import styles from "../styles/BorderCountry.module.css";

/**
 * Componente para mostrar un país limítrofe
 * @param {Object} props - Props del componente
 * @param {string} props.code - Código del país (alpha-3)
 * @returns {JSX.Element} - Componente BorderCountry
 */
const BorderCountry = ({ code }) => {
  // Construir la URL de la API
  const apiUrl = `${API_BASE_URL}${API_ENDPOINTS.COUNTRY_BY_CODE}/${code}`;

  // Usar el hook personalizado para el fetch
  const { data: countryData, error } = useFetch(apiUrl, {
    transformData: (data) => data[0] // La API devuelve un array
  });

  // Mostrar estado de error o país sin datos
  if (error || !countryData) {
    return (
      <div className={styles.borderCountry}>
        <div className={styles.borderFlag}>{STATE_ICONS.FLAG_PLACEHOLDER}</div>
        <div className={styles.borderName}>{code}</div>
      </div>
    );
  }

  return (
    <Link 
      to={getCountryInfoRoute(countryData.name.common)} 
      className={styles.borderCountry}
    >
      <img
        src={countryData.flags.svg || countryData.flags.png}
        alt={`Bandera de ${countryData.name.common}`}
        className={styles.borderFlag}
      />
      <div className={styles.borderName}>{countryData.name.common}</div>
      <div className={styles.borderCode}>({countryData.cca3})</div>
    </Link>
  );
};

export default BorderCountry;