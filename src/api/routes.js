/**
 * Constantes de rutas de navegación
 */

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  COUNTRY_INFO: '/CountryInfo/:name',
  NOT_FOUND: '*',
};

/**
 * Genera la ruta para la información de un país
 * @param {string} countryName - Nombre del país
 * @returns {string} - Ruta generada
 */
export const getCountryInfoRoute = (countryName) => `/CountryInfo/${countryName}`;