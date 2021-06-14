$(window).ready(function(){
    $('.dropdown').click(function () {
            $(this).attr('tabindex', 1).focus();
            $(this).toggleClass('active');
    });
    /*End Dropdown Menu*/
})