var bp=require('body-parser');
var data=[];
urle=bp.urlencoded({extended:false});
module.exports=function(app){
  app.get('/todo',function(req,res){
    res.render('todo',{todos:data});
  });
  app.post('/todo',urle,function(req,res){
data.push(req.body);
res.json(data);
  });
  app.delete('/todo/:item',function(req,res){
data=data.filter(function(todos){
  return todos.item.replace(/ /g,'-')!==req.params.item;
});
res.json(data);
  });
}
