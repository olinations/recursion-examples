// Appends every number from start to end
var basicCountUp = function(start, end) {
  var current = start;
  $('.basic-count-up-display').html('');

  var basicCountUpRecursion = function(current, end) {
    if (parseInt(current) <= parseInt(end)) {
      $('.basic-count-up-display').append('<div>' + current + '</div>');
      current++;
      basicCountUpRecursion(current, end);
    }
  };

  basicCountUpRecursion(current, end);

};

// Calls function on submit
$('.basic-count-up-submit').click(function() {
  var start = $('.basic-count-up-start').val();
  var end = $('.basic-count-up-end').val();
  $('.basic-count-up-start').val('');
  $('.basic-count-up-end').val('');
  basicCountUp(start, end);
});