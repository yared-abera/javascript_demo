//higher order function
/*a function that either takes another function as an argument or a func that returns another function*/
//useful callbacks,currying,closures.

//Higher order functions
let doSomeWork = function () {
    return function () {
        return "Hello yaredo ";
    };
};

let result = doSomeWork(); //call doSomeWork function and get the returned function
console.log(result()); //Hello yaredo


//Area of circle: PI * r * r
//PI = 3.14...
//Higher order functions
function getAreaOfCircle(radius) {
    //return a function from HOF
    return function () {
        return Math.PI * radius * radius;
    };
};

let area = getAreaOfCircle(5); //Call HOF and get the returned function.
console.log(area()); //Call the function that was returned by HOF
console.log(area);// print function definition of the returned func from higher order func

//Immediately Invoked Functions
/*its a function execute immediiately,as soon as they are 
created .
- they are one time executables;they cannot be called later manually because the have not ref name
:- so why we need them 
  -need to supply a value, but you need to write some code to find out the result
  -clousers.*/
let printMe = function (value) {
    console.log(`Your value is ${value}`);
}

printMe(
    //immediately invoked function
    (function (n) {
        return n * n;
    })
        (10)); //call that IIF
//Output: 100


//no currying
// var multiply = function(a, b, c)
// {
//   return a * b * c;
// }
// console.log(multiply(1, 2, 3));
//currying is a way to simplify this code in to simpler function that takes one argument at a time
//currying - concatenation of strings
var multiply = function (a) //first function
{
    return function (b) //second function
    {
        let result1 = a + " " + b;
        return function (c) //third function
        {
            let result2 = result1 + " " + c;
            return result2;
        };
    };
};

let fun2 = multiply("Hello"); //calls first function
let fun3 = fun2("there"); //calls second function
console.log(fun3("yaredo")); //calls third function

console.log(multiply("Hello")("there")("yaredo")); //calls first function; and then second function and the third function





