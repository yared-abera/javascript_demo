//arrow functions
//console.log("outside the object", this); //{}

var student = {
    studentName: "Scott",
    getStudentName: function () {
        console.log("getStudentName function", this); //student object

        setTimeout(function () {
            console.log("regular function", this); //Timeout object
        }, 1000);


        setTimeout(() => {
            console.log("arrow function", this.studentName); //student object
        }, 3000);
    }
};

student.getStudentName();
