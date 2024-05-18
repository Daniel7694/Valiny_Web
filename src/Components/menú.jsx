import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaInfoCircle, FaBookReader, FaRegListAlt } from 'react-icons/fa';
import MyPdfViewer from './MyPdfViewer'; // Importa el componente MyPdfViewer

function Menu({ setToken, onClose, onInstructionsClick }) {
  const [showPdf, setShowPdf] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = function(event) {
      window.history.go(1);
    };
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
  const imgHandler = onInstructionsClick ? onInstructionsClick : (
    <img 
      className='w-full h-full mb-4 mx-auto my-auto opacity-50'  
      src="/colegio.jpg" 
      alt="Imagen por defecto" 
    />  );

  // Si no se proporciona onInstructionsClick, se utiliza handleInstructions
  const instructionsHandler = onInstructionsClick ? onInstructionsClick : handleInstructions;

  if (showPdf) {
    return <MyPdfViewer file="/ManualDeInstruccionesValiny.pdf" />;
  }

  return (
    <div className="fixed inset-0 flex z-50">
      <div className="w-96 h-full bg-white border-r font-serif shadow-lg relative">
        <button onClick={handleLogout} className="mt-4 text-blue-500 p-4">Log Out</button>
        <div className="mt-12 p-4 text-center">
          <p className="font-bold text-lg">Nombre de prueba</p>
          <p>Rol de prueba</p>
        </div>
        <ul className="mt-8">
          <button onClick={handleReportes} className='w-full'>
            <li className="mt-12 flex items-center p-4 hover:bg-blue-100">
              <FaRegListAlt size={20} color="#3B82F6" />
              <span className="ml-2">Reportes</span>
            </li>
          </button>
          <button onClick={handleCursos} className='w-full'>
            <li className="flex items-center p-4 hover:bg-blue-100">
              <FaBookReader size={20} color="#3B82F6" />
              <span className="ml-2">Cursos</span>
            </li>
          </button>
        </ul>
        <div className="absolute bottom-0 left-0 ">
          <button onClick={instructionsHandler} className="flex items-center justify-center p-4 hover:bg-blue-200 w-full">
            <FaInfoCircle size={20} color="#3B82F6" />
            <span className="ml-2">Manual de instrucciones</span>
          </button>
        </div>
      </div>
      <div 
      
      className="flex-grow bg-black bg-opacity-50" onClick={onClose}>{imgHandler}</div>
      
    </div>
  );
}

export default Menu;
