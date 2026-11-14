import { BankAccount } from "./BankAccount.js";

export class CheckingAccount extends BankAccount {
    constructor(owner, initialBalance, overdraftLimit = 0) {
        super(owner, initialBalance);

        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("Invalid withdrawal amount");
        }

        if (amount > this.balance + this.overdraftLimit) {
            throw new Error("Overdraft limit exceeded");
        }

        if (amount > this.balance) {
            throw new Error("This demo does not process overdrafts");
        }

        return super.withdraw(amount);
    }
}
export default CheckingAccount