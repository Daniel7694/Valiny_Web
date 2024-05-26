// Importa las bibliotecas necesarias
const supertest = require('supertest');
const app = require('../server'); // Importa tu aplicación Express
const expect = require('chai').expect;

describe('API Tests', function() {
    it('debería devolver un administracion específico', function(done) {
      // Usa un ID de estudiante válido para esta prueba
      const adminId = '1022926852';
  
      supertest(app)
        .get(`/api/administradores/${adminId}`)
        .end(function(err, res) {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body.success).to.be.true;
          expect(res.body.data).to.be.an('object');
          // Convierte el Documento a cadena de texto antes de hacer la comparación
          expect(res.body.data.Documento.toString()).to.equal(adminId);
          done();
        });
    });
  });