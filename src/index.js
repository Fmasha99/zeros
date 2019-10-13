module.exports = function zeros(expression) {
  var result = BigInt(1);
  while(expression.indexOf('*') != -1) {
    var valueToCount = expression.substring(0, expression.indexOf('*'));
    expression = expression.substring(expression.indexOf('*') + 1);
    result *= factorial(valueToCount);
  }
  result *= factorial(expression);
  return countZeros(result);
}

function factorial(expression) {
  var prelastIndex = expression.length - 2;
  if(expression[prelastIndex] == "!" ) {
    var num = parseInt(expression.substring(0, prelastIndex));
    return doubleFactorial(num);
  } else {
    var num = parseInt(expression.substring(0, expression.length - 1))
    return singleFactorial(num);
  }
}

function countZeros(number) {
  var zeroCount = 0;
  while(number % BigInt(10) == 0) {
    zeroCount++;
    number = number / BigInt(10);
  }
  return zeroCount;
}

function singleFactorial(number) {
  var factorial = BigInt(1);
  for (i = 1; i <= number; i++){
    factorial = factorial * BigInt(i);
  }
  return factorial;
}

function doubleFactorial(number) {
  var factorial = BigInt(1);
  if (number % 2 == 0) {
    for (i = 2; i <= number; i += 2) {
        factorial *= BigInt(i); 
    } 
  } else {
    for (i = 1; i <= number; i += 2) {
        factorial *= BigInt(i);
    } 
  }
  return factorial;
}
