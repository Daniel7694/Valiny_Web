const Cursos = require('../models/Cursos');

module.exports = {
    register(req, res) {
        const curso = req.body;
        Cursos.create(curso, (err, data) => {
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con el registro del curso',
                    error: err
                });
            }
            return res.status(201).json({
                success: true,
                message: 'El registro se realizó correctamente',
                data: data
            });
        });
    },

    getById(req, res) {
        const cursoId = req.params.id; // Obtener el ID del parámetro de la URL
        Cursos.getById(cursoId, (err, data) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Hubo un error al buscar el curso',
                    error: err
                });
            }
            if (!data) {
                return res.status(404).json({
                    success: false,
                    message: 'No se encontró ningún curso con ese ID'
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Curso encontrado',
                data: data
            });
        });
    },

    getAll(req, res) {
        Cursos.getAll((err, data) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Hubo un error al buscar los cursos',
                    error: err
                });
            }
            if (!data) {
                return res.status(404).json({
                    success: false,
                    message: 'No se encontraron cursos'
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Cursos encontrados',
                data: data
            });
        });
    },

    update(req, res) {
        const cursoId = req.params.id; // Obtener el ID del curso a actualizar
        const newData = req.body; // Obtener los nuevos datos del curso desde el cuerpo de la solicitud

        Cursos.update(cursoId, newData, (err, data) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Hubo un error al actualizar el curso',
                    error: err
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Curso actualizado correctamente',
                data: data
            });
        });
    },

    delete(req, res) {
        const cursoId = req.params.id; // Obtener el ID del curso a eliminar

        Cursos.delete(cursoId, (err, data) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Hubo un error al eliminar el curso',
                    error: err
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Curso eliminado correctamente',
                data: data
            });
        });
    }
};
