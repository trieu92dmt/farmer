$(document).ready(function(){
    $("button[name='time-option']").click(function(){
        $("button[name='time-option']").removeClass("active");
        $(this).addClass("active");
    })
    $("input[name='input-time']").focus(function(){
        $("button[name='time-option']").removeClass("active");
        $(this).removeClass("active");
    })
    $("input[name='input-time']").blur(function(){
        if ($("input[name='input-time']").val()){
            $("button[name='time-option']").removeClass("active");
            $(this).addClass("active");
        }
    })
})

