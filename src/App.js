import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './Components/Inicio';
import Registros from './Components/Registros';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/registros" element={<Registros />} />
      </Routes>
    </Router>
  );
}

export default App;
