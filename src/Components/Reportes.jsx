import React from 'react';


const Reportes = () => {
  // Datos de ejemplo
  const data = [
    { categoria: 'Asistencia', porcentaje: 5.4054 },
    { categoria: 'Falla', porcentaje: 94.5946 },
    { categoria: 'Retardo', porcentaje: 0 },
    { categoria: 'Evasion', porcentaje: 0 },
    { categoria: 'Falla Justificada', porcentaje: 0 },
  ];

  const students = [
    'Erik Ricaurte',
    'Jeampierre niete',
    'Cristian Lombana',
    'Heidy Prieto',
    'Daniela Gomez'
  ];

  // Función para obtener un estudiante aleatorio
  const getRandomStudent = () => {
    return students[Math.floor(Math.random() * students.length)];
  };


  const randomStudents = Array.from({ length: 5 }, () => getRandomStudent());

  return (
    <div style={{ margin: 'auto', marginTop: '20px', width: '80%', display: 'flex' }}>
      <div style={{ flex: '1', marginRight: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#007bff' }}>Reporte Específico</h1>
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Estadísticas</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #007bff' }}>
            <thead style={{ backgroundColor: '#007bff', color: '#fff' }}>
              <tr>
                <th style={{ padding: '8px', border: '1px solid #007bff' }}>Categoría</th>
                <th style={{ padding: '8px', border: '1px solid #007bff' }}>Porcentaje</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td style={{ padding: '8px', border: '1px solid #007bff' }}>{item.categoria}</td>
                  <td style={{ padding: '8px', border: '1px solid #007bff' }}>{item.porcentaje}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Estudiantes</h2>
          <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
            {randomStudents.map((student, index) => (
              <li key={index} style={{ marginBottom: '5px' }}>{student}</li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ flex: '1' }}>
      <img src="images/porcentajes.jpg" alt="" style={{ width: '500px', height: '480px' }} />

      </div>
    </div>
  );
};

export default Reportes;