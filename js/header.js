$(document).ready(function(){

    $("#search-item").click(function(){
        $(".search-popup").css("visibility","visible")
    })
    $(".close-search").click(function(){
        $(".search-popup").css("visibility","hidden")
    })
})