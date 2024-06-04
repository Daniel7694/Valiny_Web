import React, { useState } from 'react';
import '../index.css'; // Asegúrate de importar el archivo CSS correcto

function Registro() {
  const [formData, setFormData] = useState({
    N_Documento: '',
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white rounded-md shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Registro de Entidades</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="N_Documento" className="block text-gray-700">Numero de documento</label>
            <input
              type="text"
              id="N_Documento"
              name="N_Documento"
              value={formData.N_Documento}
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
              <option value="Directivo">Directivo</option>
              <option value="Orientador">Orientador</option>
              <option value="Docente">Docente</option>
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
