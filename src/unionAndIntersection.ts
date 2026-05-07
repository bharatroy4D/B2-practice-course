// INTERSECTION TYPE
// type Manager = {
//     target: string;
//     team: number
// }
// type Employee = {
//     role: string;
//     id: number;
// }

// type EmployeeManager = Employee & Manager;
// const hr: EmployeeManager = {
//     target: "successful",
//     team: 12,
//     role: "web developer",
//     id: 3
// }
// console.log(hr);

// UNION TYPE
type User = "admin" | "dashboard" | "guest";
const role = (employee: User) => {
    if (employee === "admin") {
        return "admin"
    } else if (employee === "dashboard") {
        return "dashboard"
    } else {
        return "guest"
    }
}
const result = role("admin")
console.log(result);