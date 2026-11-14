class Animal {
    makeSound() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Woof!");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Meow!");
    }
}

class Cow extends Animal {
    makeSound() {
        console.log("Moo!");
    }
}
//Polymorphism => Polymorphism ဆိုတာ Method နာမည်တူပေမဲ့ Object အမျိုးအစားပေါ်မူတည်ပြီး အလုပ်လုပ်ပုံ မတူတာဖြစ်တယ်။
const animals = [
    new Dog(),
    new Cat(),
    new Cow()
];

animals.forEach((animal) => {
    animal.makeSound();
});


