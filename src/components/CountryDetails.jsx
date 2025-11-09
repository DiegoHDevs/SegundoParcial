import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./CountryDetails.module.css";
import BorderCountry from "./BorderCountry";

const CountryDetails = () => {
  const [countryDetails, setCountryDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}?fullText=true`
        );
        const data = await response.json();
        setCountryDetails(data[0]);
      } catch (error) {
        console.error("Error fetching countries:", error);
        setError("No se pudo cargar la información del país. Por favor, intenta nuevamente.");
      } finally {
        setLoading(false);  
      }
    };

    fetchCountryDetails();
  }, [name]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Cargando información del país...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>
        <div className={styles.errorIcon}>⚠️</div>
        <p>{error}</p>
        <Link to="/" className={styles.backButton}>
          Volver a la lista
        </Link>
      </div>
    );
  }

  if (!countryDetails) {
    return (
      <div className={styles.error}>
        <div className={styles.errorIcon}>🔍</div>
        <p>País no encontrado</p>
        <Link to="/" className={styles.backButton}>
          Volver a la lista
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>{countryDetails.name.common}</h1>
          {countryDetails.name.official && (
            <p style={{ opacity: 0.8, fontSize: "1.1rem" }}>
              {countryDetails.name.official}
            </p>
          )}
          <img
            src={countryDetails.flags.svg || countryDetails.flags.png}
            alt={countryDetails.flags.alt || `Bandera de ${countryDetails.name.common}`}
            className={styles.flag}
          />
        </div>

        <div className={styles.detailsGrid}>
          {countryDetails.capital && (
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Capital</div>
              <div className={styles.detailValue}>{countryDetails.capital[0]}</div>
            </div>
          )}

          <div className={styles.detailItem}>
            <div className={styles.detailLabel}>Región</div>
            <div className={styles.detailValue}>{countryDetails.region}</div>
          </div>

          {countryDetails.subregion && (
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Subregión</div>
              <div className={styles.detailValue}>{countryDetails.subregion}</div>
            </div>
          )}

          <div className={styles.detailItem}>
            <div className={styles.detailLabel}>Población</div>
            <div className={styles.detailValue}>
              {countryDetails.population?.toLocaleString() || "N/A"}
            </div>
          </div>

          {countryDetails.languages && (
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Idiomas</div>
              <div className={styles.detailValue}>
                {Object.values(countryDetails.languages).join(", ")}
              </div>
            </div>
          )}

          {countryDetails.currencies && (
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Moneda</div>
              <div className={styles.detailValue}>
                {Object.values(countryDetails.currencies)
                  .map((curr) => `${curr.name} (${curr.symbol})`)
                  .join(", ")}
              </div>
            </div>
          )}

          {countryDetails.area && (
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Área</div>
              <div className={styles.detailValue}>
                {countryDetails.area.toLocaleString()} km²
              </div>
            </div>
          )}

          {countryDetails.timezones && (
            <div className={styles.detailItem}>
              <div className={styles.detailLabel}>Zona horaria</div>
              <div className={styles.detailValue}>
                {countryDetails.timezones[0]}
              </div>
            </div>
          )}
        </div>

        {countryDetails.borders && countryDetails.borders.length > 0 && (
          <div className={styles.bordersSection}>
            <h3 className={styles.bordersTitle}>Países Limítrofes</h3>
            <div className={styles.bordersGrid}>
              {countryDetails.borders.map((borderCode) => (
                <BorderCountry key={borderCode} code={borderCode} />
              ))}
            </div>
          </div>
        )}

        <Link to="/" className={styles.backButton}>
          ← Volver a la lista
        </Link>
      </div>
    </div>
  );
};

export default CountryDetails;
