import { useContext } from 'react';
import { SearchContext } from '../context/createSearchContext';

/**
 * Hook personalizado para acceder al contexto de búsqueda
 * @throws {Error} Si se usa fuera del SearchProvider
 * @returns {Object} Contexto de búsqueda con searchTerm, setSearchTerm, clearSearch
 */
export const useSearch = () => {
  const context = useContext(SearchContext);
  
  if (context === undefined) {
    throw new Error('useSearch debe ser usado dentro de un SearchProvider');
  }
  
  return context;
};
