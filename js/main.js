$(function(){
   $(".button").click(function(){
    $(".change").addClass("red")
   });
   });


$(function(){
   $("li").each(function(index,element)
{
   console.log(index);
})
var array=["あ","い","う","え"];
$.each(array,function(index,value)
{
   console.log(value);
   console.log(index);
})

});

$(function(){
   $(".text").click(function(){
      $(this).css("color","red")
      
   })
})
