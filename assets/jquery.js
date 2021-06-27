$("ul").on("click" ,"li", function(e){
    $(this).toggleClass("hoverli");
 
})
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(2000,function(){
        $(this).remove();
    });
    event.stopPropagation();
})
$("input").on("keypress",function(event){
    if(event.which==13){
        var newVal=$("input").val();
        $("input").val("");
        $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>" +newVal+ "</li>");
    }
   
})
$(".fa-check").on("click",function(e){
    $("input").fadeToggle(1000);
})
