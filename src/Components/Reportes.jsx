import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaBars } from 'react-icons/fa';
import Menu from './menú';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ReportesPdf from './ReportesPdf';
import MyPdfViewer from './MyPdfViewer';

const Reportes = () => {
  const [students, setStudents] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPdf, setShowPdf] = useState(false);

  const fecha = new Date();
  const fechaFormateada = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.20.23:3000/api/porcentajes/porcentaje_registros');
        setStudents(response.data.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const handleMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleInstructions = () => {
    setShowPdf(true);
    setIsMenuOpen(false);
  };

  if (showPdf) {
    return <MyPdfViewer file="/ManualDeInstruccionesValiny.pdf" />;
  }

  return (
    <div className="relative container mx-auto px-4 sm:px-8">
      {isMenuOpen && <Menu onClose={closeMenu} onInstructionsClick={handleInstructions} />}
      <div className="py-8">
        <div className='flex flex-row'>
          <button onClick={handleMenu}>
            <FaBars size={40} />
          </button>
          <h2 className='text-5xl text-center mb-5 px-96'>Reporte de Estudiantes</h2>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Número</th>
                  <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Documento</th>
                  <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Nombres</th>
                  <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Registro de Asistencia</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={student.Documento} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-200'}>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">{index + 1}</td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">{student.Porcentaje_Asistencia}</td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">{student.Falla}</td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">{student.Asistencia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <PDFDownloadLink document={<ReportesPdf students={students} />} fileName={`Registro_de_lista_de_reportes-${fechaFormateada}.pdf`}>
            {({ blob, url, loading, error }) =>
              loading ? 'Cargando documento...' : 'Descargar los Reportes PDF'
            }
          </PDFDownloadLink>
        </div>
      </div>
    </div>
  );
};

export default Reportes;
