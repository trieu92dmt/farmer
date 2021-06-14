$(document).ready(function(){
    $("#search-item").click(function(){
        $(".search-popup").css("visibility","visible")
    })
    $(".close-search").click(function(){
        $(".search-popup").css("visibility","hidden")
    })
    $(window).scroll(function(){
        if ($(this).scrollTop())
        {
            $("header").addClass("scroll");
            $(".sub-bar").addClass("sub-bar-visible")
        }
        else{
            $("header").removeClass("scroll");
            $(".sub-bar").removeClass("sub-bar-visible")
        }
    });
    $(".product-sliders").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    })
    $(".requirement-sliders").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
    })
})