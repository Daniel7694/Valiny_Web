import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaBars } from 'react-icons/fa';
import { FaFileExcel } from 'react-icons/fa';
import { FaFilePdf } from 'react-icons/fa';
import Menu from './menú';
import { PDFDownloadLink } from '@react-pdf/renderer';
import CursosPdf from './CursosPdf';
import MyPdfViewer from './MyPdfViewer';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';


const Cursos = () => {
  const [students, setStudents] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPdf, setShowPdf] = useState(false);

  const fecha = new Date();
  const fechaFormateada = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()}`;

  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
      setToken(storedToken);
      console.log(token);
    }
  }, [token]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.1.39:3000/api/estudiantes');
        setStudents(response.data.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    return () => {
    //  setShowPdf(false);
    };
  }, []);

  const handleMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  //  setShowPdf(false);
  };
  const exportarAExcel = (datosApi, nombreArchivo) => {
    const tipoArchivo = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const extensionArchivo = '.xlsx';
  
    const hoja = XLSX.utils.json_to_sheet(datosApi);
    const libro = { Sheets: { 'data': hoja }, SheetNames: ['data'] };
    const bufferExcel = XLSX.write(libro, { bookType: 'xlsx', type: 'array' });
    const datos = new Blob([bufferExcel], { type: tipoArchivo });
    FileSaver.saveAs(datos, nombreArchivo + extensionArchivo);
  };
  

  const handleInstructions = () => {
    setShowPdf(true);
    setIsMenuOpen(false); // Cierra el menú cuando se abre el PDF
    console.log('showPdf:', showPdf);
  };

  console.log('showPdf:', showPdf); // Agregamos un console.log aquí para verificar el valor de showPdf

  if (showPdf) {
    console.log('showPdf is true'); // Agregamos un console.log aquí para verificar si el bloque condicional se está ejecutando
    return <MyPdfViewer file="/ManualDeInstruccionesValiny.pdf" />;
  }

  return (
    <div className="relative container mx-auto px-4 sm:px-8">
  {isMenuOpen && <Menu setToken={setToken} onClose={() => setIsMenuOpen(false)} onInstructionsClick={handleInstructions} />}
      <div className="py-8">
        <div className='flex flex-row'>
          <button onClick={handleMenu}>
            <FaBars size={40} />
          </button>
          <h2 className='text-5xl text-center mb-5 px-96'>Lista de cursos</h2>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider font-family: ui-serif, Georgia, Cambria, Times New Roman Times, serif">
                    Número
                  </th>
                  <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider font-family: ui-serif, Georgia, Cambria, Times New Roman Times, serif">
                    Documento
                  </th>
                  <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider font-family: ui-serif, Georgia, Cambria, Times New Roman Times, serif">
                    Nombres
                  </th>
                  <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider font-family: ui-serif, Georgia, Cambria, Times New Roman Times, serif">
                    Registro de Asistencia
                  </th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={student.Documento} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-200'}>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm font-family: ui-serif, Georgia, Cambria, Times New Roman Times, serif">{index + 1}</td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm font-family: ui-serif, Georgia, Cambria, Times New Roman Times, serif">{student.Documento}</td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm font-family: ui-serif, Georgia, Cambria, Times New Roman Times, serif">{student.Nombres}</td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm font-family: ui-serif, Georgia, Cambria, Times New Roman Times, serif">{student.Registro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h2>Descargar en:</h2>
          <div className="flex justify-center space-x-10 mt-10">
  <div className="flex flex-col items-center">
    <PDFDownloadLink document={<CursosPdf students={students} />} fileName={`Registro_de_lista_de_cursos-${fechaFormateada}.pdf`}>
      {({ blob, url, loading, error }) =>
        loading ? 'Cargando documento...' : <FaFilePdf size={50} color="red"/>
      }
    </PDFDownloadLink>
    <span>PDF</span>
  </div>
  <div className="flex flex-col items-center">
    <button onClick={() => exportarAExcel(students, `Lista_de_cursos_${fechaFormateada}`)}>
      <FaFileExcel size={50} color="green"/>
    </button>
    <span>Excel</span>
  </div>
</div>


        </div>
      </div>
    </div>
  );
};

export default Cursos;
