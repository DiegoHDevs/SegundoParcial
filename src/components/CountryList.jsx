import { useEffect, useState } from "react";
import styles from "./CountryList.module.css";
import { Link } from "react-router-dom";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 20;

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags"
        );
        const data = await response.json();
        const sortedData = data.sort((a, b) => 
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedData);
      } catch (error) {
        console.error("Error fetching countries:", error);
        setError("No se pudo cargar la lista de países. Por favor, verifica tu conexión e intenta nuevamente.");
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);
  const totalPages = Math.ceil(countries.length / countriesPerPage);


  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p className={styles.loadingText}>Cargando países del mundo...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <div className={styles.errorIcon}>⚠️</div>
        <p className={styles.errorText}>{error}</p>
        <button 
          className={styles.retryButton}
          onClick={() => window.location.reload()}
        >
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.paginationInfo}>
        Mostrando {indexOfFirstCountry + 1} - {Math.min(indexOfLastCountry, countries.length)} de {countries.length} países
      </div>
      
      <ul className={styles.container}>
        {currentCountries.map((country) => (
          <Link
            key={country.name.common}
            to={`/CountryInfo/${country.name.common}`}
            className={styles.link}
          >
            <div className={styles.item}>
              <li>{country.name.common}</li>
              <img 
                src={country.flags.png} 
                alt={country.flags.alt || `Bandera de ${country.name.common}`} 
                height={64} 
              />
            </div>
          </Link>
        ))}
      </ul>

      <div className={styles.pagination}>
        <button 
          onClick={goToPrevPage} 
          disabled={currentPage === 1}
          className={styles.paginationButton}
        >
          ← Anterior
        </button>

        <div className={styles.pageNumbers}>
          {getPageNumbers().map((pageNum, index) => (
            pageNum === '...' ? (
              <span key={`ellipsis-${index}`} className={styles.ellipsis}>...</span>
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

        <button 
          onClick={goToNextPage} 
          disabled={currentPage === totalPages}
          className={styles.paginationButton}
        >
          Siguiente →
        </button>
      </div>
    </div>
  );
};

export default CountryList;
