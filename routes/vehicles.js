var express = require('express');
var router = express.Router();

var Vehicle = require('../models/vehicle');

router.get('/:color?/:brand?/:license_plate?', function(request, response, next) {
    var license_plate = request.params.license_plate;
    var color = request.params.color;
    var brand = request.params.brand;

    var vehicles = new Vehicle();

    if (!license_plate && !color && !brand) {
        vehicles.all((error, rows) => {
            if (error) {
                throw error;
            }
            response.status(200).json(rows);
        });
    } else {
        var where = 'WHERE 1 = 1 ';
        where += license_plate ? `AND license_plate = "${license_plate}"` : '';
        where += color ? `AND color = "${color}"` : '';
        where += brand ? `AND brand = "${brand}"` : '';
        
        vehicles.listBy(where, (error, rows) => {
            if (error) {
                throw error;
            }
            response.status(200).json(rows);
        });
    }
});

router.get('/:id', function(request, response) {
    var vehicles = new Vehicle();
    
    vehicles.byId(request.params.id, (error, rows) => {
        if (error) {
            throw error;
        }
        response.status(200).json(rows);
    });
});

router.post('/create', function(request, response) {
    var vehicles = new Vehicle();

    vehicles.create(request.body, (error, responseDb) => {
        if (error) {
            throw error;
        }        
        response.send(responseDb);
    });
});

router.put('/:id/update', function(request, response) {
    var vehicles = new Vehicle();
    var id = request.params.id;
    var values = request.body;

    vehicles.update(id, values, (error, responseDb) => {
        if (error) {
            throw error;
        }        
        response.send(responseDb);
    });
});

router.delete('/:id/delete', function(request, response) {
    var vehicles = new Vehicle();
    var id = request.params.id;

    vehicles.delete(id, (error, responseDb) => {
        if (error) {
            throw error;
        }        
        response.send(responseDb);
    });
});

module.exports = router;