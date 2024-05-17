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
        <Route path="/Inicio" element={<Inicio setToken={setToken}/>} />

            <Route path="/Reportes" element={<Reportes setToken={setToken} />} />
            <Route path="/Cursos" element={<Cursos setToken={setToken} />} />
            <Route path="/" element={<Menu setToken={setToken} onClose={closeMenu}  />} />

      </Routes>
    </Router>
  );
}

export default App;
