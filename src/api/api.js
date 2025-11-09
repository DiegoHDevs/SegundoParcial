/**
 * Constantes de la API de REST Countries
 */

// Base URL de la API
export const API_BASE_URL = 'https://restcountries.com/v3.1';

// Endpoints de la API
export const API_ENDPOINTS = {
  ALL_COUNTRIES: '/all',
  COUNTRY_BY_NAME: '/name',
  COUNTRY_BY_CODE: '/alpha',
};

// Campos que queremos obtener de la API
export const API_FIELDS = {
  BASIC: 'name,flags',
  FULL: 'name,flags,capital,region,subregion,population,languages,currencies,area,timezones,borders',
};

// Mensajes de error
export const ERROR_MESSAGES = {
  FETCH_COUNTRIES: 'No se pudo cargar la lista de países. Por favor, verifica tu conexión e intenta nuevamente.',
  FETCH_COUNTRY_DETAILS: 'No se pudo cargar la información del país. Por favor, intenta nuevamente.',
  COUNTRY_NOT_FOUND: 'País no encontrado',
  BORDER_COUNTRY_ERROR: 'Error loading country',
};

// Mensajes de carga
export const LOADING_MESSAGES = {
  COUNTRIES_LIST: 'Cargando países del mundo...',
  COUNTRY_DETAILS: 'Cargando información del país...',
};

// Iconos para estados
export const STATE_ICONS = {
  ERROR: '⚠️',
  NOT_FOUND: '🔍',
  FLAG_PLACEHOLDER: '🏳️',
};