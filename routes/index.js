var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET REQUEST */
router.get('/amandeep', function(req, res, next) {
    res.render('Amandeep');
});
router.get('/simi', function(req, res, next) {
    res.render('Simi');
});
router.get('/preeti', function(req, res, next) {
    res.render('Preeti');
});
router.get('/kulwant', function(req, res, next) {
    res.render('Kulwant');
});
router.get('/satvir', function(req, res, next) {
    res.render('Satvir');
});


module.exports = router;
