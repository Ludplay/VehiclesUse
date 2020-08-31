var db = require('../db-connection');

module.exports = class DriverVehicle {

    all(callback) {
        var sql = `SELECT dv.driver_id, d.name, dv.vehicle_id, v.license_plate, 
        v.color, v.brand, dv.start_at, dv.end_at, dv.reason
        FROM drivers_vehicles dv
        INNER JOIN drivers d ON dv.driver_id = d.id
        INNER JOIN vehicles v ON dv.vehicle_id = v.id`; 
        db.query(sql, callback);
    }

    create(values, callback) {
        var sql = `INSERT INTO drivers_vehicles (driver_id, vehicle_id, start_at,
        reason, created_at)
        VALUES ("${values.driver_id}", "${values.vehicle_id}", "${values.start_at}", 
        "${values.reason}", now())`;
        db.query(sql, callback);        
    }

    update(id, values, callback) {
        var sql = `UPDATE drivers_vehicles SET end_at = "${values.end_at}", 
        updated_at = now() 
        WHERE id = ${id}`;
        db.query(sql, callback);
    }

    checkAvailability(values, callback) {
        var sql = `SELECT * FROM drivers_vehicles
        WHERE ( driver_id = ${values.driver_id} OR vehicle_id = ${values.vehicle_id} )
        AND '${values.start_at}' >= start_at 
        AND ('${values.start_at}' <= end_at OR end_at is null)`;        
        db.query(sql, callback);
    }

}