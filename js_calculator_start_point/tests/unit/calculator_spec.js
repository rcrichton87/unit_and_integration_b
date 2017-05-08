var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('has null as previousOperator on creation', function(){
    assert.equal(null, calculator.previousOperator)
  })

  it('has no prevoiusTotal on creation', function(){
    assert.equal(0, calculator.previousTotal)
  })

  it('has newTotal true on creation', function(){
    assert.equal(true, calculator.newTotal)
  })

  it('has no runningTotal on creation', function(){
    assert.equal(0, calculator.runningTotal)
  })

  it('can add a positive integer', function(){
    calculator.add(5)
    assert.equal(5, calculator.runningTotal)
  })

  it('can add a positive float', function(){
    calculator.add(5.7)
    assert.equal(5.7, calculator.runningTotal)
  })

  it('can add a negative integer', function(){
    calculator.add(-5)
    assert.equal(-5, calculator.runningTotal)
  })

  it('can add a negative float', function(){
    calculator.add(-5.7)
    assert.equal(-5.7, calculator.runningTotal)
  })

  it('can add a string', function(){
    calculator.add('5')
    assert.equal(5, calculator.runningTotal)
  })

  it('can subtract a positive integer', function(){
    calculator.subtract(5)
    assert.equal(-5, calculator.runningTotal)
  })

  it('can subtract a positive float', function(){
    calculator.subtract(5.7)
    assert.equal(-5.7, calculator.runningTotal)
  })

  it('can subtract a negative integer', function(){
    calculator.subtract(-5)
    assert.equal(5, calculator.runningTotal)
  })

  it('can subtract a negative float', function(){
    calculator.subtract(-5.7)
    assert.equal(5.7, calculator.runningTotal)
  })

  it('can subtract a string', function(){
    calculator.subtract('5')
    assert.equal(-5, calculator.runningTotal)
  })

  it('always sets runningTotal to only be relevent to the current operation', function(){
    calculator.add(100)
    calculator.subtract(-5.7)
    assert.equal(5.7, calculator.runningTotal)
  })

  it('can multiply a positive integer', function(){
    calculator.previousTotal = 2
    calculator.multiply(5)
    assert.equal(10, calculator.runningTotal)
  })

  it('can multiply a positive float', function(){
    calculator.previousTotal = 2
    calculator.multiply(0.5)
    assert.equal(1, calculator.runningTotal)
  })

  it('can multiply a negative integer', function(){
    calculator.previousTotal = 2
    calculator.multiply(-5)
    assert.equal(-10, calculator.runningTotal)
  })

  it('can multiply a negative float', function(){
    calculator.previousTotal = 2
    calculator.multiply(-0.5)
    assert.equal(-1, calculator.runningTotal)
  })

  it('can multiply a string', function(){
    calculator.previousTotal = 2
    calculator.multiply('5')
    assert.equal(10, calculator.runningTotal)
  })

  it('can divide a positive integer', function(){
    calculator.previousTotal = 10
    calculator.divide(5)
    assert.equal(2, calculator.runningTotal)
  })

  it('can divide a positive float', function(){
    calculator.previousTotal = 10
    calculator.divide(0.5)
    assert.equal(20, calculator.runningTotal)
  })

  it('can divide a negative integer', function(){
    calculator.previousTotal = 10
    calculator.divide(-5)
    assert.equal(-2, calculator.runningTotal)
  })

  it('can divide a negative float', function(){
    calculator.previousTotal = 10
    calculator.divide(-0.5)
    assert.equal(-20, calculator.runningTotal)
  })

  it('can divide a string', function(){
    calculator.previousTotal = 10
    calculator.divide('5')
    assert.equal(2, calculator.runningTotal)
  })

  it('gives an error when trying to divide by 0', function(){
    calculator.previousTotal = 10
    calculator.divide(0)
    assert.equal("Error", calculator.runningTotal)
  })

  it('adds a number to the runningTotal on numberClick', function(){
    calculator.numberClick(6)
    assert.equal(6, calculator.runningTotal)
  })

  it('sets newTotal to false on numberClick', function(){
    calculator.numberClick(6)
    assert.equal(false, calculator.newTotal)
  })

  it('adds a number as a string to the runningTotal on numberClick', function(){
    calculator.numberClick('6')
    assert.equal(6, calculator.runningTotal)
  })

  it('concatenates multiple numberClicks to runningTotal', function(){
    calculator.numberClick(6)
    calculator.numberClick(3)
    assert.equal(63, calculator.runningTotal)
  })

  it('sets previousOperator when operatorClick is called', function(){
    calculator.operatorClick('*')
    assert.equal('*', calculator.previousOperator)
  })

  it('changes previousOperator from old value when operatorClick is called', function(){
    calculator.previousOperator = '-'
    calculator.operatorClick('/')
    assert.equal('/', calculator.previousOperator)
  })

  it('sets previousOperator to null when operatorClick is called on =', function(){
    calculator.previousOperator = '-'
    calculator.operatorClick('=')
    assert.equal(null, calculator.previousOperator)
  })

  it('sets newTotal to true when operatorClick is called', function(){
    calculator.newTotal = false
    calculator.operatorClick('+')
    assert.equal(true, calculator.newTotal)
  })

  it('sets runningTotal to 0 on clearClick', function(){
    calculator.runningTotal = 50
    calculator.clearClick()
    assert.equal(0, calculator.runningTotal)
  })

  it('clears previousOperator when runningTotal is 0', function(){
    calculator.previousOperator = '+'
    calculator.clearClick()
    assert.equal(null, calculator.previousOperator)
  })

  it('doesn\'t clear previousOperator when runningTotal is not 0', function(){
    calculator.runningTotal = 50
    calculator.previousOperator = '+'
    calculator.clearClick()
    assert.equal('+', calculator.previousOperator)
  })

  it('sets previousTotal to null when runningTotal is 0', function(){
    calculator.previousTotal = 50
    calculator.clearClick()
    assert.equal(null, calculator.previousTotal)
  })

  it('doesn\'t clear previousTotal when runningTotal is not 0', function(){
    calculator.runningTotal = 50
    calculator.previousTotal= 12
    calculator.clearClick()
    assert.equal(12, calculator.previousTotal)
  })


});
