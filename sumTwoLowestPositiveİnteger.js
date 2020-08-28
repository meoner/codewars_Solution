function sumTwoSmallestNumbers(numbers) {  
  //Code here
  for( var i=0; i<numbers.length; i++){
  if(numbers[i]<= 0 || typeof numbers[i]!== "number") {
    numbers.splice(i,1)
  }
}
  numbers.sort(function(a, b){return a - b});
  return numbers[0] + numbers[1];
}
