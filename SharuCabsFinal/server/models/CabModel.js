var mongoose=require('mongoose');
var cabSchema=new mongoose.Schema({

  UserType:{
  type:String
  },
MobileNo:{
  type:String
},

RegisterNo:{
  type:String
},
Model:{
  type:String
},

CabType:{
  type:String
},
LicenseNo:{
  type:String
},
Address:{
  type:String
}


});

module.exports=mongoose.model('CabDriverDetail',cabSchema);
