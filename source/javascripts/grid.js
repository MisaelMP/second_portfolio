//= require jquery
console.log('yep');
$(document).ready(() => {
  $('.text').hide().removeClass('text').addClass('text-js');
console.log( $('.grid-image').length)
$('.grid-image').hover(function(){
    $(this).closest('div').find('.text-js').fadeToggle();
});
});
