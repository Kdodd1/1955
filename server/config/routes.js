const mongoose = require('mongoose'),
People = mongoose.model('People'),
Peoples = require('../controllers/people')

module.exports = function(app){
  app.get('/', Peoples.index);
  app.get('/new/:name/', Peoples.create);
  app.get('/remove/:name/', Peoples.delete);
  app.get('/:name', Peoples.getOne);
}
