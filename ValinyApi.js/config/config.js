const mysql = require('mysql2');
const db = mysql.createConnection({
 host: 'localhost', 
 user: 'root', 
 // Mi contraseña Root
 password: '1014657845', 
 database: 'cfgo_ied',
 authPlugins : {
    mysql_clear_password: () => Buffer.from('1014657845','utf-8' ),
    caching_sh2_password : true,
 }
});
db.connect(function(err) {
 if (err) throw err; 
 console.log('Base de datos conectada');
 
});
module.exports = db; 