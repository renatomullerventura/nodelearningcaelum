module.exports = function() {
    const mysql = require('mysql');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'cdc_project'
    });
}();
