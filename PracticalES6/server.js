var express = require("express");

var app = express();
app.use("/bower_components", express.static(__dirname + "/../bower_components"));
app.use(express.static(__dirname));

app.listen(3000);