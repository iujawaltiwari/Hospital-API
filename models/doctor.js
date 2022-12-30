const { MongoMissingCredentialsError } = require('mongodb');
const mongoose = require('mongoose');

//doctor schema
const doctorSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  phone:{
    type: Number,
    required: true,
  },
  password:{
    type: String,
    required: true
  }
},{
  timestamps: true
});

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;