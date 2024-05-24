const request = require('supertest');
const expect = require('chai').expect;
const app = require('../server'); // Importa tu app

describe('API Tests', function() {
    it('should return a 200 response for the root route', function(done) {
        request(app)
            .get('/')
            .end(function(err, res) {
                expect(res.statusCode).to.equal(200);
                done();
            });
    });

    // Pruebas para el controlador de administradores
    describe('Administradores Controller', function() {
        it('should create a new administrator', function(done) {
            request(app)
                .post('/api/administradores/create')
                .send({ /* datos del administrador */ })
                .end(function(err, res) {
                    expect(res.statusCode).to.equal(201);
                    done();
                });
        });

        // Añade aquí más pruebas para las otras rutas de administradores
    });

    // Pruebas para el controlador de estudiantes
    describe('Estudiantes Controller', function() {
        it('should create a new student', function(done) {
            request(app)
                .post('/api/estudiantes/create')
                .send({ /* datos del estudiante */ })
                .end(function(err, res) {
                    expect(res.statusCode).to.equal(201);
                    done();
                });
        });

        // Añade aquí más pruebas para las otras rutas de estudiantes
    });
});
