//classes and objects in JavaScript
class Employee
{
  //properties
  empId;
  empName;
  salary;

  //method
  getEmployeeName()
  {
    return this.empName;
  }

  //method
  hikeSalary(amount)
  {
    this.salary = this.salary + amount;
  }
}

let employee1 = new Employee();//create first object based on Employee class (it stores same properties & methods in this object)
employee1.empId = 101;
employee1.empName = "Scott";
employee1.salary = 3000;
employee1.hikeSalary(800);
console.log(employee1);

let employee2 = new Employee(); //create second object based on Employee class (it stores same properties & methods in this object)
employee2.empId = 102;
employee2.empName = "John";
employee2.salary = 5000;
employee2.hikeSalary(450);
console.log(employee2);
