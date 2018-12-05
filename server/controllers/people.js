const mongoose = require('mongoose');
const People = mongoose.model("People");

class Peoples{
  index(req, res){
    People.find({}, function(err, peoples){
      if(err){
        console.log("Returned errors", err);
        res.json({message: "error", error: err})
      }else{
        res.json({message: "success", data: peoples})
      }
    })
  }
  create(req, res){
    var name = req.params;
    let person = new People(name);
    person.save(function(err){
      console.log(err);
      res.redirect("/");
    });
  }
  delete(req,res){
    var name = req.params.name;
    People.remove({name: name},function(err){
      res.redirect("/");
    });
  }
  getOne(req,res){
    var name = req.params.name;
    People.find({name: name}, function(err, name){
      if(err){
        console.log("Returned errors",err);
      }else{
        res.json({data: name})
      }
    })
  }

}
module.exports = new Peoples();
