// (typeof a ) is operator
// var a = null;
// console.log('a');   //null
// console.log(typeof a); //object


// null v/s Undefined
// type conversion in javasscript isof two types 1. type conversion 2. type cohersion


// function
// 1.traditional function
// dont write console in function
function sum(a,b){
    return a+b;
}
var result = sum(2,3);
console.log(result);


// 2. functon expression
// 2.1 anonymuous function
var sum = function(a,b){
    return a+b;
};
var res = sum(2,3);
console.log(res);

// 2.2 arrow function
var sum = (a,b) =>{
    return a+b;
}
//var sum (a,b) => a+b;