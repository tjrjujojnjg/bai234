var moment = require('moment');
var express = require('express');
var app = express();
app.get('/getday',(req,res,next)=>{
    var getday;
    getday = moment().format("DD/MM/yyyy");
    res.send(`today is ${getday}`);
    return next();
});
var server = app.listen(3000, function () {
    console.log('Server is running..');
});