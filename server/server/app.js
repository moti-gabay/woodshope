const express = require("express");
const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
const http = require("http");
const path = require("path");
const {routesInit} = require("./routes/configRoutes");
const { config } = require("./config/secret");
const cors = require("cors")
require("./db/mongoConnect");
const app = express();

 
 // app.listen(5000,() => {
 //     console.log("app started on port 5000");
 // })

// prevent cors problem
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));
routesInit(app);
const server = http.createServer(app);
const port = config.PORT;
server.listen(port);