//inheritance using __proto__
var person = { personName: "John", age: 20 }; //parent object
var student = { rollNo: 12, marks: 70 }; //child object1
var customer = { shippingAddress: "some city, some country"}; //child object 2

student.__proto__ = person;
console.log(student);
// console.log(student.__proto__.personName);
// console.log(student.__proto__.age);
console.log(student.rollNo, student.marks, student.personName, student.age);
customer.__proto__ = person;
console.log(customer);
console.log(customer.shippingAddress, customer.personName, customer.age);
