var express = require('express');
var router = express.Router();

var path = require('path');

router.get('/index', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../views/formulario.html'));
});

module.exports = router;
