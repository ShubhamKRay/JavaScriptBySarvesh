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
