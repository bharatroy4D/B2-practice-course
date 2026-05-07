// type User = {
//     id: number;
//     name: {
//         firstName: string;
//         lastName: string
//     }
//     address: {
//         currentAddress: string;
//         city: string;
//     }
// }
// const array: User = {
//     id: 3,
//     name:{
//         firstName:"bharat",
//         lastName:"chandra"
//     },
//     address:{
//         currentAddress:"rangpur",
//         city:"dhaka"
//     }
// }
// console.log(array);

type Add = (a: number, b: number) => number;
const sum: Add = (a, b) => a + b

const result = sum(5, 10);

console.log(result);