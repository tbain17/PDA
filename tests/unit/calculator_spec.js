var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it should add 4 and 1 together', function(){
    calculator.previousTotal = 4
    calculator.add(1)
    assert.equal(5, calculator.runningTotal)
  })

  it('it should subtract 4 from 7', function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.equal(3, calculator.runningTotal)
  })

  it('it should multiply 3 and 5 ', function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.equal(15, calculator.runningTotal)
  })

  it('it should divide 21 by 7', function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    assert.equal(3, calculator.runningTotal)
  })

  it('it should concatenate sequential number clicks', function(){
    calculator.numberClick(1)
    calculator.numberClick(3)
    calculator.numberClick(3)
    calculator.numberClick(7)
    assert.equal(1337, calculator.runningTotal)
  })

  it('it should be able to chain multiple operations together', function(){
    calculator.numberClick(1)
    calculator.operatorClick("-")
    calculator.numberClick(3)
    calculator.operatorClick("*")
    calculator.numberClick(7)
    calculator.operatorClick("+")
    calculator.numberClick(3)
    calculator.numberClick(2)
    calculator.operatorClick("=")
    assert.equal(18, calculator.runningTotal)
  })

  it('it should be able to clear the running total without affecting the calculation', function(){
    calculator.runningTotal = 10
    calculator.previousTotal = 5
    calculator.clearClick()
    assert.equal(5, calculator.previousTotal)
    assert.equal(0, calculator.runningTotal)
  })

});
