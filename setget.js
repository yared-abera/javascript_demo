//'set' and 'get' methods
/*
  class Person
    - personName
    - age

    - setPersonName()
    - getPersonName()

    - setAge()
    - getAge()
*/

class Person
{
  #personName;
  #age;
  #title = "Mr.";

  //personName - set and get
  setPersonName(value)
  {
    //Requirement 1: personName can't be null or undefined
    if (value == null || value == undefined)
    {
      console.error("Null or undefined is not allowed for personName");
    }
    else
    {
      if (value.length >= 30)
      {
        console.error("personName length can't be more than 30 characters.");
      }
      else
      {
        this.#personName = value;
      }
    }
  } //end of method

  getPersonName()
  {
    return `${this.#title} ${this.#personName}`;
  }

  //age - set and get
  setAge(value)
  {
    if (value >= 0 && value <= 100)
    {
      this.#age = value;
    }
    else
    {
      console.error("Age must be in between 0 to 100 only.");
    }
  }

  getAge()
  {
    return this.#age;
  }
} //end of class

var person1 = new Person();
//person1.setPersonName(null); //error
//person1.setPersonName("kjsdfh kjsdhf kjsdh fjsdh fkjhsd fkjhs dkfjh sdfhiusgheuighjhg"); //error
//person1.setAge(200); //error

person1.setPersonName("John"); //personName property will be assigned to "John"
person1.setAge(40); //age property will be assigned to 40
console.log(person1.getPersonName()); //the get method returns the value "Jhon"
console.log(person1.getAge()); //the get method returns the value 40
