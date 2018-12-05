const mongoose = require('mongoose');

var PeopleSchema = new mongoose.Schema({
  name: {type: String, required: [true, "Name is required"]}
},{timestamps: true});

mongoose.model('People', PeopleSchema);
