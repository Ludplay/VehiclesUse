var db = require('../db-connection');

module.exports = class Driver {

    all(callback) {
        db.query('SELECT * from drivers', callback);
    }

    byId(id, callback) {
        db.query(`SELECT * from drivers where id = ${id}`, callback);
    }

    listBy(where, callback) {
        db.query(`SELECT * from drivers ${where}`, callback);
    }

    create(values, callback) {
        var sql = `INSERT INTO drivers (name, created_at) 
        VALUES ("${values.name}", now())`;                
        db.query(sql, callback);        
    }

    update(id, values, callback) {
        var sql = `UPDATE drivers SET name = "${values.name}",
        updated_at = now() 
        WHERE id = ${id}`;
        db.query(sql, callback);
    }

    delete(id, callback) {
        var sql = `DELETE FROM drivers WHERE id = ${id} LIMIT 1`;
        db.query(sql, callback);
    }
}