import { useEffect, useMemo } from "react";
import { useFetch } from "../common/hooks/useFetch";
import { useSearch } from "../search/hooks/useSearch";
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
 * Componente principal para mostrar la lista de países con paginación y búsqueda
 * @returns {JSX.Element} - Componente CountryList
 */
const CountryList = () => {
  // Usar el contexto de paginación y búsqueda
  const { currentPage, setPage, nextPage, prevPage, reset } = usePagination();
  const { searchTerm } = useSearch();

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

  // Filtrar países según el término de búsqueda
  const filteredCountries = useMemo(() => {
    if (!countries) return [];
    if (!searchTerm.trim()) return countries;

    const searchLower = searchTerm.toLowerCase().trim();
    return countries.filter(country => 
      country.name.common.toLowerCase().includes(searchLower) ||
      country.name.official?.toLowerCase().includes(searchLower)
    );
  }, [countries, searchTerm]);

  // Reiniciar paginación cuando cambian los países filtrados
  useEffect(() => {
    if (filteredCountries) {
      reset();
    }
  }, [filteredCountries, reset]);

  // Calcular valores de paginación usando países filtrados
  const { indexOfFirstCountry, indexOfLastCountry } = getPaginationIndices(
    currentPage, 
    COUNTRIES_PER_PAGE
  );
  const currentCountries = getCurrentPageItems(
    filteredCountries, 
    currentPage, 
    COUNTRIES_PER_PAGE
  );
  const totalPages = getTotalPages(
    filteredCountries.length, 
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

  // Mostrar mensaje cuando no hay resultados de búsqueda
  const hasNoResults = searchTerm && filteredCountries.length === 0;

  return (
    <div className={styles.wrapper}>
      {hasNoResults ? (
        <div className={styles.noResults}>
          <span className={styles.noResultsIcon}>🔍</span>
          <h2>No se encontraron resultados</h2>
          <p>No hay países que coincidan con "{searchTerm}"</p>
        </div>
      ) : (
        <>
          <PaginationInfo
            indexOfFirstCountry={indexOfFirstCountry}
            indexOfLastCountry={indexOfLastCountry}
            countriesLength={filteredCountries.length}
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
        </>
      )}
    </div>
  );
};

export default CountryList;
