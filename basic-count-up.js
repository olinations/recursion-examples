// Logs and appends every number from start to end
var basicCountUp = function(start, end) {
  
  var current = start;

  var basicCountUpRecursion = function(current, end) {
    if (current <= end) {
      console.log(current);
      current++;
      basicCountUpRecursion(current, end);
    }
  };

  basicCountUpRecursion(current, end);

};

basicCountUp(3,11);