// Read more link
$('.readmore a').click(function() { // target and 'click()' function
  $('.readless.hide').css('display', 'block'); // makes 'p' visible
  $('#show-this-on-click').slideDown(); // shows 'p' element
  $('.readmore a').hide(); // hides 'read more' link
  $('.readless.hide a').show(); // shows 'read less' link
  event.preventDefault(); // prevents browser default behavior
});
// Read less link
$('.readless.hide a').click(function() { // target and 'click()' function
  $('.readless.hide').css('display', 'none'); // makes 'p' not visible
  $('#show-this-on-click').slideUp(); //  hides 'p' element
  $('.readmore a').show(); // shows 'read more' link
  $('.readless.hide a').hide(); // hides 'read less' link
  event.preventDefault(); // prevents browser default behavior
});

// Learn more link
$('.learnmore').click(function() { // target and 'click()' function
  $('.learnmore').hide(); // hides 'learnmore' link
  $('span.hide').css('display', 'block'); // makes span visble
  $('#learnmoretext').slideDown(); // shows 'span' element
  event.preventDefault(); // prevents browser default behavior
});
