class BankAccount {
    readonly userId: string;
    userName: string;
    userBalance: number;
    constructor(
        userId: string,
        userName: string,
        userBalance: number,
    ) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }
    userAccount(){
        return `user name : ${this.userId}, username: ${this.userName} and user Balance : ${this.userBalance} `
    }
    addMoney(balance:number){
        this.userBalance = this.userBalance + balance;
    }
}

const userDetails = new BankAccount("12", "Bharat roy", 1300)
userDetails.addMoney(200)
userDetails.addMoney(500)
const result = userDetails.userAccount()
console.log(result)