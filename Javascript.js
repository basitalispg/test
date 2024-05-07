// create a function which returns first highest number from array and undefined if array length is zero.
let arr = [11, 10, 1, 33, 22, 55, 2, 77]
const highestNum = (inputArr) => {
if(inputArr.length === 0) return undefined
let largest = inputArr[0]
for (let x of inputArr) {
 if (x > largest) {
   largest = x;
 }
}
return largest;
}
let res = highestNum(arr);
console.log(res);
// if required we can ask for 2nd highest as well.

// prototype concept in javascript ?
// can you return string from filter method ? arr.filter((x)=> x > 0) returns string 'Filter method'.

Array.prototype.filter = function () {
  return 'Filter method'
};

let y = arr.filter((x)=> x > 0);
console.log(y)

/*
-> can you create custom method on Array object like filter ?
-> for example arr.myfilter((x)=> (x % 2) === 0) and filter even numbers
-> solution:
*/
// custom method implementation.
Array.prototype.myfilter = function (callback) {
 const result = [];
 for (let i = 0; i < this.length; i++) {
 // if the callback returns true, then we are pushing that element to result array.
 callback(this[i], i, this) && (result[result.length] = this[i]);
 }    
 return result;
};

let evenNums = arr.myfilter((x)=> (x % 2) === 0 );
console.log(evenNums);


// What is promise in JS ?
// Create three independent promises which will return some string
// like "promise 1", "promise 2", "promise 3" and store the result in one Array.
const p1 = new Promise((res)=>res('promise 1'));
const p2 = new Promise((res)=>res('promise 2'));
const p3 = new Promise((res)=>res('promise 3'));
const getResult = async () => {
 let result = await Promise.all([p1,p2,p3])
 console.log(result);
}
getResult();

