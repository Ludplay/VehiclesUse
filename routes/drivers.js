var express = require('express');
var router = express.Router();

var Driver = require('../models/driver');

router.get('/:name?', function(request, response, next) {
    var name = request.params.name;

    var drivers = new Driver();

    if (!name) {
        drivers.all((error, rows) => {
            if (error) {
                throw error;
            }
            response.status(200).json(rows);
        });
    } else {
        var where = 'WHERE 1 = 1 ';
        where += name ? `AND name = "${name}"` : '';
        
        drivers.listBy(where, (error, rows) => {
            if (error) {
                throw error;
            }
            response.status(200).json(rows);
        });
    }
});

router.get('/:id', function(request, response) {
    var drivers = new Driver();
    
    drivers.byId(request.params.id, (error, rows) => {
        if (error) {
            throw error;
        }
        response.status(200).json(rows);
    });
});

router.post('/', function(request, response) {
    var drivers = new Driver();

    drivers.create(request.body, (error, responseDb) => {
        if (error) {
            throw error;
        }        
        response.send(responseDb);
    });
});

router.put('/:id', function(request, response) {
    var drivers = new Driver();
    var id = request.params.id;
    var values = request.body;

    drivers.update(id, values, (error, responseDb) => {
        if (error) {
            throw error;
        }        
        response.send(responseDb);
    });
});

router.delete('/:id', function(request, response) {
    var drivers = new Driver();
    var id = request.params.id;

    drivers.delete(id, (error, responseDb) => {
        if (error) {
            throw error;
        }        
        response.send(responseDb);
    });
});

module.exports = router;