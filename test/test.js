var code = require('../fb.js');
var expect = require('chai').expect;

describe ('test fb function', function(){
  it('Should return array of results', function(){
    expect(code.fizzBuzz(1)).to.equal(1);
  });
});
