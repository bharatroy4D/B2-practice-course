// Tuple type
const person: [string, number] = ["bharat", 23]
// Any type
const data: any = ["bharat", 38, true, undefined]
// Enum type
enum userInfo {
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer",
}
const userRole = (role: userInfo) => {
    if (role === userInfo.Admin) {
        return true;
    } else return false;
}
console.log(userRole(userInfo.Admin));

// Unknown type
let value: unknown = "hello";
// Union type
let id: string | number;
id = 10;
id = "abc";

// Intersection type
type A = { name: string };
type B = { age: number };
type C = A & B;
let personData: C = {
    name: "bharat",
    age: 34,
}
// Literal Type
let direction: "left" | "right";
direction = "left";

// Alias type
type user = {
    name: string;
    old: number;
    location: string;
    gender: "male" | "female";
}
// function for alias type
type add = (num1: number, num2: number) => number;
const sum: add = (num1, num2) => {
    return num1 + num2;
}
const result = console.log(sum(23, 48));

// function for interface type
interface IAdd {
    (a: number, b: number): number;
}
const total: IAdd = (a, b) => {
    return a + b;
}
const res = console.log(total(23, 48));