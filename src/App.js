import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './Components/Inicio';
import Registros from './Components/Registros';
import Menu from './Components/menú';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/registros" element={<Registros />} />
        <Route path="/Inicio" element={<Inicio />} />
      </Routes>
    </Router>
  );
}

export default App;
