import React, { useState, useEffect } from "react";
import axios from "axios";
import MyPdfViewer from './MyPdfViewer';
import Menu from './menú';
import { FaBars } from 'react-icons/fa';
import { PDFDownloadLink } from '@react-pdf/renderer';

const ReporteEspecifico = ({ setToken }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPdf, setShowPdf] = useState(false);
  const [registroSeleccionado, setRegistroSeleccionado] = useState("");
  const [estudiantes, setEstudiantes] = useState([]);
  const [confirmado, setConfirmado] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarEstudiantes = async () => {
      try {
        const response = await axios.get(
          `https://api.example.com/estudiantes?registro=${registroSeleccionado}`
        );
        setEstudiantes(response.data);
      } catch (error) {
        console.error("Error al cargar estudiantes:", error);
        setError("Error al cargar estudiantes");
      }
    };

    if (registroSeleccionado !== "") {
      cargarEstudiantes();
    }
  }, [registroSeleccionado]);

  const handleReportTypeClick = (reportType) => {
    setRegistroSeleccionado(reportType);
    setConfirmado(false);
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

  const handleConfirm = () => {
    if (estudiantes.length === 0) {
      setError("No se encontraron estudiantes para el tipo de reporte seleccionado");
    } else {
      setError(null);
      setConfirmado(true);
      // Aquí puedes agregar la lógica adicional que desees cuando se confirma la selección
    }
  };

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
          <li
            className={`flex items-center cursor-pointer ${registroSeleccionado === "falla" ? "text-blue-500" : ""}`}
            onClick={() => handleReportTypeClick("falla")}
          >
            <div className={`w-5 h-5 border-2 border-gray-400 rounded-full mr-2 ${registroSeleccionado === "falla" ? "bg-blue-200 border-blue-200" : ""}`}></div>
            Falla
          </li>
          <li
            className={`flex items-center cursor-pointer ${registroSeleccionado === "asiste" ? "text-blue-500" : ""}`}
            onClick={() => handleReportTypeClick("asiste")}
          >
            <div className={`w-5 h-5 border-2 border-gray-400 rounded-full mr-2 ${registroSeleccionado === "asiste" ? "bg-blue-200 border-blue-200" : ""}`}></div>
            Asiste
          </li>
          <li
            className={`flex items-center cursor-pointer ${registroSeleccionado === "retardo" ? "text-blue-500" : ""}`}
            onClick={() => handleReportTypeClick("retardo")}
          >
            <div className={`w-5 h-5 border-2 border-gray-400 rounded-full mr-2 ${registroSeleccionado === "retardo" ? "bg-blue-200 border-blue-200" : ""}`}></div>
            Retardo
          </li>
          <li
            className={`flex items-center cursor-pointer ${registroSeleccionado === "evasion" ? "text-blue-500" : ""}`}
            onClick={() => handleReportTypeClick("evasion")}
          >
            <div className={`w-5 h-5 border-2 border-gray-400 rounded-full mr-2 ${registroSeleccionado === "evasion" ? "bg-blue-200 border-blue-200" : ""}`}></div>
            Evasión
          </li>
          <li
            className={`flex items-center cursor-pointer ${registroSeleccionado === "falla-justificada" ? "text-blue-500" : ""}`}
            onClick={() => handleReportTypeClick("falla-justificada")}
          >
            <div className={`w-5 h-5 border-2 border-gray-400 rounded-full mr-2 ${registroSeleccionado === "falla-justificada" ? "bg-blue-200 border-blue-200" : ""}`}></div>
            Falla Just.
          </li>
        </ul>
        <button
          className="bg-blue-200 hover:bg-blue-300 text-gray-600 font-semibold py-2 px-4 rounded mt-5 disabled:opacity-50"
          onClick={handleConfirm}
          disabled={!registroSeleccionado || confirmado}
        >
          Confirmar
        </button>
        {error && <p className="text-red-500 mt-3">{error}</p>}
      </div>
      {confirmado && (
        <div className="border rounded-lg p-5 mt-5">
          <h2 className="text-2xl font-bold mb-3">Estudiantes:</h2>
          <ul className="space-y-2">
            {estudiantes.map((estudiante) => (
              <li key={estudiante.id} className="bg-gray-200 p-3 rounded">{estudiante.nombre}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ReporteEspecifico;
