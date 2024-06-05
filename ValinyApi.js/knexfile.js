// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '24023',
      database: 'cfgo_ied'
    },
    migrations: {
      directory: './migrations'
    }
  }
};
