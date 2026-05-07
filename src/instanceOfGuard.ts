class Person {
    name: string;
    constructor(name: string) {
        this.name = name;

    }
    getSleep(hours: number) {
        return console.log(`${this.name} sleep in ${hours}`);
    }
}
class Student extends Person {

    doStudy(hours: number) {
        return console.log(`${this.name} study in ${hours}`);
    }
}
class Teacher extends Person {
    constructor(name: string) {
        super(name)
    }
    takeClass(hours: number) {
        return console.log(`${this.name} take class in ${hours}`);
    }
}

const getUserInfo = (user: Person) => {
    if (user instanceof Student) {
        user.doStudy(4)
    } else if (user instanceof Teacher) {
        user.takeClass(8)
    } else {
        user.getSleep(10)
    }
}

const student1 = new Student("Mr. student");
const teacher1 = new Teacher("Mr teacher")
const person1 = new Person("Mr Person")
getUserInfo(student1)
getUserInfo(teacher1)
getUserInfo(person1)
