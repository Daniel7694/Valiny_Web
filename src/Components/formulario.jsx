import React, { useEffect, useState } from 'react';
import '../index.css'; // Asegúrate de importar el archivo CSS correcto
import Menu from './menú';
import { FaBars } from 'react-icons/fa';

function Registro() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [token, setToken] = useState(null);

  const [ID_Clave, setID_Clave] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
      setToken(storedToken);
      console.log(token);
    }
  }, [token]);

  const handleMenu = () => {
    setIsMenuOpen(true);
  };
  const handleInstructions = () => {
    setIsMenuOpen(false); // Cierra el menú cuando se abre el PDF
  };


  const [formData, setFormData] = useState({
    ID_Admin: '',
    Rol: '',
    Clave: '',
    T_Documento: '',
    P_Nombre: '',
    S_Nombre: '',
    T_Nombre: '',
    P_Apellido: '',
    S_Apellido: '',
    Genero: '',
  });

  const createClave = async (clave) => {
    const response = await fetch('http://192.168.2.103:3000/api/clave/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ Contrasenia: clave }),
    });
  
    if (!response.ok) {
      throw new Error('Error al crear la clave');
    }
  
    const data = await response.json();
    return data.data.ID_Clave; // Devuelve solo el ID_Clave
  };
  
  
  
  const createAdministrador = async (administrador) => {
    const response = await fetch('http://192.168.2.103:3000/api/administradores/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(administrador),
    });
  
    if (!response.ok) {
      throw new Error('Error al crear el administrador');
    }
  
    const data = await response.json();
    return data;
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Primero, crea la clave
      const claveId = await createClave(formData.Clave);
      console.log(claveId);
  
      // Almacena el ID_Clave en el estado
      setID_Clave(claveId);
  
      // Luego, crea el administrador con el ID de la clave creada
      const administradorData = await createAdministrador({
        ...formData,
        Clave: claveId, // Usa el ID_Clave directamente
      }); 
  
      console.log('Administrador creado:', administradorData);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white rounded-md shadow-lg p-8">
      {isMenuOpen && <Menu setToken={setToken} onClose={() => setIsMenuOpen(false)} onInstructionsClick={handleInstructions} />}
      <button onClick={handleMenu}>
            <FaBars size={40} />
          </button>
        <h2 className="text-2xl font-bold mb-6 text-center">Registro de Entidades</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="ID_Admin" className="block text-gray-700">Numero de documento</label>
            <input
              type="text"
              id="ID_Admin"
              name="ID_Admin"
              value={formData.ID_Admin}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Rol" className="block text-gray-700">Rol</label>
            <select
              id="Rol"
              name="Rol"
              value={formData.Rol}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Seleccione su rol</option>
              <option value="1">Directivo</option>
              <option value="2">Orientador</option>
              <option value="3">Docente</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="Clave" className="block text-gray-700">Clave</label>
            <input
              type="password"
              id="Clave"
              name="Clave"
              value={formData.Clave}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="T_Documento" className="block text-gray-700">Tipo de Documento</label>
            <input
              type="text"
              id="T_Documento"
              name="T_Documento"
              value={formData.T_Documento}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="P_Nombre" className="block text-gray-700">Primer Nombre</label>
            <input
              type="text"
              id="P_Nombre"
              name="P_Nombre"
              value={formData.P_Nombre}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="S_Nombre" className="block text-gray-700">Segundo Nombre</label>
            <input
              type="text"
              id="S_Nombre"
              name="S_Nombre"
              value={formData.S_Nombre}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="T_Nombre" className="block text-gray-700">Tercer Nombre</label>
            <input
              type="text"
              id="T_Nombre"
              name="T_Nombre"
              value={formData.T_Nombre}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="P_Apellido" className="block text-gray-700">Primer Apellido</label>
            <input
              type="text"
              id="P_Apellido"
              name="P_Apellido"
              value={formData.P_Apellido}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="S_Apellido" className="block text-gray-700">Segundo Apellido</label>
            <input
              type="text"
              id="S_Apellido"
              name="S_Apellido"
              value={formData.S_Apellido}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Genero" className="block text-gray-700">Género</label>
            <select
              id="Genero"
              name="Genero"
              value={formData.Genero}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Seleccione su género</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registro;
