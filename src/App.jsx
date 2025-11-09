import "./App.css";
import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";
import About from "./components/About";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-brand">
            🌍 Countries Explorer
          </Link>
          <div className="navbar-links">
            <Link to="/" className="navbar-link">
              Inicio
            </Link>
            <Link to="/about" className="navbar-link">
              Acerca de
            </Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="/CountryInfo/:name" element={<CountryDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
