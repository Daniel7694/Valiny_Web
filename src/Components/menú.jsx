import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TbReportSearch } from "react-icons/tb";
import { FaBook, FaInfoCircle } from 'react-icons/fa';


function Menu({ setToken }){
  const navigate = useNavigate();


  const handleLogout = () => {
    // Borrar el token del almacenamiento local
    localStorage.removeItem('token');
  
    // Actualizar el estado de la aplicación
    setToken(null);
  
    // Prevenir la navegación hacia atrás
    window.history.pushState(null, document.title, window.location.href);
  
    window.onpopstate = function(event) {
      window.history.go(1);
    };
    // Redirigir al usuario a la página de inicio de sesión
    navigate('/');
  };
  
const handleCursos = () => {
  
  navigate('/Cursos');
};

const handleReportes = () => {
  
  navigate('/Reportes');
};



  return (
    <div className="mt-4  w-80 h-screen bg-white border-r font-serif	font-family: ui-serif, Georgia, Cambria, Times New Roman Times, serif">
      <button onClick={handleLogout} className="mt-4 text-blue-500 p-4">Log Out</button>
      <div className="mt-12 p-4 text-center">
        <p className="font-bold text-lg ">Nombre de prueba</p>
        <p>Rol de prueba</p>
      </div>
      <ul className="mt-8">
      <button onClick={handleReportes} className='w-full'><li className="mt-12 flex items-center p-4 hover:bg-blue-100">
          <i className="material-icons mr-3"><TbReportSearch size={20}/></i> Reportes
        </li></button>
        <button  onClick={handleCursos} className='w-full'><li className="flex items-center p-4 hover:bg-blue-100">
        <i className="material-icons mr-3"><FaBook size={20} /></i> Cursos
        </li></button>
        <li className="mt-52 flex items-center p-4 hover:bg-blue-200">
        <i className="material-icons mr-3"><FaInfoCircle size={20} /></i> <a href="">Manual de instrucciones</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;