import React, { useState, useEffect } from "react";
import axios from "axios";
import MyPdfViewer from './MyPdfViewer';
import Menu from './menú';
import { FaBars } from 'react-icons/fa';

const estados = {
  'falla': 0,
  'asiste': 1,
  'retardo': 2,
  'evasion': 3,
  'falla-justificada': 4
};

const ReporteEspecifico = ({ setToken }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPdf, setShowPdf] = useState(false);
  const [registroSeleccionado, setRegistroSeleccionado] = useState("");
  const [estudiantes, setEstudiantes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarEstudiantes = async () => {
      try {
        const response = await axios.get("http://192.168.1.15:3000/api/estudiantes");
        console.log("Datos de estudiantes:", response.data); // Verificar datos de estudiantes recibidos
  
        // Verificar si los datos recibidos son un array
        if (!Array.isArray(response.data)) {
          // Si los datos no son un array, intentaremos convertirlos a un array
          const estudiantesArray = Object.values(response.data); // Convertir el objeto a un array
  
          // Verificar si se pudo convertir a un array
          if (!Array.isArray(estudiantesArray)) {
            console.error("No se pudieron convertir los datos de estudiantes a un array:", response.data);
            setError("Los datos de estudiantes no están en el formato esperado");
            return;
          }
  
          // Almacenar los datos de estudiantes convertidos en el estado
          setEstudiantes(estudiantesArray);
        } else {
          // Almacenar los datos de estudiantes en el estado
          setEstudiantes(response.data);
        }
      } catch (error) {
        console.error("Error al cargar estudiantes:", error);
        setError("Error al cargar estudiantes");
      }
    };
  
    cargarEstudiantes();
  }, []);
  
  const filtrarEstudiantes = (tipo) => {
    console.log("Tipo seleccionado:", tipo); // Verificar el tipo seleccionado
    if (!Array.isArray(estudiantes)) {
      console.error("Los datos de estudiantes no son un array:", estudiantes);
      return []; // Devolver un array vacío si los datos no son válidos
    }
    return estudiantes.filter(estudiante => estudiante.Registro === tipo);
  };
  
  
  const handleReportTypeClick = (reportType) => {
    console.log("Tipo seleccionado:", reportType); // Verificar el tipo seleccionado
    setRegistroSeleccionado(reportType);
    setError(null); // Resetear el error al cambiar de selección
  };
  
  const handleMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleInstructions = () => {
    setShowPdf(true);
    closeMenu();
  };

  if (showPdf) {
    return <MyPdfViewer file="/ManualDeInstruccionesValiny.pdf" />;
  }

  return (
    <div className="max-w-3xl mx-auto mt-20 p-5 border rounded-lg text-left">
      {isMenuOpen && <Menu setToken={setToken} onClose={closeMenu} onInstructionsClick={handleInstructions} />}
      <button onClick={handleMenu}>
        <FaBars size={40} />
      </button>
      <div className="bg-blue-200 text-gray-600 px-4 py-2 rounded mb-5">Reportes Específicos</div>
      <div>
        <h1 className="text-3xl font-bold mb-5">Reportes Diarios</h1>
        <ul className="space-y-2">
        {Object.keys(estados).map((tipo) => (
  <li
    key={tipo}
    className={`flex items-center cursor-pointer ${registroSeleccionado === tipo ? "text-blue-500" : ""}`}
    onClick={() => handleReportTypeClick(tipo)}
  >
    <div className={`w-5 h-5 border-2 border-gray-400 rounded-full mr-2 ${registroSeleccionado === tipo ? "bg-blue-200 border-blue-200" : ""}`}></div>
    {tipo.charAt(0).toUpperCase() + tipo.slice(1).replace('-', ' ')}
  </li>
))}
        </ul>
      </div>
      <div className="border rounded-lg p-5 mt-5">
        <h2 className="text-2xl font-bold mb-3">Estudiantes:</h2>
        {error && <p className="text-red-500 mt-3">{error}</p>}
        {estudiantes.length === 0 && !error && registroSeleccionado !== "" && (
          <p className="text-gray-500 mt-3">No se encontraron estudiantes para el estado seleccionado.</p>
        )}
        <ul className="space-y-2">
        {filtrarEstudiantes(registroSeleccionado).map((estudiante) => (
  <li key={estudiante.Documento} className="bg-gray-200 p-3 rounded">{estudiante['Nombres']}</li>
))}
        </ul>
      </div>
    </div>
  );
};

export default ReporteEspecifico;
