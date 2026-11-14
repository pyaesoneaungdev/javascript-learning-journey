export class Bank {
    #accounts = new Map();

    addAccount(accountNumber, account) {
        if (this.#accounts.has(accountNumber)) {
            throw new Error("Account already exists");
        }

        this.#accounts.set(accountNumber, account);
    }

    getAccount(accountNumber) {
        const account = this.#accounts.get(accountNumber);

        if (!account) {
            throw new Error("Account not found");
        }

        return account;
    }

    getTotalAccounts() {
        return this.#accounts.size;
    }
}
export default Bank;