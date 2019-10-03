const mysql = require('mysql');

function createDbConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'cdc_project'
    });
}
    
module.exports = function() {
    return createDbConnection;    
};  
