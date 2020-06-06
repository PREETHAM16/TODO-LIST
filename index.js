var express =require('express');
var app=express();
var tdcj=require("./control/todo-control")
app.set('view engine','ejs');
app.use('/assets',express.static('assets'));
tdcj(app);
app.listen(4000);
console.log('port of 4000')
