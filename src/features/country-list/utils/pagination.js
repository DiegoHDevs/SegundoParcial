/**
 * Utilidades para manejar la lógica de paginación
 * Este módulo proporciona funciones reutilizables para implementar paginación en listas
 */

// Constantes para la paginación
const PAGINATION_CONSTANTS = {
  MAX_PAGES_TO_SHOW: 5,
  ELLIPSIS: '...',
  FIRST_PAGE: 1,
  PAGES_BEFORE_ELLIPSIS: 4,
  PAGES_AFTER_ELLIPSIS: 3,
  MIDDLE_PAGE_THRESHOLD: 3,
};

/**
 * Calcula los índices para el slicing de elementos paginados
 * @param {number} currentPage - Página actual (1-indexed)
 * @param {number} itemsPerPage - Número de elementos por página
 * @returns {object} - Objeto con indexOfFirstItem y indexOfLastItem
 */
export const getPaginationIndices = (currentPage, itemsPerPage) => {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  return { indexOfFirstItem, indexOfLastItem };
};

/**
 * Obtiene los elementos de la página actual
 * @param {Array} items - Array completo de elementos
 * @param {number} currentPage - Página actual (1-indexed)
 * @param {number} itemsPerPage - Número de elementos por página
 * @returns {Array} - Elementos de la página actual
 */
export const getCurrentPageItems = (items, currentPage, itemsPerPage) => {
  const { indexOfFirstItem, indexOfLastItem } = getPaginationIndices(currentPage, itemsPerPage);
  return items.slice(indexOfFirstItem, indexOfLastItem);
};

/**
 * Calcula el número total de páginas
 * @param {number} totalItems - Número total de elementos
 * @param {number} itemsPerPage - Número de elementos por página
 * @returns {number} - Número total de páginas
 */
export const getTotalPages = (totalItems, itemsPerPage) => {
  return Math.ceil(totalItems / itemsPerPage);
};

/**
 * Genera la lista de números de página a mostrar en la paginación
 * @param {number} currentPage - Página actual
 * @param {number} totalPages - Número total de páginas
 * @param {number} maxPagesToShow - Máximo número de páginas a mostrar (default: 5)
 * @returns {Array} - Array con números de página y '...' para indicar omisión
 */
export const getPageNumbers = (
  currentPage, 
  totalPages, 
  maxPagesToShow = PAGINATION_CONSTANTS.MAX_PAGES_TO_SHOW
) => {
  const pageNumbers = [];

  // Si el total de páginas es menor o igual al máximo, mostrar todas
  if (totalPages <= maxPagesToShow) {
    for (let i = PAGINATION_CONSTANTS.FIRST_PAGE; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    // Mostrar páginas con elipsis
    if (currentPage <= PAGINATION_CONSTANTS.MIDDLE_PAGE_THRESHOLD) {
      // Mostrar las primeras páginas
      for (let i = PAGINATION_CONSTANTS.FIRST_PAGE; i <= PAGINATION_CONSTANTS.PAGES_BEFORE_ELLIPSIS; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push(PAGINATION_CONSTANTS.ELLIPSIS);
      pageNumbers.push(totalPages);
    } else if (currentPage >= totalPages - PAGINATION_CONSTANTS.MIDDLE_PAGE_THRESHOLD + 1) {
      // Mostrar las últimas páginas
      pageNumbers.push(PAGINATION_CONSTANTS.FIRST_PAGE);
      pageNumbers.push(PAGINATION_CONSTANTS.ELLIPSIS);
      for (let i = totalPages - PAGINATION_CONSTANTS.PAGES_AFTER_ELLIPSIS; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Mostrar páginas del medio
      pageNumbers.push(PAGINATION_CONSTANTS.FIRST_PAGE);
      pageNumbers.push(PAGINATION_CONSTANTS.ELLIPSIS);
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push(PAGINATION_CONSTANTS.ELLIPSIS);
      pageNumbers.push(totalPages);
    }
  }

  return pageNumbers;
};