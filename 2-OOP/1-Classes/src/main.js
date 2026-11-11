import BankAccount from "./account/BankAccount";
import UserAccount from "./account/UserAccount";
import Leader from "./classes/Leader";
import Person from "./classes/Person";
import Student from "./classes/Student";
import Calculator from "./math/Calculator";

const p1 = new Person("PSA", 21, "male", 5000); //instantiate => to get obj //
console.log(p1);
console.log(p1.name);
// console.log(p1.#money)

const p2 = new Person("HZH", 22, "female"); //intialized
console.log(p2);

const p3 = new Person("PMP", 100, "female");
console.log(p3);

const s1 = new Student("GG", 20, "female", "SWD", 4000);
console.log(s1);

const l1 = new Leader("Mg Mg", 18, "male", 50000, "SWD", "weekday");

console.log(l1);

const l2 = new Leader("Zaw Zaw", 18, "male", 30000, "SWD", "weekend");

console.log(l2);

//encapsulation
const myAccount = new UserAccount("Pyae", "pyae@gmail.com", "hello");
console.log(myAccount);
console.log(myAccount.login("yae@gmail.com", "hello"));
console.log(myAccount.showPassword());
console.log(myAccount.changePassword("hello", "asdffdsa"));
console.log(myAccount.showPassword());
console.log(myAccount.login("pyae@gmail.com", "asdffdsa"));

const myBankAcc = new BankAccount("hein htet zan", "hhz@gmail.com", "asdffdsa");
console.log(myBankAcc);
console.log(myBankAcc.login("hhz@gmail.com", "asdffdsa"));
console.log(myBankAcc.checkBalance());
console.log(myBankAcc.deposit(3000));
console.log(myBankAcc.deposit(2000));
console.log(myBankAcc.withdraw(1000));
console.log(myBankAcc.withdraw(6000));
console.log(myBankAcc.checkBalance());
console.table(myBankAcc.transition);

const calc = new Calculator(100);

console.log(calc.get());
console.log(calc.add(50).subtract(20).multiply(2).get());
