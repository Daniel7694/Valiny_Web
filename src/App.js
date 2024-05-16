import React, { useState } from 'react';
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

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu onClose={closeMenu} />} />
        <Route path="/Reportes" element={<Reportes />} />
        <Route path="/Cursos" element={<Cursos />} />
        <Route path="/Menu" element={<Inicio />} />
      </Routes>
    </Router>
  );
}

export default App;