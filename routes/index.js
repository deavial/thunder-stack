var express = require('express');
var stormpath = require('express-stormpath');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('index', { name: 'Dave' });
});


router.get('/private', stormpath.loginRequired, function(req, res, next) {
    res.render('private', {
    	email: req.user.email
    });
});


module.exports = router;