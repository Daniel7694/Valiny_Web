import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './Components/InicioSesión';
import Reportes from './Components/Reportes';
import Menu from './Components/menú';
import Cursos from './Components/Cursos';

function App() {
 /* const [token, setToken] = useState(null);

  useEffect(() => {
    // Aquí debes reemplazar 'miToken' con el nombre que le diste a tu token en el almacenamiento local
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
      setToken(storedToken);
      console.log(token)
    }
  }, [token]);*/

  return (
    <Router>
      <Routes>
        <Route path="/Menu" element={<Inicio />} />
            <Route path="/Reportes" element={<Reportes />} />
            <Route path="/" element={<Menu />} />
            <Route path="/Cursos" element={<Cursos />} />
      </Routes>
    </Router>
  );
}

export default App;
