/* var  { mongoose } = require('./backend/db/config')
var {Smodel} = require('./backend/model/user');
var express=require('express');
var bodyParser=require('body-parser'); */
/* var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken'); */
/* const _=require('lodash'); */
let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
 //var app=express();
/* app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Access-Control-Allow-Methods','PUT,GET,POST,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers',"Origin,X-Requested-With,Content-Type,Accept");
  
    next();
});
//api 
app.use(bodyParser.json() */
/* app.post('/data1',(req, res)=> {
  //console.log(req.body);
	 var body = _.pick(req.body,['firstname','lastname','email','password','contact']);
   //console.log(body);
   var newUser = new use(body);
   //console.log(newUser);
   //console.log(req.body);
     newUser.save().then(()=>{
      //console.log(newUser);
        return newUser.generateAuthToken();
    })
      .then((token) =>{
        res.header('x-auth',token).send(newUser);        
    })
    .catch((error)=>{
        res.status(404).send(error);
    }); */
/*a pp.post('/chatbox',(req, res)=> {
  //console.log(req.body);
    var myData1 = new Smodel(req.body);
   //console.log(myData1);
  myData1.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send(JSON.stringfy("unable to save to database"));
    }); 
 
}); */
/*app.get('/data3',(req,res)=> {
  console.log(req.query);
   use1.find({category : req.query['category']}).then((docs)=>{
res.send(docs)
console.log("hello");
}).catch((err)=>{
res.status(400).send(err);
}) ;
}); */
//sockets
io.on('connection', (socket) => {
  
  socket.on('disconnect', function(){
    io.emit('users-changed', {user: socket.nickname, event: 'left'});   
  });
 
  socket.on('set-nickname', (nickname) => {
    socket.nickname = nickname;
    console.log(socket.nickname );
    io.emit('users-changed', {user: nickname, event: 'joined'}); 
    //console.log(user); 
  });
  
  socket.on('add-message', (message) => {
    io.emit('message', { from: socket.nickname,text: message.text, created: new Date()});  
   // console.log("done");  
  });
});
 
var port = process.env.PORT || 3000;
http.listen(port, function(){
   console.log('listening in http://localhost:' + port);
});