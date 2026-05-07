type alphanumeric = string | number;

const add = (num1: alphanumeric, num2: alphanumeric) => {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else {
        return num1.toString() + num2.toString();
    }
}
console.log(add(4, 4));

// =======
type normalUser = {
    name: string;
}
type adminUser = {
    name: string;
    role: "Admin";
}

const getUserInfo = (user: adminUser | normalUser) => {
    if ("role" in user) {
        return `user Name: ${user.name} and role: ${user.role}`
    } else {
        return `user Name: ${user.name}`

    }

}
console.log(getUserInfo({name:"bharat", role:"Admin"}));