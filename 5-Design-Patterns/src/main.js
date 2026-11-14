//Single Responsibility Principle (SRP) => Class တစ်ခုမှာ အဓိက တာဝန်တစ်ခုသာ ရှိသင့်တယ်။

// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }
// }

// class UserRepository {
//     save(user) {
//         console.log(`Saving ${user.name} to database`);
//     }
// }

// class EmailService {
//     send(user) {
//         console.log(`Sending email to ${user.email}`);
//     }
// }

// class ReportService {
//     generate(user) {
//         console.log(`Generating report for ${user.name}`);
//     }
// }

// const user = new User("Aung Aung", "aung@gmail.com");
// console.log(user);
// const repository = new UserRepository();
// const emailService = new EmailService();
// const reportService = new ReportService();

// repository.save(user);
// emailService.send(user);
// reportService.generate(user);


//Open/Closed Principle (OCP) => Software ကို Feature အသစ်ထပ်တိုးနိုင်ရမယ်။ ရှိပြီးသား Code ကို အမြဲပြင်နေရတာမျိုး မဖြစ်သင့်ဘူး။
class KBZPay {
    pay(amount) {
        console.log(`KBZ Pay: ${amount}`);
    }
}

class WavePay {
    pay(amount) {
        console.log(`Wave Pay: ${amount}`);
    }
}

function checkout(paymentMethod, amount) {
    paymentMethod.pay(amount);
}

checkout(new KBZPay(), 50000);
checkout(new WavePay(), 30000);

//Liskov Substitution Principle (LSP) => Child Class ကို Parent Class အစား အစားထိုးသုံးလိုက်တဲ့အခါ မျှော်လင့်ထားတဲ့ အလုပ်လုပ်ပုံ မပျက်သင့်ဘူး။
class Bird {
    eat() {
        console.log("Bird is eating");
    }
}

class FlyingBird extends Bird {
    fly() {
        console.log("Bird is flying");
    }
}

class Eagle extends FlyingBird {}

const eagle = new Eagle();

eagle.eat();
eagle.fly();

//Interface Segregation Principle (ISP) => Class တစ်ခုကို မလိုအပ်တဲ့ Methods တွေ အတင်းမပေးသင့်ဘူး။
class BasicPrinter {
    print() {
        console.log("Printing...");
    }
}

class MultiFunctionPrinter {
    print() {
        console.log("Printing...");
    }

    scan() {
        console.log("Scanning...");
    }

    fax() {
        console.log("Faxing...");
    }
}

//Dependency Inversion Principle (DIP) => High-level Module က Low-level Module တစ်ခုတည်းအပေါ် တိုက်ရိုက်မှီခိုမနေသင့်ဘူး။ လိုအပ်တဲ့ Dependency ကို အပြင်ကနေ ထည့်ပေးနိုင်တဲ့ပုံစံက ပိုပြောင်းလွယ်တယ်။
class EmailService {
    send(message) {
        console.log(`Email: ${message}`);
    }
}

class Notification {
    constructor(service) {
        this.service = service;
    }

    send(message) {
        this.service.send(message);
    }
}

const emailService = new EmailService();
const notification = new Notification(emailService);

notification.send("Your order is confirmed");


//js pattern
//Singleton Pattern => Object တစ်ခုတည်းပဲ ဖန်တီးပြီး Application တစ်ခုလုံးမှာ ပြန်သုံးချင်တဲ့အခါ အသုံးပြုတယ်။
class Database {
    constructor() {
        if (Database.instance) {
            return Database.instance;
        }

        this.connection = "Database Connected";

        Database.instance = this;
    }

    getConnection() {
        return this.connection;
    }
}

const db1 = new Database();
const db2 = new Database();

console.log(db1.getConnection());
console.log(db1 === db2);

//Factory Pattern => Object ဘယ်အမျိုးအစား ဖန်တီးရမလဲဆိုတာကို Factory တစ်ခုက ဆုံးဖြတ်ပေးတယ်။
class Admin {
    constructor(name) {
        this.name = name;
        this.role = "admin";
    }
}

class Customer {
    constructor(name) {
        this.name = name;
        this.role = "customer";
    }
}

class Editor {
    constructor(name) {
        this.name = name;
        this.role = "editor";
    }
}
function createUser(name, role) {
    switch (role) {
        case "admin":
            return new Admin(name);

        case "customer":
            return new Customer(name);

        case "editor":
            return new Editor(name);

        default:
            throw new Error("Invalid user role");
    }
}
const user1 = createUser("Aung Aung", "admin");
const user2 = createUser("Mg Mg", "customer");

console.log(user1);
console.log(user2);

//Observer Pattern => Object တစ်ခုမှာ အပြောင်းအလဲဖြစ်တဲ့အခါ အခြား Object တွေကို အသိပေးတဲ့ Pattern ဖြစ်တယ်။
//ဥပမာ YouTube Channel တစ်ခုကို Subscribe လုပ်ထားတယ်ဆိုပါစို့။ Video အသစ်တင်တဲ့အခါ Subscriber တွေဆီ Notification ပို့ပေးတယ်။
class YouTubeChannel {
    constructor() {
        this.subscribers = [];
    }

    subscribe(callback) {
        this.subscribers.push(callback);
    }

    uploadVideo(title) {
        console.log(`New video: ${title}`);

        this.subscribers.forEach((callback) => {
            callback(title);
        });
    }
}

const channel = new YouTubeChannel();

channel.subscribe((title) => {
    console.log(`User A notified: ${title}`);
});

channel.subscribe((title) => {
    console.log(`User B notified: ${title}`);
});

channel.uploadVideo("JavaScript OOP Tutorial");

//Strategy Pattern => အလုပ်တစ်ခုကို လုပ်ဆောင်ဖို့ နည်းလမ်းအမျိုးမျိုးကို လွယ်လွယ်ကူကူ ပြောင်းလဲအသုံးပြုနိုင်တဲ့ Pattern ဖြစ်တယ်။
const discountStrategies = {
    normal(price) {
        return price;
    },

    member(price) {
        return price * 0.9;
    },

    vip(price) {
        return price * 0.8;
    }
};

function calculatePrice(price, strategy) {
    const calculateDiscount = discountStrategies[strategy];

    if (!calculateDiscount) {
        throw new Error("Invalid discount strategy");
    }

    return calculateDiscount(price);
}
console.log(calculatePrice(100000, "normal"));
console.log(calculatePrice(100000, "member"));
console.log(calculatePrice(100000, "vip"));

//Module Pattern => Module တစ်ခုအတွင်းက Data ကို အပြင်ကနေ တိုက်ရိုက်မရယူနိုင်အောင် ထိန်းချုပ်တဲ့ Pattern ဖြစ်တယ်။
const bankAccount = (function () {
    let balance = 0;

    function validateAmount(amount) {
        return amount > 0;
    }

    return {
        deposit(amount) {
            if (!validateAmount(amount)) {
                throw new Error("Invalid amount");
            }

            balance += amount;
        },

        getBalance() {
            return balance;
        }
    };
})();
bankAccount.deposit(50000);
bankAccount.deposit(20000);

console.log(bankAccount.getBalance());