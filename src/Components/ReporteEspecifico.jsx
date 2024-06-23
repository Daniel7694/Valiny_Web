import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import MyPdfViewer from './MyPdfViewer';
import Menu from './menú';
import { FaBars } from 'react-icons/fa';
import { UserContext } from '../App';

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
  const { userData } = useContext(UserContext);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const cargarEstudiantes = async () => {
      try {
        const response = await axios.get("http://192.168.2.108:3000/api/estudiantes");
        console.log("Datos de estudiantes:", response.data);
        setEstudiantes(response.data.data);
      } catch (error) {
        console.error("Error al cargar estudiantes:", error);
        setError("Error al cargar estudiantes");
      }
    };

    cargarEstudiantes();
  }, []);

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const response = await axios.get(`http://192.168.2.108:3000/api/administradores/${userData.ID_Admin}`);
        setAdmin(response.data.data);
        console.log("Datos del admin:", response.data.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchAdmin();
  }, [userData.ID_Admin]);

  useEffect(() => {
    if (Array.isArray(estudiantes) && registroSeleccionado && admin) {
      const studentsFilteredByStatusAndCourse = estudiantes.filter(estudiante => {
        console.log('Filtrando estudiante:', estudiante);
        return estudiante.Registro === estados[registroSeleccionado] && estudiante.Curso === admin.Curso;
      });
      console.log('Estudiantes filtrados:', studentsFilteredByStatusAndCourse);
      setFilteredStudents(studentsFilteredByStatusAndCourse);
    } else {
      setFilteredStudents([]);
    }
  }, [estudiantes, registroSeleccionado, admin]);

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
        <div className="inline-block min-w-full shadow rounded-lg overflow-y-auto h-96">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Número
                </th>
                <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Documento
                </th>
                <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Nombres
                </th>
                <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Tipo de documento
                </th>
                <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Curso
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((estudiante, index) => (
                <tr key={estudiante.Documento} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-200'}>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">{index + 1}</td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">{estudiante.Documento}</td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">{estudiante.Nombres}</td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">{estudiante.Tipo_de_documento}</td>
                  <td className="px-5 py-5 border-b border-gray-200 text-sm">{estudiante.Curso}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReporteEspecifico;
