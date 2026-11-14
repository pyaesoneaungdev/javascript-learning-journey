import Person from "./Person";

class Teacher extends Person {
    teach() {
        console.log(`${this.name} is teaching`);
    }
}

export default Teacher;
