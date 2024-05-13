import React from 'react';
import { useNavigate } from 'react-router-dom';

function Menu(){
  const navigate = useNavigate();
const handleLogout = () => {
  
  navigate('/');
};



  return (
    <div className="mt-4  w-80 h-screen bg-white border-r font-serif	font-family: ui-serif, Georgia, Cambria, Times New Roman Times, serif">
      <button onClick={handleLogout} className="mt-4 text-blue-500 p-4">Log Out</button>
      <div className="mt-12 p-4 text-center">
        <p className="font-bold text-lg ">Cristian Lombana</p>
        <p>Orientador</p>
      </div>
      <ul className="mt-8">
      <button className='w-full'><li className="mt-12 flex items-center p-4 hover:bg-blue-100">
          <i className="material-icons mr-3"></i> Reportes
        </li></button>
        <button className='w-full'><li className="flex items-center p-4 hover:bg-blue-100">
        <i className="material-icons mr-3"></i> Cursos
        </li></button>
        <li className="mt-52 flex items-center p-4 hover:bg-blue-200">
          <div className="material-icons mr-3"><a href="#">Manual de instrucciones</a></div>
        </li>
      </ul>
    </div>
  );
};

export default Menu;