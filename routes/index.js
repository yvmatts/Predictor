var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = {name:"Yash", age:"21"};
  res.render('index', { title:[
              {name:"Yash"},
              {name:"Ajay"}
            ]
      });
});

module.exports = router;
