class Person {
  //property => ma thone
  // name = "Pyae Sone Aung";
  // age = 21;

  static knowledge = ["html", "css", "js"];

  //private property => access modifier
  #money = 0;
  //method

  constructor(name, age, gender, money) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.#money = money;
  }
  eat() {
    return `${this.name} can eat food`;
  }

  sleep() {
    return `${this.name} can sleep anywhere`;
  }

  static run() {
    return `person can run`;
  }
}
export default Person;
