var express = require("express");
let cors = require("cors")
var Duck = require("./model");  // class is always uppercase
var app = express();
var port = 8080;
var daffy = new Duck("Daffy");
//our server is more 
app.use(cors())
//get function on my root directory
app.get("/", function (req, res) {
    res.send(daffy);
});
app.listen(port,function(){
    console.log('server is listening on port'+ port)
});
