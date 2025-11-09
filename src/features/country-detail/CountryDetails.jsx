import { useParams } from "react-router-dom";
import { useFetch } from "../common/hooks/useFetch";
import { API_BASE_URL, API_ENDPOINTS, ERROR_MESSAGES, LOADING_MESSAGES, STATE_ICONS } from "../../api/api";
import styles from "./styles/CountryDetails.module.css";
import CountryHeader from "./components/CountryHeader";
import CountryDetailsGrid from "./components/CountryDetailsGrid";
import BorderCountriesSection from "./components/BorderCountriesSection";
import LoadingState from "../common/components/LoadingState";
import ErrorState from "../common/components/ErrorState";
import BackButton from "../common/components/BackButton";

/**
 * Componente para mostrar los detalles completos de un país
 * @returns {JSX.Element} - Componente CountryDetails
 */
const CountryDetails = () => {
  // Obtener el nombre del país de los parámetros de la URL
  const { name } = useParams();

  // Construir la URL de la API
  const apiUrl = `${API_BASE_URL}${API_ENDPOINTS.COUNTRY_BY_NAME}/${name}?fullText=true`;

  // Usar el hook personalizado para el fetch
  const { data: countryData, loading, error } = useFetch(apiUrl, {
    transformData: (data) => {
      // La API devuelve un array, tomamos el primer elemento
      return data[0];
    }
  });

  // Estado de carga
  if (loading) {
    return <LoadingState message={LOADING_MESSAGES.COUNTRY_DETAILS} />;
  }

  // Estado de error
  if (error) {
    return (
      <ErrorState message={ERROR_MESSAGES.FETCH_COUNTRY_DETAILS} icon={STATE_ICONS.ERROR}>
        <BackButton />
      </ErrorState>
    );
  }

  // País no encontrado
  if (!countryData) {
    return (
      <ErrorState message={ERROR_MESSAGES.COUNTRY_NOT_FOUND} icon={STATE_ICONS.NOT_FOUND}>
        <BackButton />
      </ErrorState>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <CountryHeader countryDetails={countryData} />
        <CountryDetailsGrid countryDetails={countryData} />
        <BorderCountriesSection borders={countryData.borders} />
        <BackButton />
      </div>
    </div>
  );
};

export default CountryDetails;