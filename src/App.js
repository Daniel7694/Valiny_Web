import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './Components/InicioSesión';
import Reportes from './Components/Reportes';
import Menu from './Components/menú';
import Cursos from './Components/Cursos';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
      setToken(storedToken);
      console.log(token)
    }
  }, [token]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio setToken={setToken}/>} />
        {token && (
          <>
            <Route path="/Reportes" element={<Reportes />} />
            <Route path="/Cursos" element={<Cursos />} />
            <Route path="/Menu" element={<Menu setToken={setToken} onClose={closeMenu}  />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
