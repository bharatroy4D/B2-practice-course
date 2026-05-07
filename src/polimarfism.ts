class Person {
    getSleep() {
        console.log(`I a person`);
    }
}

class Student extends Person {
    getSleep() {
        console.log(`I a Student`);
    }
}
class Teacher extends Person {
    getSleep() {
        console.log(`I a Teacher`);
    }
}

const getSleepHours = (param: Person) =>{
    param.getSleep()
}
const person1 = new Person()
const student1 = new Student()
const teacher = new Teacher()
getSleepHours(student1)