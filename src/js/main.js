
$(function(){

    $menu = $('.nav-menu-phone');
    $menuTable = $('#menu-phone');

    $menu.on('click', function(){
       $menuTable.toggleClass('open');

       if($menuTable.hasClass('open')){
           $('#menu-phone').css('display', 'block');
           $('.logo a').css('color', 'red');
       }
       else{
           $('#menu-phone').css('display', 'none');
       }
    })

}); // ready-end




//$(document).on("click", ".class", function(){