import { useEffect } from "react";
import { useFetch } from "../common/hooks/useFetch";
import { API_BASE_URL, API_ENDPOINTS, API_FIELDS, ERROR_MESSAGES, LOADING_MESSAGES, STATE_ICONS } from "../../api/api";
import { usePagination } from "./hooks/usePagination";
import LoadingState from "../common/components/LoadingState";
import ErrorState from "../common/components/ErrorState";
import RetryButton from "../common/components/RetryButton";
import PaginationInfo from "./components/PaginationInfo";
import CountryGrid from "./components/CountryGrid";
import Pagination from "./components/Pagination";
import { COUNTRIES_PER_PAGE } from "./constants/config";
import {
  getPaginationIndices,
  getCurrentPageItems,
  getTotalPages,
  getPageNumbers
} from "./utils/pagination";
import styles from "./styles/CountryList.module.css";

/**
 * Componente principal para mostrar la lista de países con paginación
 * @returns {JSX.Element} - Componente CountryList
 */
const CountryList = () => {
  // Usar el contexto de paginación
  const { currentPage, setPage, nextPage, prevPage, reset } = usePagination();

  // Construir la URL de la API
  const apiUrl = `${API_BASE_URL}${API_ENDPOINTS.ALL_COUNTRIES}?fields=${API_FIELDS.BASIC}`;

  // Usar el hook personalizado para el fetch
  const { data: countries, loading, error, retry } = useFetch(apiUrl, {
    transformData: (data) => {
      // Ordenar países alfabéticamente por nombre común
      return data.sort((a, b) => 
        a.name.common.localeCompare(b.name.common)
      );
    }
  });

  // Reiniciar paginación cuando se cargan los países
  useEffect(() => {
    if (countries) {
      reset();
    }
  }, [countries, reset]);

  // Calcular valores de paginación
  const { indexOfFirstCountry, indexOfLastCountry } = getPaginationIndices(
    currentPage, 
    COUNTRIES_PER_PAGE
  );
  const currentCountries = getCurrentPageItems(
    countries || [], 
    currentPage, 
    COUNTRIES_PER_PAGE
  );
  const totalPages = getTotalPages(
    countries?.length || 0, 
    COUNTRIES_PER_PAGE
  );
  const pageNumbers = getPageNumbers(currentPage, totalPages);

  // Handlers de paginación
  const handleGoToPage = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleGoToNextPage = () => {
    nextPage(totalPages);
  };

  const handleGoToPrevPage = () => {
    prevPage();
  };

  // Estados de carga y error
  if (loading) {
    return <LoadingState message={LOADING_MESSAGES.COUNTRIES_LIST} />;
  }

  if (error) {
    return (
      <ErrorState message={ERROR_MESSAGES.FETCH_COUNTRIES} icon={STATE_ICONS.ERROR}>
        <RetryButton onClick={retry} />
      </ErrorState>
    );
  }

  return (
    <div className={styles.wrapper}>
      <PaginationInfo
        indexOfFirstCountry={indexOfFirstCountry}
        indexOfLastCountry={indexOfLastCountry}
        countriesLength={countries?.length || 0}
      />
      <CountryGrid currentCountries={currentCountries} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        goToPrevPage={handleGoToPrevPage}
        goToNextPage={handleGoToNextPage}
        goToPage={handleGoToPage}
        getPageNumbers={() => pageNumbers}
      />
    </div>
  );
};

export default CountryList;
