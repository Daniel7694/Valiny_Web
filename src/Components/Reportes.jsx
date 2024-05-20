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
  const fechaFormateada = `${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()}`;

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
          <h2 className='text-5xl text-center mb-5 px-96'>Reportes</h2>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Propiedad</th>
                  <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Valor</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <React.Fragment key={index}>
                    <tr className={index % 2 === 0 ? 'bg-white' : 'bg-blue-200'}>
                      <td className="px-5 py-5 border-b border-gray-200 text-sm">Asistencia</td>
                      <td className="px-5 py-5 border-b border-gray-200 text-sm">{student.Asistencia}</td>
                    </tr>
                    <tr className={index % 2 === 0 ? 'bg-white' : 'bg-blue-200'}>
                      <td className="px-5 py-5 border-b border-gray-200 text-sm">Porcentaje Asistencia</td>
                      <td className="px-5 py-5 border-b border-gray-200 text-sm">{student.Porcentaje_Asistencia}</td>
                    </tr>
                    <tr className={index % 2 === 0 ? 'bg-white' : 'bg-blue-200'}>
                      <td className="px-5 py-5 border-b border-gray-200 text-sm">Falla</td>
                      <td className="px-5 py-5 border-b border-gray-200 text-sm">{student.Falla}</td>
                    </tr>
                    <tr className={index % 2 === 0 ? 'bg-white' : 'bg-blue-200'}>
                      <td className="px-5 py-5 border-b border-gray-200 text-sm">Porcentaje Falla</td>
                      <td className="px-5 py-5 border-b border-gray-200 text-sm">{student.Porcentaje_Falla}</td>
                    </tr>
                    <tr className={index % 2 === 0 ? 'bg-white' : 'bg-blue-200'}>
                      <td className="px-5 py-5 border-b border-gray-200 text-sm">Retardo</td>
                      <td className="px-5 py-5 border-b border-gray-200 text-sm">{student.Retardo}</td>
                    </tr>
                    <tr className={index % 2 === 0 ? 'bg-white' : 'bg-blue-200'}>
                      <td className="px-5 py-5 border-b border-gray-200 text-sm">Porcentaje Retardo</td>
                      <td className="px-5 py-5 border-b border-gray-200 text-sm">{student.Porcentaje_Retardo}</td>
                    </tr>
                    <tr className={index % 2 === 0 ? 'bg-white' : 'bg-blue-200'}>
                      <td className="px-5 py-5 border-b border-gray-200 text-sm">Evasion</td>
                      <td className="px-5 py-5 border-b border-gray-200 text-sm">{student.Evasion}</td>
                    </tr>
                    <tr className={index % 2 === 0 ? 'bg-white' : 'bg-blue-200'}>
                      <td className="px-5 py-5 border-b border-gray-200 text-sm">Porcentaje Evasion</td>
                      <td className="px-5 py-5 border-b border-gray-200 text-sm">{student.Porcentaje_Evasion}</td>
                    </tr>
                    <tr className={index % 2 === 0 ? 'bg-white' : 'bg-blue-200'}>
                      <td className="px-5 py-5 border-b border-gray-200 text-sm">Falla Justificada</td>
                      <td className="px-5 py-5 border-b border-gray-200 text-sm">{student.Falla_Justificada}</td>
                    </tr>
                    <tr className={index % 2 === 0 ? 'bg-white' : 'bg-blue-200'}>
                      <td className="px-5 py-5 border-b border-gray-200 text-sm">Porcentaje Falla Justificada</td>
                      <td className="px-5 py-5 border-b border-gray-200 text-sm">{student.Porcentaje_Falla_Justificada}</td>
                    </tr>
                  </React.Fragment>
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
