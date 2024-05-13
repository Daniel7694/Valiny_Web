import React, { useState } from 'react';

function Registros() {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();

    // Datos a enviar
    const data = {
      ID_Admin: usuario,
      password: contraseña,
    };

    // Opciones de la solicitud fetch
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };

    // Realizar la solicitud a la API
    fetch('http://192.168.2.103:3000/api/administradores/authenticate', options)
    .then((response) => response.json())
    .then((data) => {
      // Aquí puedes manejar la respuesta de la API
      if (data.message) {
        alert(data.message);
      }
    })
    .catch((error) => {
      // Aquí puedes manejar cualquier error que ocurra durante la solicitud
      console.error('Error:', error);
    });
  
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl text-center font-semibold mb-4 ">DEVIU SYSTEM</h2>
        <h2 className="text-2xl font-semibold mb-4">esta es la pantalla</h2>
        <h3 className="text-lg font-semibold mb-4">de registro </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="usuario" className="block text-sm font-medium text-gray-700">
              Usuario:
            </label>
            <input
              type="text"
              id="usuario"
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Ingresa tu usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contraseña" className="block text-sm font-medium text-gray-700">
              Contraseña:
            </label>
            <input
              type="password"
              id="contraseña"
              className="mt-1 p-2 border rounded-md w-full"
              placeholder="Ingresa tu contraseña"
              value={contraseña} 
              onChange={(e) => setContraseña(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-3xl w-full hover:bg-blue-600"
          >
            Iniciar sesión
          </button>
          <h2 className='text-center mt-2'>¿Olvidaste la contraseña?</h2>
        </form>
      </div>
    </div>
  );
}

export default Registros;
