var code = require('../fb.js');
var expect = require('chai').expect;

describe ('FizzBuzz returns array', function(){
  it('Should return an array when passed any value', function(){
    expect(typeof code.fizzBuzz(Math.random()*100)).to.equal('object');
  });
  it('Should return 1 as the last array value when passed 1', function(){
    expect(code.fizzBuzz(1)[1]).to.equal(1);
  });
  it('Should return Fizz as the last array value when passed 3', function(){
    expect(code.fizzBuzz(3)[3]).to.equal('Fizz');
  })
  it('Should return FizzBuzz as the last array value when passed 300', function(){
    expect(code.fizzBuzz(300)[300]).to.equal('Fizz Buzz');
  })
});
