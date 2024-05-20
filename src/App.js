import React, { useState, useEffect, useContext, createContext, Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './Components/InicioSesión';
import Reportes from './Components/Reportes';
import Menu from './Components/menú';
import Cursos from './Components/Cursos';
import ReportesEspecificos from './Components/ReporteEspecifico';

export const UserContext = createContext();

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
      setToken(storedToken);
      console.log(token)
    }
  }, [token]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio setToken={setToken}/>} />
          {token && (
            <>
              <Route path="/Reportes" element={<Reportes setToken={setToken} />} />
              <Route path="/Cursos" element={<Cursos setToken={setToken} />} />
              <Route path="/Menu" element={<Menu setToken={setToken} onClose={closeMenu}  />} />
              <Route path="/ReporteEspecifico" element={<ReportesEspecificos setToken={setToken} />} />
            </>
          )}
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
