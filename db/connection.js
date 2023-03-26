const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employees_db'
});

connection.connect(function(err) {
    if(err) throw err;
});

module.exports = connection;

/*
class DatabaseInteraction {
    constructor(connection) {

    }

    // define our database methods
    getDepartments () {
        db.query("SELECT * FROM deparment;", callback)

        // IF this was turned in to a promise 
        // then we can handel promise using .then() .catch()
        db.promise().query("SELECT * FROM deparment;").then(data => {
            console.log(data);
        });
    }
}
*/