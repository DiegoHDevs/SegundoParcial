import "./App.css";
import CountryList from "./features/country-list/CountryList";
import CountryDetails from "./features/country-detail/CountryDetails";
import About from "./features/about/About";
import NotFound from "./features/not-found/NotFound";
import { PaginationProvider } from "./features/country-list/context/PaginationContext";
import { ROUTES } from "./api/routes";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

/**
 * Componente principal de la aplicación
 * @returns {JSX.Element} - Componente App
 */
function App() {
  return (
    <BrowserRouter>
      <PaginationProvider>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to={ROUTES.HOME} className="navbar-brand">
              🌍 Countries Explorer
            </Link>
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
        <Routes>
          <Route path={ROUTES.HOME} element={<CountryList />} />
          <Route path={ROUTES.COUNTRY_INFO} element={<CountryDetails />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        </Routes>
      </PaginationProvider>
    </BrowserRouter>
  );
}

export default App;
