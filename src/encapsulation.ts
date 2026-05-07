class BankAccount {
    balance: number;
    constructor(balance: number) {
        this.balance = balance;
    }
    getBalance(): number {
        return this.balance;
    }
}
const result = new BankAccount(500);
console.log(result.getBalance());
