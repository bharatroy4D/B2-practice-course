// class person {
//     name: string;
//     age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     great() {
//         return `my name is : ${this.name} and age is : ${this.age}`
//     }
// }

// class Person {
//     constructor(public name: string, public age: number) { }

//     great() {
//         return `my name is : ${this.name} and age is : ${this.age}`
//     }
// }
// const user1 = new Person("bharat", 23)
// const user2 = new Person("molesh", 43)
// console.log(user1.great(), user2.great());

// Inheritance class
class Student {

    constructor(
        public name: string,
        public roll: number,
        public age: number) { }
    // student-info
    greatStudent() {
        return `${this.name} is roll : ${this.roll} and age : ${this.age}`
    }
    // age check
    isAdult(): boolean {
        return this.age >= 18
    }
    // Roll Update
    rollUpdate(newRoll: number) {
        return `bharat roy roll is : ${newRoll}`;
    }
}
class Student1 extends Student {
    constructor(
        name: string,
        roll: number,
        age: number,
        public location: string
    ) {
        super(name, roll, age)
    }
    StudentLocation() {
        return `${this.name} is location: ${this.location}`
    }
}
const studentLocationInfo = new Student1("deba", 39, 29, "dhaka")
console.log(studentLocationInfo.StudentLocation());

// const StudentData = new Student("bharat", 34, 15)
// console.log(StudentData.greatStudent());
// console.log(StudentData.isAdult());
// console.log(StudentData.rollUpdate(40));