// $('li').click(function(ev) {
//     ev.stopPropagation();
// }).has('ul').addClass('expand').click(function() {
//     $(this).toggleClass('combine').children('ul').stop(true).toggle('normal');
// });

$('.no_bd_b').click(function() {
    $(this).next('.list_ul').stop(true).toggle('normal');
});