var express = require('express');
var app = express();
var multer = require('multer');

module.exports = function (app) {
  var upload = multer({
    storage: multer.memoryStorage(),
    limits: {fileSize: 3000000}
  }).single('newFile');
  app.post('/',upload, function(req,res){
    res.json({
      name: req.file.originalname,
      size: req.file.size
    });
  });


  
  

};