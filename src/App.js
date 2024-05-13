import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './Components/InicioSesión';
import Registros from './Components/Registros';
import Menu from './Components/menú';
import Cursos from './Components/Cursos';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Registros" element={<Registros />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Cursos" element={<Cursos />} />
      </Routes>
    </Router>
  );
}

export default App;
