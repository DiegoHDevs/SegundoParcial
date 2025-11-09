import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Hook personalizado para realizar peticiones HTTP
 * @param {string} url - URL inicial para la petición (puede ser null para lazy loading)
 * @param {Object} options - Opciones de configuración
 * @param {boolean} options.autoFetch - Si debe ejecutar el fetch automáticamente (default: true)
 * @param {function} options.transformData - Función para transformar los datos obtenidos
 * @returns {Object} - Estado y funciones del fetch
 */
export const useFetch = (url, options = {}) => {
  const { autoFetch = true, transformData } = options;
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(autoFetch && !!url);
  const [error, setError] = useState(null);

  // Usar ref para evitar recrear la función en cada render
  const transformDataRef = useRef(transformData);
  
  // Actualizar la ref cuando transformData cambie
  useEffect(() => {
    transformDataRef.current = transformData;
  }, [transformData]);

  /**
   * Ejecuta la petición HTTP
   * @param {string} fetchUrl - URL para la petición (usa la URL por defecto si no se proporciona)
   */
  const fetchData = useCallback(async (fetchUrl = url) => {
    if (!fetchUrl) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(fetchUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      const processedData = transformDataRef.current ? transformDataRef.current(result) : result;
      setData(processedData);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err.message || 'Error al cargar los datos');
    } finally {
      setLoading(false);
    }
  }, [url]);

  /**
   * Reinicia el estado del hook
   */
  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  /**
   * Reintenta la última petición
   */
  const retry = useCallback(() => {
    fetchData();
  }, [fetchData]);

  // Auto-fetch cuando se monta el componente o cuando cambia la URL
  useEffect(() => {
    if (autoFetch && url) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, autoFetch]); // Solo queremos ejecutar cuando cambie la URL o autoFetch

  return {
    data,
    loading,
    error,
    fetchData,
    reset,
    retry
  };
};