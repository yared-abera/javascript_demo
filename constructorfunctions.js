//constructor functions
var createEmployee = function(employeeName, employeeId, salary) {
  var employee = {}; //create new object

  //initialize properties & methods into that object
  employee.employeeName = employeeName;
  employee.employeeId = employeeId,
  employee.salary = salary;

  employee.getEmployeeName = function() {
    return this.employeeName;
  };

  //return the new object
  return employee;
};

var employee1 = createEmployee("Scott", 1, 1000);
var employee2 = createEmployee("Allen", 2, 2000);

console.log(employee1);
console.log(employee2);
