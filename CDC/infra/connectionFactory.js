const mysql = require('mysql');

function createConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'cdc_project'
    });
}
    
module.exports = function() {
    return createConnection;    
};  
