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

  // Datos de ejemplo
  const data = [
    { categoria: 'Asistencia', porcentaje: 5.4054 },
    { categoria: 'Falla', porcentaje: 94.5946 },
    { categoria: 'Retardo', porcentaje: 0 },
    { categoria: 'Evasion', porcentaje: 0 },
    { categoria: 'Falla Justificada', porcentaje: 0 },
  ];

  const students = [
    'Erik Ricaurte',
    'Jeampierre niete',
    'Cristian Lombana',
    'Heidy Prieto',
    'Daniela Gomez'
  ];

  const getRandomStudent = () => {
    return students[Math.floor(Math.random() * students.length)];
  };

  const randomStudents = Array.from({ length: 5 }, () => getRandomStudent());

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
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #007bff' }}>
            <thead style={{ backgroundColor: '#007bff', color: '#fff' }}>
              <tr>
                <th style={{ padding: '8px', border: '1px solid #007bff' }}>Categoría</th>
                <th style={{ padding: '8px', border: '1px solid #007bff' }}>Porcentaje</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td style={{ padding: '8px', border: '1px solid #007bff' }}>{item.categoria}</td>
                  <td style={{ padding: '8px', border: '1px solid #007bff' }}>{item.porcentaje}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Estudiantes</h2>
          <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
            {randomStudents.map((student, index) => (
              <li key={index} style={{ marginBottom: '5px' }}>{student}</li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ flex: '1' }}>
        <img src="images/porcentajes.jpg" alt="" style={{ width: '500px', height: '480px' }} />
        <PDFDownloadLink document={<ReportesPdf />} fileName={`Registro_de_lista_de_reportes-${fechaFormateada}.pdf`}>
          {({ blob, url, loading, error }) => loading ? 'Cargando documento...' : 'Descargar los Reportes PDF'}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default Reportes;
