import { useSearch } from '../hooks/useSearch';
import styles from '../styles/SearchBar.module.css';

/**
 * Componente de barra de búsqueda
 * Permite filtrar países por nombre en tiempo real
 * @returns {JSX.Element} - Componente SearchBar
 */
const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useSearch();

  /**
   * Maneja el cambio en el input de búsqueda
   * @param {React.ChangeEvent<HTMLInputElement>} e - Evento de cambio
   */
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  /**
   * Limpia el campo de búsqueda
   */
  const handleClearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchInputWrapper}>
        <span className={styles.searchIcon}>🔍</span>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Buscar país..."
          value={searchTerm}
          onChange={handleSearchChange}
          aria-label="Buscar país"
        />
        {searchTerm && (
          <button
            className={styles.clearButton}
            onClick={handleClearSearch}
            aria-label="Limpiar búsqueda"
            type="button"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
