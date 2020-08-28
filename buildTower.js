function towerBuilder(nFloors) {
  // build here
  maxStars = nFloors*2 - 1;
  var resultArr = []; 

  for(var i = 1; i<=nFloors; i++){
  var row =  " ".repeat((maxStars-(i*2-1))/2) + "*".repeat(i*2-1) + " ".repeat((maxStars-(i*2-1))/2)
  resultArr.push(row)
  console.log(row) 
  }
  return resultArr
}
