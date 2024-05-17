import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Menu from './menú';
import ReportesPdf from './ReportesPdf';
import MyPdfViewer from './MyPdfViewer';

const Reportes = ({ setToken }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPdf, setShowPdf] = useState(false);

  const fecha = new Date();
  const fechaFormateada = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()}`;

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
    <div className="relative" style={{ margin: 'auto', marginTop: '20px', width: '80%' }}>
      {isMenuOpen && <Menu setToken={setToken} onClose={closeMenu} onInstructionsClick={handleInstructions} />}
      <div className="flex">
        <button onClick={handleMenu}>
          <FaBars size={40} />
        </button>
        <h1 className="flex-grow text-center text-5xl font-bold mb-5 px-96">Reporte Específico</h1>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '1', marginRight: '20px' }}>
          <h2 className="text-2xl font-bold mb-5 text-blue-600">Estadísticas</h2>
          {/* Contenido de las estadísticas */}
        </div>
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Estudiantes</h2>
          {/* Lista de estudiantes */}
        </div>
      </div>
      <div style={{ flex: '1' }}>
        {/* Imagen y enlace de descarga del PDF de reportes */}
        <img src="images/porcentajes.jpg" alt="" style={{ width: '500px', height: '480px' }} />
        <PDFDownloadLink document={<ReportesPdf />} fileName={`Registro_de_lista_de_reportes-${fechaFormateada}.pdf`}>
          {({ blob, url, loading, error }) => loading ? 'Cargando documento...' : 'Descargar los Reportes PDF'}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default Reportes;
