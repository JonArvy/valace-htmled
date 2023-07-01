$(document).ready(function(){
    console.log("asdadasd")
    $(".accordion-1").on("click", ".heading-1", function() {

    $(this).toggleClass("active").next().slideToggle();

    $(".contents-1").not($(this).next()).slideUp(300);
                 
    $(this).siblings().removeClass("active");
    });
   });