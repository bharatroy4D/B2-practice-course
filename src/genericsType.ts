const student1 = <T>(data: T ): T => {
    return data;
}
console.log(student1<string>('book'));
console.log(student1<number>(1234));
console.log(student1<boolean>(true));

const userData = <x , y>(user:x, role:y) =>{
    return {...user, role}
}
const result = userData({name:"bharat"}, {role:"admin"})
console.log(result);
