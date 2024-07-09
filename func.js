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

