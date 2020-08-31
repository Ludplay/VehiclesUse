var db = require('../db-connection');

module.exports = class Vehicle {

    all(callback) {
        db.query('SELECT * from vehicles', callback);
    }

    byId(id, callback) {
        db.query(`SELECT * from vehicles where id = ${id}`, callback);
    }

    listBy(where, callback) {
        db.query(`SELECT * from vehicles ${where}`, callback);
    }

    create(values, callback) {
        var sql = `INSERT INTO vehicles (license_plate, color, brand, created_at) 
        VALUES ("${values.license_plate}", "${values.color}", "${values.brand}", now())`;                
        db.query(sql, callback);        
    }

    update(id, values, callback) {
        var sql = `UPDATE vehicles SET license_plate = "${values.license_plate}", 
        color = "${values.color}", 
        brand = "${values.brand}", 
        updated_at = now() 
        WHERE id = ${id}`;
        db.query(sql, callback);        
    }

    delete(id, callback) {
        var sql = `DELETE FROM vehicles WHERE id = ${id} LIMIT 1`;
        db.query(sql, callback);
    }
}