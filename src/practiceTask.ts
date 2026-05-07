// Task 1
type cartItem = {
    name: string,
    price: number,
    quantity?: number
}
const calculateTotal = (item: cartItem): number => {
    const { price, quantity = 1 } = item;
    return price * quantity;

}
const result = calculateTotal({ name: "apple", price: 20, quantity: 2 });
console.log(result);

// Task 2
type person = { name: string, age: number }; //alias type
type jobDetails = { role: string, salary: number } //alias type
type Employee = person & jobDetails;   //intersection type
const data: Employee = {
    name: "bharat roy",
    age: 24,
    role: "admin",
    salary: 20000,
}

const getProfile = (employee: Employee): string => {
    return `Name :${employee.name} and role: ${employee.role}`
}

const EmployeeDetails = getProfile(data);
console.log(EmployeeDetails);

// Task 3 
type userResponse = {
    info?: {
        address?: {
            zipCode?: string;
        }
    }
}

const getZipCode = (user: userResponse): string => {
    return user.info?.address?.zipCode ?? "0000"
}
console.log(getZipCode({}));

// task 4 type of assertion
let secretValue: unknown = "typescript is awesome";
let upperCase = (secretValue as string).toUpperCase
