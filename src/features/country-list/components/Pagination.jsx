import styles from "../styles/Pagination.module.css";

// Constantes para símbolos de paginación
const PAGINATION_SYMBOLS = {
  PREVIOUS: "← Anterior",
  NEXT: "Siguiente →",
  ELLIPSIS: "...",
};

/**
 * Componente para mostrar los controles de paginación
 * @param {Object} props - Props del componente
 * @param {number} props.currentPage - Página actual
 * @param {number} props.totalPages - Total de páginas
 * @param {function} props.goToPrevPage - Función para ir a la página anterior
 * @param {function} props.goToNextPage - Función para ir a la página siguiente
 * @param {function} props.goToPage - Función para ir a una página específica
 * @param {function} props.getPageNumbers - Función que retorna el array de números de página
 * @returns {JSX.Element} - Componente Pagination
 */
const Pagination = ({
  currentPage,
  totalPages,
  goToPrevPage,
  goToNextPage,
  goToPage,
  getPageNumbers
}) => {
  const pageNumbers = getPageNumbers();

  return (
    <div className={styles.pagination}>
      {/* Botón Anterior */}
      <button
        onClick={goToPrevPage}
        disabled={currentPage === 1}
        className={styles.paginationButton}
      >
        {PAGINATION_SYMBOLS.PREVIOUS}
      </button>

      {/* Números de página */}
      <div className={styles.pageNumbers}>
        {pageNumbers.map((pageNum, index) => (
          pageNum === PAGINATION_SYMBOLS.ELLIPSIS ? (
            <span key={`ellipsis-${index}`} className={styles.ellipsis}>
              {PAGINATION_SYMBOLS.ELLIPSIS}
            </span>
          ) : (
            <button
              key={pageNum}
              onClick={() => goToPage(pageNum)}
              className={`${styles.pageNumber} ${currentPage === pageNum ? styles.active : ''}`}
            >
              {pageNum}
            </button>
          )
        ))}
      </div>

      {/* Botón Siguiente */}
      <button
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
        className={styles.paginationButton}
      >
        {PAGINATION_SYMBOLS.NEXT}
      </button>
    </div>
  );
};

export default Pagination;