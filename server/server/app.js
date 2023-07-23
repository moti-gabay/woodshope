const express = require("express");
const http = require("http");
const path = require("path");
const {routesInit} = require("./routes/configRoutes");
const { config } = require("./config/secret");
const cors = require("cors")
require("./db/mongoConnect");


const nodemailer = require('nodemailer');
const multer = require('multer');
const bodyParser = require("body-parser");
const fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
var to;
var subject;
var body;
// var path;
var Storage = multer.diskStorage({
    destination:function(req,file,callback){
     callback(null,'./images')
    } ,
    filename:function(req,file,callback){
     callback(null,file,this.filename + "_" + Date.now() + "_" + file.originalname)
    }
 })
 
 var upload = multer({
     storage:Storage
 }).single('image')
 
 app.use(express.static('public'))
 
 app.get("/",(req,res) => {
     res.sendFile("/index.html")
 })
 
 app.post('/sendmail',(req,res) => {
 
 
     upload(req,res,function(err){
         if(err){
             console.log(err);
             return res.and("something went wrong"); 
         }else{
             to = req.body.to;
             subject = req.body.subject;
             body = req.body.body;
 
             path = req.file.path
             console.log(to);
             console.log(subject);
             console.log(body);
             console.log(path);
 
 
             var transporter = nodemailer.createTransport({
                 service:'gmail',
                 user:'motigabay18@gmail.com',
                 pass:'moti12345678@#'
             })
             var mailOptions = {
                 from:"motigabay18@gmail.com",
                 to:to,
                 subject:subject,
                 text:body,
                 attachment:[
                     {
                         path:path
                     }
                 ]
             }
             transporter.sendMail(mailOptions,function(err,info){
                 if(err){
                     console.log(err);
                 }else{
                     console.log("Email send" + info.response);
                 fs.unlink(path,function(err){
                     if(err){
                         return res.and(err)
                     }else{
                         console.log("delete");
                         return res.redirect('/result.html')
                     }
                 } )
                 }
             })
         }
     })
 })
 
 // app.listen(5000,() => {
 //     console.log("app started on port 5000");
 // })

// prevent cors problem
app.use(cors());
app.use(express.json());
// app.use(express.static(path.join(__dirname,"public")));
routesInit(app);
const server = http.createServer(app);
const port = config.PORT;
server.listen(port);