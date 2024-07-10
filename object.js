//object literals
var person = {
    personName: "yaredo", //property
    birthDay: //method
        function () {
            return "Happy Birthday";
        }

};
console.log(person);
console.log(person.personName); //call the property
console.log(person.birthDay()); //call the method 
//real world scenario
//employee scenario
var employee = {
    firstName: "Smith",
    lastName: "John",
    designation: "Clerk",
    salary: 3000,
    workExperienceYears: 5,

    //method
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },

    //method
    promote: function () {
        var isEligibleForPromotion; //local variable
        if (this.designation == "Clerk") {
            if (this.workExperienceYears >= 3) {
                isEligibleForPromotion = true;
                this.designation = "Asst. Manager";
                this.salary += this.salary * 10 / 100;
            }
            else {
                isEligibleForPromotion = false;
            }
        }

        //Asst. Manager to Manager
        else if (this.designation == "Asst. Manager") {
            if (this.workExperienceYears >= 5) {
                isEligibleForPromotion = true;
                this.designation = "Manager";
                this.salary += this.salary * 20 / 100;
            }
            else {
                this.isEligibleForPromotion = false;
            }
        }

        return isEligibleForPromotion; //true or false
    } //end of function
};

//console.log(employee);
//access all properties
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.designation);
console.log(employee.salary);
console.log(employee.workExperienceYears);

console.log(employee.getFullName()); //call getFullName method
if (employee.promote() == true) //call promote method
{
    console.log("Congratulations! The Employee Promoted.");
    console.log("Updated Salary: " + employee.salary);
    console.log("Updated Designation: " + employee.designation);
}
else {
    console.log("Employee is not eligible.");
}



