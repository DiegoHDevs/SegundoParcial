import { useReducer, useCallback } from 'react';
import { PaginationContext } from './createPaginationContext';

/**
 * Estado inicial de la paginación
 */
const initialState = {
  currentPage: 1,
};

/**
 * Tipos de acciones para el reducer
 */
const ACTION_TYPES = {
  SET_PAGE: 'SET_PAGE',
  NEXT_PAGE: 'NEXT_PAGE',
  PREV_PAGE: 'PREV_PAGE',
  RESET: 'RESET',
};

/**
 * Reducer para manejar el estado de la paginación
 * @param {Object} state - Estado actual
 * @param {Object} action - Acción a ejecutar
 * @returns {Object} - Nuevo estado
 */
const paginationReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_PAGE:
      return { ...state, currentPage: action.payload };
    
    case ACTION_TYPES.NEXT_PAGE:
      return { 
        ...state, 
        currentPage: Math.min(state.currentPage + 1, action.payload.totalPages) 
      };
    
    case ACTION_TYPES.PREV_PAGE:
      return { 
        ...state, 
        currentPage: Math.max(state.currentPage - 1, 1) 
      };
    
    case ACTION_TYPES.RESET:
      return initialState;
    
    default:
      return state;
  }
};

/**
 * Provider para el contexto de paginación
 * @param {Object} props - Props del componente
 * @param {ReactNode} props.children - Componentes hijos
 */
export const PaginationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(paginationReducer, initialState);

  /**
   * Establece una página específica
   * @param {number} page - Número de página
   */
  const setPage = useCallback((page) => {
    dispatch({ type: ACTION_TYPES.SET_PAGE, payload: page });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  /**
   * Va a la página siguiente
   * @param {number} totalPages - Total de páginas disponibles
   */
  const nextPage = useCallback((totalPages) => {
    dispatch({ type: ACTION_TYPES.NEXT_PAGE, payload: { totalPages } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  /**
   * Va a la página anterior
   */
  const prevPage = useCallback(() => {
    dispatch({ type: ACTION_TYPES.PREV_PAGE });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  /**
   * Reinicia la paginación a la página 1
   */
  const reset = useCallback(() => {
    dispatch({ type: ACTION_TYPES.RESET });
  }, []);

  const value = {
    currentPage: state.currentPage,
    setPage,
    nextPage,
    prevPage,
    reset,
  };

  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  );
};