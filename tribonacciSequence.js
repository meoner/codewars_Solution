function tribonacci(signature,n){
  //your code here
  var arr = [];
  if(n===0){
    return [];
  }
  else if(n===1){
    arr.push(signature[0])
    return arr

  }

  else{
    for(var i = 3; i<n; i++){
      signature.push(signature[i-1]+signature[i-2]+signature[i-3])
    }

    return signature
  }
}
