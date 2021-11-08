$(document).ready(function () {
   $('.burger').click(function () {
      $(this).toggleClass('is-active');
      $('.burger-list').slideToggle('300');
   })
})