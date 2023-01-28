const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const fileSchema = new Schema({
    name: String,
    file: String
  });
  module.exports = mongoose.model('fileSchema', fileSchema)