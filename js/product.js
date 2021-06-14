$(window).ready(function(){
    $(".image-show").slick({
    })
    $(".requirement-sliders").slick({
        slidesToShow: 4,
        slidesToScroll: 3,
    })
    $(".thumbnail").click(function(){
        $(".thumbnail").removeClass("click");
        $(this).addClass("click");
    })
    $(".thumbnail>img").click(function(){
        var src = $(this).attr('src');
        $(".slick-active").attr('src',src);
    })
    var width_wrapper = parseFloat($(".thumbnails").css('width'));
    var width_translate = width_wrapper/2;
    var sub_width = parseFloat($(".thumbnail-container").css('width')) - width_wrapper;
    var rsub_width = sub_width;
    var lsub_width = 0;
    $(".next-btn").click(function(){
        if (rsub_width > width_translate)
        {
            $(".thumbnail-container").css('transform','translateX('+(-(width_translate+lsub_width))+'px'+')');
            rsub_width = rsub_width - width_translate;
            lsub_width = lsub_width + width_translate;
        }
        else if (rsub_width > 0){
            $(".thumbnail-container").css('transform','translateX('+(-sub_width)+'px'+')');
            rsub_width = 0;
            lsub_width = sub_width;
        }
    })
    $(".prev-btn").click(function(){
        if (lsub_width > width_translate)
        {
            $(".thumbnail-container").css('transform','translateX('+(width_translate-lsub_width)+'px'+')');
            lsub_width = lsub_width - width_translate;
            rsub_width = rsub_width + width_translate;
        }
        else if (lsub_width > 0){
            $(".thumbnail-container").css('transform','translateX(0px)');
            lsub_width = 0;
            rsub_width = sub_width;
        }
    })
    $(".contact-btn").click(function(){
        $(".chatbox-container").css('visibility','visible')
    })
    $(".answer-btn").click(function(){
        $(".answer-form").css('display','block');
    })
})