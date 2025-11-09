import { useContext } from 'react';
import { PaginationContext } from '../context/createPaginationContext';

/**
 * Hook para usar el contexto de paginación
 * @returns {Object} - Estado y funciones de paginación
 * @throws {Error} - Si se usa fuera del PaginationProvider
 */
export const usePagination = () => {
  const context = useContext(PaginationContext);
  
  if (context === undefined) {
    throw new Error('usePagination debe ser usado dentro de un PaginationProvider');
  }
  
  return context;
};