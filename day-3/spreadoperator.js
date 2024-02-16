// // spread operator
// let arr1 = [1,2,3,4,5];
// // want to make a copy of arr1
// let arr2 = arr1;
// arr1[0] = 100;
// console.log(arr1);//[ 100, 2, 3, 4, 5 ]
// console.log(arr2);// [ 100, 2, 3, 4, 5 ]
// // same array but arr2 is also pointing to arr1 

// // primitive value are stored in heap

// let arr3 = [1,2,3,4,5];
// // want to make a copy of arr1
// let arr4 = [...arr3 ,55, 88];
// arr3[0] = 100;
// console.log(arr3);
// console.log(arr4);//it is copy of arr3


// rest operator or parameter

// function sum(...numbers){
//     let sum =0;
//     for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//     }
//     return sum;
// }
// let res = sum(1,2,5);
// console.log(res);


// for each
// for each loops and map se arr ko affect nh krta
// return undefined
// let arr1 = [1,2,3,4,5];
// arr1.forEach((val)=>{
//     console.log(val);
// });

//map



// let arr1 = [1,2,3,4,5];
// let newarr = arr1.map((val)=>{
//     return val*2;
// });
// console.log(arr1);
// console.log(newarr);



// filter 


// let arr1 = [1,2,3,4,5];

// let newarr = arr1.filter((val)=>{
//     return val%2  == 0;
// });
// console.log(arr1);
// console.log(newarr);



// reduce
//it reduces to a single value such as sum
// let arr1 = [1,2,3,4,5];

// let newarr = arr1.reduce((acc,val)=>{
//     return  acc+val;
// },0);
// console.log(arr1);
// console.log(newarr);

// concate the string

// let str1 = "Love";
// let str2 = " Maheshwari";

// function con(...str){
//    let res =  str1+str2;
//     console.log(res);
// }

// con(str1,str2);
// 


// 5. Write a function to capitalize first letter and return a new string
// str = "aeniparmar"
// function capitaliz(str){
//     return str.charAt(0).toUpperCase() + str.slice(1);
//     console.log(str);
    
// }
// console.log(capitaliz(str));

// 6. write function to check if string is palilndrome or not.

