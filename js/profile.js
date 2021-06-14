$(document).ready(function () {
    $('#op').on('click',function () {
        $('#bac1').toggle(10);

    })
   
    
})



let btn = document.getElementById('is');
let div = document.getElementById('b21');

btn.addEventListener('click', () => {
    if(div.style.display ==='none'){
        div.style.display ='block';
    }else{
        div.style.display ='none';
    }
    
})

/*---------B22---------*/
function FadeIn1(e1) {
    let btn1 = document.getElementById('is1');
    let div1 = document.getElementById('b22');
    if(div1.style.display ==='none'){
        div1.style.display ='block';
        div1.style.width = '100%';
        div1.style.height = '77%';
        div1.style.transition = '0.5s ease-in 0s';
        btn1.style.display = 'none';
       
    }else{
        div1.style.display ='none';
        div1.style.transition = '0.5s ease-in 0s';
        
       
    }
}
function FadeOut1(e1) {
    let btn1 = document.getElementById('is1');
    let div1 = document.getElementById('b22');
    if(div1.style.display ==='block'){
        div1.style.display ='none';
        div1.style.width = '0%';
        div1.style.height = '0%';
        div1.style.transition = '0.5s ease-in 0s';
        btn1.style.display = 'block';
       
    }
}

/*---------B22---------*/


/*---------B23---------*/
function FadeIn2(e2) {
    let btn2 = document.getElementById('is2');
    let div2 = document.getElementById('b23');
    if(div2.style.display ==='none'){
        div2.style.display ='block';
        div2.style.width = '100%';
        div2.style.height = '77%';
        div2.style.transition = '0.5s ease-in 0s';
        btn2.style.display = 'none';
       
    }else{
        div2.style.display ='none';
        div2.style.transition = '0.5s ease-in 0s';
        
       
    }
}
function FadeOut2(e2) {
    let btn2 = document.getElementById('is2');
    let div2 = document.getElementById('b23');
    if(div2.style.display ==='block'){
        div2.style.display ='none';
        div2.style.width = '0%';
        div2.style.height = '0%';
        div2.style.transition = '0.5s ease-in 0s';
        btn2.style.display = 'block';
       
    }
}

/*---------B23---------*/

window.addEventListener('load',function () {
    document.querySelector('input[type="file"]').addEventListener('change',function () {
        var img = document.getElementById('backgro');
        img.src = URL.createObjectURL(this.files[0]);
    })
  
})
function imageIsLoaded(e) { alert(e);
    
}

window.addEventListener('load',function () {
    document.querySelector('input[class*="file2"]').addEventListener('change2',function () {
        var img = document.getElementById('backgro2');
        img.src = URL.createObjectURL(this.files[0]);
    })
    
})



/*---------B24---------*/
function FadeIn3(e3) {
    let btn3 = document.getElementById('is3');
    let div3 = document.getElementById('b24');
    if(div3.style.display ==='none'){
        div3.style.display ='block';
        div3.style.width = '100%';
        div3.style.height = '77%';
        div3.style.transition = '0.5s ease-in 0s';
        btn3.style.display = 'none';
       
    }else{
        div3.style.display ='none';
        div3.style.transition = '0.5s ease-in 0s';
        
       
    }
}
function FadeOut3(e3) {
    let btn3 = document.getElementById('is3');
    let div3 = document.getElementById('b24');
    if(div3.style.display ==='block'){
        div3.style.display ='none';
        div3.style.width = '0%';
        div3.style.height = '0%';
        div3.style.transition = '0.5s ease-in 0s';
        btn3.style.display = 'block';
       
    }
}

/*---------B24---------*/
/*---------B24---------*/
function FadeIn4(e4) {
    let btn4 = document.getElementById('is4');
    let div4 = document.getElementById('b25');
    if(div4.style.display ==='none'){
        div4.style.display ='block';
        div4.style.width = '100%';
        div4.style.height = '77%';
        div4.style.transition = '0.5s ease-in 0s';
        btn4.style.display = 'none';
       
    }else{
        div4.style.display ='none';
        div4.style.transition = '0.5s ease-in 0s';
        
       
    }
}
function FadeOut4(e4) {
    let btn4 = document.getElementById('is4');
    let div4 = document.getElementById('b25');
    if(div4.style.display ==='block'){
        div4.style.display ='none';
        div4.style.width = '0%';
        div4.style.height = '0%';
        div4.style.transition = '0.5s ease-in 0s';
        btn4.style.display = 'block';
       
    }
}

/*---------B24---------*/
jQuery(function () {
    jQuery('.target').hide();
    jQuery('#div1').show();
})

jQuery('.Single').click(function () {
    jQuery('.target').hide();
    jQuery('#div'+$(this).attr('target')).show();
   
})
$(document).ready(()=>{
    $('.Single').on('click',()=>{
        $('.target').css({'transition':'10s'});
    });
});
   

/*--- changebackground----*/



