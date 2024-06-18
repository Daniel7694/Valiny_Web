import React, { useState, useEffect } from "react";
import axios from "axios";
import MyPdfViewer from './MyPdfViewer';
import Menu from './menú';
import { FaBars } from 'react-icons/fa';

const estados = {
  'falla': 'Falla',
  'asiste': 'Asiste',
  'retardo': 'Retardo',
  'evasion': 'Evacion',
  'falla-justificada': 'Justificada'
};

const ReporteEspecifico = ({ setToken }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPdf, setShowPdf] = useState(false);
  const [registroSeleccionado, setRegistroSeleccionado] = useState("");
  const [estudiantes, setEstudiantes] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarEstudiantes = async () => {
      try {
        const response = await axios.get("http://192.168.1.42:3000/api/estudiantes");
        console.log("Datos de estudiantes:", response.data);
        setEstudiantes(response.data.data); // Asegúrate de que los datos se están guardando correctamente
      } catch (error) {
        console.error("Error al cargar estudiantes:", error);
        setError("Error al cargar estudiantes");
      }
    };

    cargarEstudiantes();
  }, []);

  useEffect(() => {
    if (Array.isArray(estudiantes) && registroSeleccionado) {
      const studentsFilteredByStatus = estudiantes.filter(estudiante => {
        console.log('Filtrando estudiante:', estudiante); // Verifica los datos de cada estudiante
        return estudiante.Registro === estados[registroSeleccionado];
      });
      console.log('Estudiantes filtrados:', studentsFilteredByStatus);
      setFilteredStudents(studentsFilteredByStatus);
    } else {
      setFilteredStudents([]);
    }
  }, [estudiantes, registroSeleccionado]);

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

  const handleReportTypeClick = (tipo) => {
    setRegistroSeleccionado(tipo);
    setError(null);
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
              {estados[tipo]}
            </li>
          ))}
        </ul>
      </div>
      <div className="border rounded-lg p-5 mt-5">
        <h2 className="text-2xl font-bold mb-3">Estudiantes:</h2>
        {error && <p className="text-red-500 mt-3">{error}</p>}
        {filteredStudents.length === 0 && !error && (
          <p className="text-gray-500 mt-3">No se encontraron estudiantes para el estado seleccionado.</p>
        )}
        <table className="min-w-full leading-normal">
          <tbody>
            {filteredStudents.map((estudiante) => (
              <tr key={estudiante.Documento}>
                <td>{estudiante.Documento}</td>
                <td>{estudiante.Nombres}</td>
                <td>{estudiante.Curso}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReporteEspecifico;
