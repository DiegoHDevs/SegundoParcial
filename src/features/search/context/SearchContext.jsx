import { useState, useCallback } from 'react';
import { SearchContext } from './createSearchContext';

/**
 * Provider para el contexto de búsqueda
 * Gestiona el estado global del término de búsqueda
 * @param {Object} props - Props del componente
 * @param {React.ReactNode} props.children - Componentes hijos
 * @returns {JSX.Element} - Provider del contexto
 */
export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTermState] = useState('');

  /**
   * Actualiza el término de búsqueda
   * @param {string} term - Nuevo término de búsqueda
   */
  const setSearchTerm = useCallback((term) => {
    setSearchTermState(term);
  }, []);

  /**
   * Limpia el término de búsqueda
   */
  const clearSearch = useCallback(() => {
    setSearchTermState('');
  }, []);

  const value = {
    searchTerm,
    setSearchTerm,
    clearSearch,
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};
