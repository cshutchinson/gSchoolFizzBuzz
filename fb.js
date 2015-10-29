module.exports = {
  fizzBuzz: function(n){
    for (var x=0; x<=n; x++){
      if (x%15===0) console.log("Fizz Buzz") ;
      else if (x%3===0) console.log ("Fizz");
      else if (x%5===0) console.log ("Buzz");
      else if (x%3!=0 && x%5!=0) console.log(x);
    }
    return n;
  }
}
