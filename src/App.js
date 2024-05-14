import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './Components/InicioSesión';
import Reportes from './Components/Reportes';
import Menu from './Components/menú';
import Cursos from './Components/Cursos';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Reportes" element={<Reportes />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Cursos" element={<Cursos />} />
      </Routes>
    </Router>
  );
}

export default App;
