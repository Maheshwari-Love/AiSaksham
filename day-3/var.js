// var v/s let v/s const
// var a = 5;  //scope is global 

// if var declartion is inside the function the its scope becomes function
// var a= 10;
// function fun(){
//     var a = 5;
// }
// console.log(a);  //undefined


// if var declartion is inside the block the its scope becomes its parent function or global if parent functoin is not there.


//  var variable is hoisted it will decare the x as on the top of code and declare it as undefined and then ressigned the value 4
// console.log(x);//undefind
// var x = 4;



// let

// if let declartion is global scope becomes global
// it let declaration is in a function scope will be in function
// let a = 5; /// scope always block

// let a = 5; //scope global
// if(true){
//     let b = 10; //scope block
//     console.log(a);//5
// }
// console.log(b);// scope block
//b is not defined 
// which means its scope is only upto block

// let hoisting

// console.log(greeter); // Cannot access 'greeter' before initialization
// let greeter = "hey hi";


//               re-decalaration   reassignment
// var              Y                   Y
// let                    N                   Y 
// cont


const greeter = {
    message: "say hi",
    times: 4
}
greeter.message = "say Hello instead";
console.log(greeter.message);
 

// // template literal
// let name1  = "love";
// let age = 21;
// console.log("my name is " + name + " my age is" + age);
// console.log(`Welcome ${name1}, ${age}!`);

// console.log();

// array destructuring

// let arr = ["a","b","c"]

// // let name0 = arr[0];
// // let name1 = arr[1];
// // let name2 = arr[2];
// let [name1,name2,name3] = arr;
// console.log(name1,name2,name3);
// let price = 10;
// let VAT = 0.25;
// let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`; 


