import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Importa el ícono FaBars

const Cursos = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  const handleMenu = () => {
  
    navigate('/Menu');
  };
  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.get('http://192.168.1.15:3000/api/estudiantes');
          setStudents(response.data.data);
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className='flex flex row'>
        <button onClick={handleMenu} ><FaBars size={40}/></button> {/* Reemplaza "Menu" con el ícono FaBars */}
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
    <td className="px-5 py-5 border-b border-gray-200 text-sm font-family: ui-serif, Georgia, Cambria, Times New Roman Times, serif">{student['Nombre completo']}</td>
    <td className="px-5 py-5 border-b border-gray-200 text-sm font-family: ui-serif, Georgia, Cambria, Times New Roman Times, serif">{student.Registro}</td>
  </tr>
))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cursos;
