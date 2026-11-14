// import BankAccount from "./classes/BankAccount";
// import CoffeeMachine from "./classes/CoffeeMachine";
// import Student from "./classes/Student";
// import Teacher from "./classes/Teacher";

import Bank from "./Bank/Bank";
import CheckingAccount from "./Bank/CheckingAccount";
import SavingsAccount from "./Bank/SavingsAccount";

// const account = new BankAccount(1000);

// account.deposit(500);
// account.withdraw(200);


// //Encapsulation ဆိုတာ Data နဲ့ Methods တွေကို Class အတွင်းမှာ စုစည်းပြီး Data ကို တိုက်ရိုက်ဝင်ပြင်လို့မရအောင် ကာကွယ်ထားတဲ့ Concept ဖြစ်တယ်။
// console.log(account.getBalance());

// //Abstraction ဆိုတာ User က လုပ်ဆောင်ချက်ကို အသုံးပြုနိုင်ပေမဲ့ အတွင်းမှာ ဘယ်လိုအလုပ်လုပ်သလဲဆိုတဲ့ အသေးစိတ်ကို သိဖို့မလိုအောင် ဖုံးကွယ်ထားတာဖြစ်တယ်။
// const machine = new CoffeeMachine();

// machine.makeCoffee();

// //Inheritance
// const student = new Student("Aung Aung", 22);
// const teacher = new Teacher("U Kyaw", 40);

// student.introduce();
// student.study();

// teacher.introduce();
// teacher.teach();


//Polymorphism ဆိုတာ Method နာမည်တူပေမဲ့ Object အမျိုးအစားပေါ်မူတည်ပြီး အလုပ်လုပ်ပုံ မတူတာဖြစ်တယ်။
// class Payment {
//     pay(amount) {
//         throw new Error("pay() must be implemented");
//     }
// }

// class KBZPay extends Payment {
//     pay(amount) {
//         console.log(`Paying ${amount} MMK with KBZ Pay`);
//     }
// }

// class WavePay extends Payment {
//     pay(amount) {
//         console.log(`Paying ${amount} MMK with Wave Pay`);
//     }
// }

// class CashOnDelivery extends Payment {
//     pay(amount) {
//         console.log(`Pay ${amount} MMK when delivered`);
//     }
// }

// const payments = [
//     new KBZPay(),
//     new WavePay(),
//     new CashOnDelivery()
// ];

// payments.forEach((payment) => {
//     payment.pay(50000);
// });


const bank = new Bank();

const savings = new SavingsAccount(
    "Aung Aung",
    100000,
    0.05
);

const checking = new CheckingAccount(
    "Mg Mg",
    50000,
    20000
);

bank.addAccount("ACC001", savings);
bank.addAccount("ACC002", checking);

try {
    const account = bank.getAccount("ACC001");

    account.deposit(20000);
    account.withdraw(10000);
    account.addInterest();

    console.log("Owner:", account.owner);
    console.log("Balance:", account.balance);
    console.log("Transactions:", account.transactions);

    console.log("Total Accounts:", bank.getTotalAccounts());
} catch (error) {
    console.error(error.message);
}

