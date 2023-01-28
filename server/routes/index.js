var express = require('express');
var router = express.Router();
const multer = require("multer");
const mongoose = require('mongoose')
const fileSchema = require('./fileSchema')


const fs = require("fs");
mongoose.connect("mongodb+srv://demo:demo@cluster0.yvlwkl3.mongodb.net/?retryWrites=true&w=majority", () => {
  console.log("Connected to MongoDB");
});






/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


const upload = multer();
router.post("/upload", upload.single("file"), async function(req, res, next){
 console.log(req.body.name)
 const file = new fileSchema({name: req.body.name, file: req.body.file})
file.save()
})



router.post("/upload", upload.single("file"), async function(req, res, next){
  
}),

module.exports = router;