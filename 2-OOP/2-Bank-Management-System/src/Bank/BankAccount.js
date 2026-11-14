export class BankAccount {
    #balance;
    #transactions = [];

    constructor(owner, initialBalance = 0) {
        if (initialBalance < 0) {
            throw new Error("Invalid initial balance");
        }

        this.owner = owner;
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("Invalid deposit amount");
        }

        this.#balance += amount;

        this.#transactions.push({
            type: "DEPOSIT",
            amount,
            date: new Date()
        });

        return this.#balance;
    }

    withdraw(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("Invalid withdrawal amount");
        }

        if (amount > this.#balance) {
            throw new Error("Insufficient balance");
        }

        this.#balance -= amount;

        this.#transactions.push({
            type: "WITHDRAW",
            amount,
            date: new Date()
        });

        return this.#balance;
    }

    get balance() {
        return this.#balance;
    }

    get transactions() {
        return this.#transactions.map((transaction) => ({
            ...transaction
        }));
    }
}

export default BankAccount