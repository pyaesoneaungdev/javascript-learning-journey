import { BankAccount } from "./BankAccount.js";

export class SavingsAccount extends BankAccount {
    constructor(owner, initialBalance, interestRate = 0.05) {
        super(owner, initialBalance);

        this.interestRate = interestRate;
    }

    addInterest() {
        const interest = this.balance * this.interestRate;

        this.deposit(interest);

        return interest;
    }
}
export default SavingsAccount