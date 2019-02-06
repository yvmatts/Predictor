var express = require('express');
var router = express.Router();
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/home/yvmatts/Documents/Development/Predictor');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  }
});

var upload = multer({ storage: storage });


/* GET home page. */
router.get('/home', function(req, res, next) {
//  console.log(req.file);
  res.render('index');
});

router.post('/home',upload.single('img'), function(req, res, next) {
  console.log(req.file.mimetype);
//  res.send("File Uploaded");
res.send(req.file.mimetype);
});



module.exports = router;
