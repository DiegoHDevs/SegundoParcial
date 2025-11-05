import { useEffect, useState } from "react";
import styles from "./CountryList.module.css";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags"
        );
        const data = await response.json();
        setCountries(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
        setError("Failed to fetch countries");
      }
    };

    fetchCountries();
  }, []);
  return (
    <ul className={styles.container}>
      {error && <p>{error}</p>}
      {countries.map((country) => (
        <div key={country.name.common} className={styles.item}>
          <li>{country.name.common}</li>
          <img src={country.flags.png} alt={country.flags.alt} height={64} />
        </div>
      ))}
    </ul>
  );
};

export default CountryList;
