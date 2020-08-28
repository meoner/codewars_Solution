function DNAStrand(dna){
  //your code here
  var myResult ="";

  for(var i=0; i<dna.length; i++) {
    if(dna[i]==="A") {
      myResult=myResult.concat("T");
    }
    else if(dna[i]==="T") {
      myResult = myResult.concat("A")
    }
    else if(dna[i]==="G") {
      myResult = myResult.concat("C")
    }
    else if(dna[i]==="C") {
      myResult = myResult.concat("G")
    }

  }

  return myResult;
  
}
