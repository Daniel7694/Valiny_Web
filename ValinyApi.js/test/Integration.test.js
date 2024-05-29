const supertest = require('supertest');
const app = require('../server'); // Importa tu aplicación Express
const expect = require('chai').expect;


describe('Pruebas de Integración API', function() {
  it('debería crear un estudiante y luego obtenerlo', function(done) {
    // Datos del estudiante a crear
    const newStudent = {
      "ID_Estudiante": 123456789,
      "P_Nombre": "Nombre",
      "S_Nombre": "SegundoNombre",
      "T_Nombre": "TercerNombre",
      "P_Apellido": "Apellido",
      "S_Apellido": "SegundoApellido",
      "Genero": 1,
      "T_Documento": 1,
      "Curso": 1,
      "Administradores": 123456789,
      "Registro": 1
    };

    // Primero, crea un nuevo estudiante
    supertest(app)
      .post('/api/estudiantes/create')
      .send(newStudent)
      .expect(201)
      .then((createResponse) => {
        // Luego, obtén el estudiante que acabas de crear
        return supertest(app)
          .get(`/api/estudiantes/${createResponse.body.data.ID_Estudiante}`)
          .expect(200);
      })
      .then((getResponse) => {
        // Verifica que los datos del estudiante obtenido coincidan con los datos del estudiante creado
        expect(getResponse.body.data.ID_Estudiante.toString()).to.equal(newStudent.ID_Estudiante.toString());
        done();
      })
      .catch((err) => done(err));
  });
});
