$(document).ready(function(){
  
    $("#btn").click(function(){

        $("p").hide(3000);
    })
    $("#btn1").click(function(){

        $("p").show(3000);
    })
    $("#btn2").click(function(){

        $("p").toggle(3000);
    })

})