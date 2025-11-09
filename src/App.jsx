import "./App.css";
import CountryList from "./features/country-list/CountryList";
import CountryDetails from "./features/country-detail/CountryDetails";
import About from "./features/about/About";
import NotFound from "./features/not-found/NotFound";
import SearchBar from "./features/search/components/SearchBar";
import { PaginationProvider } from "./features/country-list/context/PaginationContext";
import { SearchProvider } from "./features/search/context/SearchContext";
import { ROUTES } from "./api/routes";
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

/**
 * Componente del Navbar que muestra u oculta el SearchBar según la ruta
 * @returns {JSX.Element} - Componente Navbar
 */
const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === ROUTES.HOME;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to={ROUTES.HOME} className="navbar-brand">
          🌍 Countries Explorer
        </Link>
        {isHomePage && (
          <div className="navbar-center">
            <SearchBar />
          </div>
        )}
        <div className="navbar-links">
          <Link to={ROUTES.HOME} className="navbar-link">
            Inicio
          </Link>
          <Link to={ROUTES.ABOUT} className="navbar-link">
            Acerca de
          </Link>
        </div>
      </div>
    </nav>
  );
};

/**
 * Componente principal de la aplicación
 * @returns {JSX.Element} - Componente App
 */
function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <PaginationProvider>
          <Navbar />
          <Routes>
            <Route path={ROUTES.HOME} element={<CountryList />} />
            <Route path={ROUTES.COUNTRY_INFO} element={<CountryDetails />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
          </Routes>
        </PaginationProvider>
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
