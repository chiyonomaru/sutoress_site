$(function(){
  $('.svglogo').on('click', function(){
    $('svg', $(this)).addClass('active');
    $('p', $(this)).remove();
  });
});