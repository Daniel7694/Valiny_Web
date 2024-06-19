const cursosController = require('../controllers/cursosController');

module.exports = (app) => { 
    app.post('/api/cursos/create', cursosController.register);
    app.get('/api/cursos/:id', cursosController.getById);
    app.put('/api/cursos/:id', cursosController.update);
    app.delete('/api/cursos/:id', cursosController.delete); // Nueva ruta para eliminar un estudiante por su ID
   app.get('/api/cursos', cursosController.getAll);

 

   
}
