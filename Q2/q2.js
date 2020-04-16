// JavaScript Document



//Object template person has been created using constructore function with properties name,gener,age,
//interests
class Person {
  constructor(name, age, gender, classes) {
    this.name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }




//greeting method has been created from person object template, which also prints on console using 
//name field from Person object.
  greeting() {
    console.log(`Hi! I'm ${this.name}`);
  };



//bye method has been created using name field from Person object template,which prints a message 
//in console with the name of the person.
  bye() {
    console.log(`${this.name.} has left the building. Bye for now!`);
  };
}




//Two object instances are created for two persons containing name,age,gender,interests properties.
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);




//New object template Teacher has been created that extends Person constructor.
//Teacher constructor includes two new properties subject and grade and the other properties 
//will be defined using super to extend from Person object template.
class Teacher extends Person {
  constructor(name, last, age, gender, interests, subject, grade) {
    super(name, age, gender, interests);
// subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}