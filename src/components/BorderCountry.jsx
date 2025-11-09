import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./BorderCountry.module.css";

const BorderCountry = ({ code }) => {
  const [borderCountry, setBorderCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBorderCountry = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${code}`
        );
        const data = await response.json();
        setBorderCountry(data[0]);
      } catch (error) {
        console.error("Error fetching border country:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBorderCountry();
  }, [code]);

  if (loading || !borderCountry) {
    return (
      <div className={styles.borderCountry}>
        <span className={styles.borderCode}>{code}</span>
      </div>
    );
  }

  return (
    <Link
      to={`/CountryInfo/${borderCountry.name.common}`}
      className={styles.borderCountry}
    >
      <img
        src={borderCountry.flags.png}
        alt={
          borderCountry.flags.alt || `Bandera de ${borderCountry.name.common}`
        }
        className={styles.borderFlag}
      />
      <span className={styles.borderName}>{borderCountry.name.common}</span>
    </Link>
  );
};

export default BorderCountry;
