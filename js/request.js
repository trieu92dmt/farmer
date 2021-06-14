$(document).ready(function(){
    $(".sign-btn").click(function(){
        $(".form-content").css("display","block");
    })
    $(".product-sliders").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    })
    $(".requirement-sliders").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    })
})