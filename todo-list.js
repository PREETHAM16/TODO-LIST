$(document).ready(function(){
  $('form').on('submit',function(){
    var item=$('form input');
    var todos={item:item.val()};
    console.log(item);
    $.ajax({
      type:'POST',
      url:'/todo',
      data:todos,
      success: function(data){
        location.reload();
      }
    });
  });
$('li').on('click',function(){
  var item=$(this).text().trim().replace(/ /g,"-");
  console.log(item);
  $.ajax({
  type:'DELETE',
  url:'/todo/'+item,
  success:function(data){
    location.reload();
  }
  });
});
});
