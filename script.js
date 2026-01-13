//! Primitive Data Types

var n1 = 10.987;
console.log(n1); //10.987
console.log(typeof n1); //number
var n2 = "Hello";
var n3 = "World";
console.log(n2, n3); //Hello World
console.log(typeof n3); //string

//`` using backticks we can write multi line strings and we can usestring interpolation using ${}
var n4 = `Hey There !!!
Let's learn JavaScript ${n3}`;
console.log(n4); //Hey!!! Let's learn JavaScript World
console.log(typeof n4); //string

var n5 = true;
console.log(n5); //true
console.log(typeof n5); //boolean
console.log(typeof typeof n5); //string

var x = 10;
console.log(x);
console.log(typeof x); //number
console.log(typeof typeof x); //string

var n6 = undefined;
console.log(n6); //undefined
console.log(typeof n6); //undefined

var n7 = null;
console.log(n7); //null
console.log(typeof n7); //object

var n8 = 46904861032786642715643138781982734654313543n;
var n9 = BigInt("1234567890123456789012345678901234567890");
console.log(n8); //46904861032786642715643138781982734654313543n
console.log(n9); //1234567890123456789012345678901234567890n
console.log(typeof n8); //bigint
console.log(typeof n9); //bigint

var n10 = Symbol("This is my symbol");
console.log(n10); //Symbol(This is my symbol)
console.log(typeof n10); //symbol
