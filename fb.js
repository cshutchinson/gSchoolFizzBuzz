module.exports = {
  fizzBuzz: function(n){
    var results=[];
    for (var x=0; x<=n; x++){
      if (x===0) results.push(0);
      else if (x%15===0) results.push("Fizz Buzz") ;
      else if (x%3===0) results.push ("Fizz");
      else if (x%5===0) results.push ("Buzz");
      else if (x%3!=0 && x%5!=0) results.push(x);
    }
    return results;
  }
}
