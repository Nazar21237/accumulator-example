"use strict"

function Accumulator(startingValue){
  this.value = isFinite(startingValue) ? +startingValue : 0;
}
 
Accumulator.prototype = new AccumulatorPrototype();

function AccumulatorPrototype(){
  this.read = function read(){
    const userNumber = +prompt("Enter your namber:");
    if(!isFinite(userNamber)) return this.value;

    return this.value += userNumber;

  }
}
const accumulator = new Accumulator();