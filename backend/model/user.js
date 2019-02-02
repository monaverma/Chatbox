
'use strict';
const mongoose = require('mongoose');
/* const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken'); */
/* const _ = require('lodash');  */
var userSchema =  mongoose.Schema({
   name:String,
   msgDate:String,
   history:String,
});


 /* userSchema.pre('save',function(next){
     var user=this;
     if(user.isModified('password')){
         bcrypt.genSalt(5,(err,salt)=>{
             bcrypt.hash(user.password,salt,(err,hash)=>{
                 user.password=hash;
                 next();
             });
         });
     }else{
         next();
     }      
 }); */




var Smodel = mongoose.model('Smodel', userSchema);
module.exports={Smodel};
