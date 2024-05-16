import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { useNavigate } from 'react-router-dom';
import { TbReportSearch } from "react-icons/tb";
import { FaBook, FaInfoCircle } from 'react-icons/fa';

function Menu({ setToken, onClose }) {
  const [showPdf, setShowPdf] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Borrar el token del almacenamiento local
    localStorage.removeItem('token');
  
    // Actualizar el estado de la aplicación
    setToken(null);
  
    // Prevenir la navegación hacia atrás
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = function(event) {
      window.history.go(1);
    };
  
    // Redirigir al usuario a la página de inicio de sesión
    navigate('/');
  };

  const handleCursos = () => {
    navigate('/Cursos');
    onClose();
  };

  const handleReportes = () => {
    navigate('/Reportes');
    onClose();
  };

    const handleInstructions = () => {
    setShowPdf(true);
    onClose();
    };

    if (showPdf) {
      return <MyPdfViewer />;
    }
  

  return (
    <div className="fixed inset-0 flex z-50">
      <div className="w-96 h-full bg-white border-r font-serif shadow-lg">
        <button onClick={handleLogout} className="mt-4 text-blue-500 p-4">Log Out</button>
        <div className="mt-12 p-4 text-center">
          <p className="font-bold text-lg">Nombre de prueba</p>
          <p>Rol de prueba</p>
        </div>
        <ul className="mt-8">
          <button onClick={handleReportes} className='w-full'>
            <li className="mt-12 flex items-center p-4 hover:bg-blue-100">
              <i className="material-icons mr-3"><TbReportSearch size={20}/></i> Reportes
            </li>
          </button>
          <button onClick={handleCursos} className='w-full'>
            <li className="flex items-center p-4 hover:bg-blue-100">
              <i className="material-icons mr-3"><FaBook size={20} /></i> Cursos
            </li>
          </button>
          <li className="mt-52 flex items-center p-4 hover:bg-blue-200">
      <i className="material-icons mr-3"><FaInfoCircle size={20} /></i> 
      <button onClick={handleInstructions}>Manual de instrucciones</button>
    </li>
        </ul>
      </div>
      <div className="flex-grow bg-black bg-opacity-50" onClick={onClose}></div>
    </div>
  );



}
function MyPdfViewer() {
  return (
    <div style={{ width: 600 }}>
      <Document file="/ManualDeInstruccionesValiny.pdf">
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}
export default Menu;