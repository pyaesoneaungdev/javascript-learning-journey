import Person from "./Person";

class Student extends Person {
    study() {
        console.log(`${this.name} is studying`);
    }
}
export default Student;