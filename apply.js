//apply
var student1 = {
  studentName: "Scott",
  section: "A"
};

var student2 = {
  studentName: "John",
  section: "B"
};

//function at outside the object
function calculateTotalMarks(subject1, subject2, subject3) {
  let totalMarks = subject1 + subject2 + subject3;
  let message = `Hey ${this.studentName}, your total marks is: ${totalMarks}`;
  console.log(message);
}

calculateTotalMarks.apply(student1, [90, 70, 80]); //supply "student" object as "this" keyword of calculateTotalMarks function; and also supply the values of array into respective parameters, sequentially.
calculateTotalMarks.apply(student2, [56, 45, 88]);
