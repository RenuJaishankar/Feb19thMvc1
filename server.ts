var express = require("express");
const Duck = require("./model")
var app = express()
var port=8080;
let daffy = new Duck("Daffy")
//using cors config with express
app,use(cors())
//our server is more 
app.get("/", (req,res) => {
    res.send("hello world")
})
app.listen(port,)
