function squareDigits(num){
  //may the code be with you
  var newString = "";
  const numberDigits = num.toString().split('');

  for(var i=0; i<numberDigits.length; i++) {
    newString = newString + numberDigits[i]**2;
  }

  var newInt = parseInt(newString)
  
  return newInt
}
