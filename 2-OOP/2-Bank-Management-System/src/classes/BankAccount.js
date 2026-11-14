class BankAccount {
    #balance;

    constructor(balance) {
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log("Invalid amount");
            return;
        }

        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount <= 0 || amount > this.#balance) {
            console.log("Invalid withdrawal");
            return;
        }

        this.#balance -= amount;
    }

    getBalance() {
        return this.#balance;
    }
}

export default BankAccount;

