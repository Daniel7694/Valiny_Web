const mysql = require('mysql');
const db = mysql.createConnection({
 host: 'cfgo-ied.mysql.database.azure.com', 
 user: 'nataly', 
 // Mi contraseña Root
 password: '1022334054Na', 
 database: 'cfgo-ied',
 connectTimeout: 30000,
 authPlugins : {
    mysql_clear_password: () => Buffer.from('1022334054Na','utf-8' ),
    caching_sh2_password : true,
 }
});
db.connect(function(err) {
 if (err) throw err; 
 console.log('Base de datos conectada');
 
});
module.exports = db; 