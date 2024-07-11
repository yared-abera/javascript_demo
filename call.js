//call
/*
call method is used to change the "this" keyword of the function.

Syntax of call method:

function.call(thisArg, arg1, arg2, ...);
call method is used for function outside the object to use this keyword AS REFERENCe of the provided object instead of global empty object.

*/
var person =
{
  age: 20

};

let birthDay = function (years) {
  this.age += years;
};

console.log(person.age); //20
birthDay.call(person, 3); //the "this" keyword of birthDay function will refer to "person" object.
console.log(person.age); //23
