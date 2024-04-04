
// *********************** which type of js language ***************************
// JavaScript is a dynamically typed language, which means that data types of variables are 
// determined by the value they hold at runtime and can change throughout the program as
//  we assign different values to them.



// javascript variable 
//  let :-  it's a scop variable it's not redefind
// let num = 10;
// console.log(num);
//  var :- it's a also scop variable but redefined that gives a error
// var name = "Nandani";
// console.log(name);
//  const :- it's a constant it's not value changeble
// const pi = 3.14;
// console.log(pi);

// Datatype 
// primitive :-Number , Null, String, Bool, Undefined, Bigint , Symbol;
//   1.null:- it's totally is empty string; 
// 2.undefined:- it' declear anything not define(isko only creat kiya ki iski koi value set nhi ki)
// 3.symbol:- isko multiple nam ki chij ho to usko unique value bnane ke liy uska use kiya jata;
// 4.string:- a set of word;   5.number:- only number; 6.bool:- isme true or false value hoti h true -1, false-0; 
// Non-primitive/Reference type :- Array, object, funcation;

// convert string to number :- put the pulse (+) before the string 
// let str = "a";
// console.log(typeof(+str));

// convert number into string :- add a empty string with the number
// let num = 10;
// console.log(typeof(num+""));

// String :- string are used to store textual form of fata like word, sentence .it follows zero based indexing
// define the type of string 
// let str = "pro";
// let str = 'pro';
// let str = `pro`;
// #### String Method###
// 1. trim():-it's remove last and first all space
// 2.slice():- isme start se end tak string lo order or reverse dekhne ke liy kiya jata h(ye negative value bhi leta hai)
// 3.charAt():- iske help se me string me kon sa word kon se index par hai dekh skte hai
// 4.tostring():- ye array ko stinrg me change krta hai
// 5.concat():- ye two ko add krne ka kam aata hai isko (`ke sath &{}`)
// 6.Substring():-  isme string ko start or end value hota h jese (1,2)- isme index 1 se index 2 tak ka string me jo bhi h sb aa jayge yr (positive value hai)
// 7.indexof():- string me konsa word kha par hai pta kiya jata h but ye jo bhi word search krna h or vo jha bhi sbse phle milega vhi se return krega
// 8.lastIndexof():- string me word find krta hai but ye last index par jo hota hai ye uske liy hai
// 9.touppercase():- ye sari chijo ko upperecase me krta hai
// 10.tolowercase();- ye word ke sari chio ko lowercase me krta hai
// 11.split():-  ye string ko array me change krta h (, space ) bhi use krta hai
// 12.replace():- ye replace krta hai jis bhi chij ko krna hi usko or jiske sath krna hai 


// ################# undefined ##################
// * Accesing an uninitialized variable retures undefined
//   let str ;
//   console.log(str);      //undefined

// * Accessing a non-existing property of an object returns undefined.Accesing
// * Accessing a out-of-bounds array element returns undefined.  

// ************* Null  ***************
// #. null means 'no value' assign to variable
// #. typeof null rturns 'object'
// #. null is treatd as false value

// ###################.memory allocation :- #################
// stack(primitive):-  isme data ki copy banti hai jo uski real value ko change nhi krti hai
// heap(Non-primitive):- isme original data ki copy nhi bnti hai uska reference(address) pass kiya jata hai


// ######################### Number and Maths ####################
const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance .toFixed(2));

// toFixed(2) :- ye decimal ke bad () isme jitna number dala hota h vhi tak decimal value shoe hoti hai
// toprecision :- 


// Math.abs() :- ye negative sign ko positive or positive ko negative bna deta hai
// Math.random() :- ye 0 or 1 ke from me value deta hai(0.1 ya 1.0)
// Math.round()
// Math.ceil()
// Math.floor()
// Math.trunc()
// Math.sign()
// Math.sin()
// Math.cos()
// Math.sqrt()
// Math.min() && Math.min()
// Math.log()
// Math.log2()
// Math.log10()

