function signup() {
    var u = document.getElementById("mail").value;
    var p1 = document.getElementById("ten").value;
    var p2=document.getElementById("matk").value;

    if(u== "") {
        alert("Vui lòng nhập tên!");
        return false;
        }
        if(p1 == "") {
        alert("Vui lòng nhập mật khẩu!");
        return false;
        }
        if(p2 == "") {
            alert("Vui lòng Gmail!");
            return false;
            }
            alert("ĐĂNG KÍ THÀNH CÔNG! ")
        return true;
}
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop())
            $("header").addClass("scroll");
        else
            $("header").removeClass("scroll");
    });
})