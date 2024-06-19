const db = require('../config/config');

const Cursos = {};

Cursos.create = async (curso, result) => {
    const sql =
        `INSERT INTO Cursos (
            Num_Curso
            )
    VALUES (?)`;

    db.query(sql,
        [
            curso.Num_Curso

        ], (err, res) => {
            if (err) {
                console.log('Error al crear el curso: ', err);
                result(err, null);
            }
            else {
                console.log('Curso creado: ');
                result(null, res);
            }
        }
    );
};

Cursos.getById = (id, result) => {
    const sql = 'SELECT * FROM Cursos WHERE ID_Curso = ?';
    db.query(sql, [id], (err, res) => {
        if (err) {
            console.log('Error al buscar el curso: ', err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log('Curso encontrado: ', res[0]);
            result(null, res[0]);
            return;
        }
        // Si no se encuentra ningun curso con ese ID
        result({ message: 'Curso no encontrado' }, null);
    });
};

Cursos.getAll = (result) => {
    const sql = 'SELECT * FROM Cursos';
    db.query(sql, (err, res) => {
        if (err) {
            console.log('Error al buscar los cursos: ', err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log('Cursos encontrados: ', res);
            result(null, res);
            return;
        }
        // Si no se encuentra ningun curso

        result({ message: 'No se encontraron cursos' }, null);
    });
};

Cursos.update = (id, newData, result) => {
    const sql = 'UPDATE ID_Curso SET ? WHERE ID_Curso = ?';
    db.query(sql, [newData, id], (err, res) => {
        if (err) {
            console.log('Error al actualizar el curso: ', err);
            result(err, null);
            return;
        }
        if (res.affectedRows === 0) {
            // No se encontró ninguna clave con ese ID
            result({ message: 'No se encontró ningun curso con ese ID' }, null);
            return;
        }
        console.log('Cursos actualizada correctamente');
        result(null, newData);
    });
};

Cursos.delete = (id, result) => {
    const sql = 'DELETE FROM Cursos WHERE ID_Curso = ?';
    db.query(sql, [id], (err, res) => {
        if (err) {
            console.log('Error al eliminar el curso: ', err);
            result(err, null);
            return;
        }
        if (res.affectedRows === 0) {
            // No se encontró ninguna clave con ese ID
            result({ message: 'No se encontró ningun curso con ese ID' }, null);
            return;
        }
        console.log('Cursos eliminado correctamente');
        result(null, res);
    });
};

module.exports = Cursos;
