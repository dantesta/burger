var express = require("express");
var moment = require('moment');

var router = express.Router();


var burger = require('../models/burger.js');


router.get("/", function(req, res) {
    burger.all(function(data) {
        for (var i = 0; i < data.length; i++) {
            data[i].updated_at = moment(data[i].updated_at).format('ddd, hA');
        }

        res.render('index', { burgers: data })
    })

});


router.post("/", function(req, res) {
    burger.create(['burger_name'], [req.body.name], function(response) {
        res.redirect('/');
    })
})

router.put("/:id", function(req, res) {
    burger.update({ devoured: 1 }, { id: req.params.id }, function(response) {
        res.redirect('/');
    })
})



module.exports = router;