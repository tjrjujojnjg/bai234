var moment = require('moment'); 
var express = require('express');
var app = express();
 
app.get('/getday/:a', (req, res, next) => {
    var today = moment().format("DD/MM/yyyy");
   
    var a = Number(req.params['a']);
    var tinhngay = moment().add(a,'day').format("DD/MM/yyyy")
    res.send(`Today is : ${today}`+ `</br>Sau khi tinh: ${tinhngay} ` );
    
    return next();    
});
 
app.get('/getday', (req, res, next) => {
    res.sendFile(__dirname + "/bai03.html");
});
 
var server = app.listen(3000, function () {
console.log('Server is running..');
});