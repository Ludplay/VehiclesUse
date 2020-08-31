var express = require('express');
var router = express.Router();

var DriverVehicle = require('../models/driver-vehicle');

router.get('/', function(request, response, next) {

    var driversVehicles = new DriverVehicle();

    driversVehicles.all((error, rows) => {
        if (error) {
            throw error;
        }
        response.status(200).json(rows);
    });
});

router.post('/create', function(request, response) {
    var driversVehicles = new DriverVehicle();

    driversVehicles.checkAvailability(request.body, (error, rows) => {
        if (error) {
            throw error;
        }     
        if (rows.length == 0) {
            driversVehicles.create(request.body, (error, responseDb) => {
                if (error) {
                    throw error;
                }        
                response.send(responseDb);
            });
        } else {
            response.status(403).send("Error! Vehicle or driver unavailable on this date.");
        }
    });
});

router.put('/:id/update', function(request, response) {
    var driversVehicles = new DriverVehicle();
    var id = request.params.id;
    var values = request.body;

    driversVehicles.update(id, values, (error, responseDb) => {
        if (error) {
            throw error;
        }        
        response.send(responseDb);
    });
});


module.exports = router;