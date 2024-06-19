/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('Cursos', function(table) {
      table.increments('ID_Curso').primary();
      table.string('Num_Curso', 4).notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('Cursos');
  };
  
