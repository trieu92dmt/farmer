$(document).ready(function(){
    $(".product").hover(function(){
        //$(".active").css("left",left);
        $(".underline").toggleClass("active");
    })
    var x = 0;
    var y = 0;
    $(".arrow-up[name='price']").click(function(){
        x++;
        if (x%2 == 1)
        {
            $(this).removeClass("arrow-down");
            $(".sub-select[name='price']").css("visibility","visible");
            $(".arrow-up[name='delivery-time']").addClass("arrow-down");
            $(".sub-select[name='delivery-time']").css("visibility","hidden");
        }
        else{
            $(this).addClass("arrow-down");
            $(".sub-select[name='price']").css("visibility","hidden");
        }
    })
    $(".arrow-up[name='delivery-time']").click(function(){
        y++;
        if (y%2 == 1)
        {
            $(this).removeClass("arrow-down");
            $(".sub-select[name='delivery-time']").css("visibility","visible");
            $(".arrow-up[name='price']").addClass("arrow-down");
            $(".sub-select[name='price']").css("visibility","hidden");
        }
        else{
            $(this).addClass("arrow-down");
            $(".sub-select[name='delivery-time']").css("visibility","hidden");
        }
    })
    $("#search-item").click(function(){
        $(".search-popup").css("visibility","visible")
    })
    $(".close-search").click(function(){
        $(".search-popup").css("visibility","hidden")
    })
})
