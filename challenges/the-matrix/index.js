// source: https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion
const sumRange = (number) => {
  if (number == 1) {
    return 1
  }

  return number + sumRange(number - 1)

}

// sumRange(3)
    // Is 3 == 1? No
    // return 3 + sumRange(3 - 1) --> 3 + sumRange(2) --> 3 + 3 --> 6
    // Pop this call off the stack (goodbye sumRange(3)) and code stack has no more nodes left
// sumRange(2)
    // Is 2 == 1? No
    // return 2 + sumRange(2 - 1) --> 2 + sumRange(1) --> 2 + 1 --> 3
    // Pop this call off the stack (goodbye sumRange(2))
// sumRange(1)
    // Is 1 == 1? Yes
    // Return 1
    // Pop this call off the stack (goodbye sumRange(1))

// console.log(sumRange(3))

const power = (base, exponent) => {
  if (exponent === 0) {
    return 1
  }
  return base * power(base, exponent - 1)
}

// power(3, 2) --> expected result, 9
    // is 2 == 0? No
    // return 3 * power(3, 2 - 1) --> 3 * power(3, 1) --> 3 * 3 --> 9
// power(3, 1)
    // is 1 == 0? No
    // return 3 * power(3, 1 - 1) --> 3 * power(3, 0) --> 3 * 1 --> 3
// power(3, 0)
    // is 0 == 0? Yes
    // Return 1

// console.log(power(3, 3))

const factorial = (num) => {
  if (num === 1) {
    return 1
  }

  return num * factorial(num - 1)
}

// factorial(5) --> expected result, 120
    // is 5 === 1? No
    // return 5 * factorial(5 - 1) --> 5 * factorial(4) --> 5 * 24 --> 120
// factorial(4)
    // is 4 === 1? No
    // return 4 * factorial(4 - 1) --> 4 * factorial(3) --> 4 * 6 --> 24
// factorial(3)
    // is 3 === 1? No
    // return 3 * factorial(3 - 1) --> 3 * factorial(2) --> 3 * 2 --> 6
// factorial(2)
    // is 2 === 1? No
    // return 2 * factorial(2 - 1) --> 2 * factorial(1) --> 2 * 1 --> 2
// factorial(1)
    // is 1 === 1? Yes
    // return 1
// console.log(factorial(5))

const meetsPredicateCallbackCriteria = (array, callback) => {
  const copy = array

  if (copy.length === 0) {
    return true
  }

  if(callback(copy[0])) {
    copy.shift()
    return meetsPredicateCallbackCriteria(copy, callback)
  } else {
    return false
  }
}


const allAreLessThanSeven = meetsPredicateCallbackCriteria([1,2,1], function(num){
	return num < 7;
});

// meetsPredicateCallbackCriteria([1,2,9], function(num){ return num < 7; }) --> expected result, false
    // copy = [1,2,9]
    // is copy.length === 0? No
    // callback(1) is true? Yes
        // remove first element of copy array
        // return meetsPredicateCallbackCriteria([2, 9], function(num){ return num < 7; }) --> evaluates to false
// meetsPredicateCallbackCriteria([2, 9], function(num){ return num < 7; })
    // copy = [2, 9]
    // is copy.length === 0? No
    // callback(2) is true? Yes
        // remove first element of copy array
        // return meetsPredicateCallbackCriteria([9], function(num){ return num < 7; }) --> evaluates to false
// meetsPredicateCallbackCriteria([9], function(num){ return num < 7; })
    // copy = [9]
    // is copy.length === 0? No
    // callback(9) is true? No
        // return false
// console.log(allAreLessThanSeven)

const productOfArray = (array) => {
  // shallowCopy creates a new object with the same properties of array
  const shallowCopy = array.slice()

  if (shallowCopy.length === 0) {
    return 1
  }

  shallowCopy.shift()

  return array[0] * productOfArray(shallowCopy)
}

// productOfArray([1,2,3]) --> expected result, 6
    // shallowCopy = [1,2,3]
    // is shallowCopy.length === 0? No
    // remove first element of shallowCopy array --> [2, 3]
    // return 1 * productOfArray([2, 3]) --> 1 * 6 --> 6
// productOfArray([2, 3])
    // shallowCopy = [2, 3]
    // is shallowCopy.length === 0? No
    // remove first element of shallowCopy array --> [3]
    // return 2 * productOfArray([3]) --> 2 * 3 --> 6
// productOfArray([3])
    // shallowCopy = [3]
    // is shallowCopy.length === 0? No
    // remove first element of shallowCopy array --> []
    // return 3 * productOfArray([]) --> 3 * 1 --> 3
// productOfArray([])
    // shallowCopy = []
    // is shallowCopy.length === 0? Yes
    // Return 1
console.log(productOfArray([1,2,3]))
