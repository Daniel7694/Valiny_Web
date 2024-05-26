// Importa las bibliotecas necesarias
const supertest = require('supertest');
const app = require('../server'); // Importa tu aplicación Express
const expect = require('chai').expect;

// Crea tu suite de pruebas con Mocha
describe('API Tests', function() {
  it('debería devolver todos los estudiantes', function(done) {
    // Usa Supertest para hacer una solicitud HTTP a tu API
    supertest(app)
      .get('/api/estudiantes')
      .end(function(err, res) {
        // Asegúrate de que la respuesta tenga el estado HTTP correcto y el formato de respuesta esperado
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body.success).to.be.true;
        expect(res.body.data).to.be.an('array');
        done();
      });
  });
});
