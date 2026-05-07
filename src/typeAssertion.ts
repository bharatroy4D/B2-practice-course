let anything: any;
anything = 333;
(anything as number)


const kgToGmConvert = (input: string | number): string | number | undefined => {
    if (typeof input === "number") {
        return input * 1000;
    } else if (typeof input === "string"){
        const [value] = input.split("")
        return `convert of string : ${Number(value) * 1000}`
    }
}
const result1 = kgToGmConvert(2) as number;
const result2 = kgToGmConvert("2 kg") as string;
console.log(typeof result1, typeof result2);