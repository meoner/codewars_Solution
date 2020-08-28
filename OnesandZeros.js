const binaryArrayToNumber = arr => {
  // your code
   var arrLen = arr.length;
  var myArr = arr.reverse();
  var decNum = 0;
  for(var i = 0; i<arrLen; i++){
    
    decNum = decNum + 2**i*myArr[i]    
  }
  
  return decNum;
  
};
