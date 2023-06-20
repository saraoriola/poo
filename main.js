//EJERCICIOS POO

//Ejercicio 1 - Crea la clase Persona, con las propiedades nombre, edad y género, y el método obtDetalles(), que muestre por pantalla las propiedades de la persona.
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    getDetails() {
        console.log(`Hello, I'm ${this.name}! I am ${this.age} years old and I am ${this.gender}.`);
    }
}

let person1 = new Person("Sara", "26", "Female");
person1.getDetails();


//Ejercicio 2 - Crea la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.
class Student extends Person {
    constructor(name, age, gender, course, group) {
        super(name, age, gender);
        this.course = course;
        this.group = group;
    }
    register() {
        console.log(`Hello, I'm ${this.name}! I am ${this.age} years old and I am ${this.gender}. I am studying ${this.course} and I am part of the ${this.group} group.`);
    }
}

let person2 = new Student("Sara", "26", "Female", "Full Stack", "May 2023");
person2.register();


//Ejercicio 3 - Crea la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.

class Professor extends Person {
    constructor(name, age, gender, subject, level) {
        super(name, age, gender);
        this.subject = subject;
        this.level = level;
    }
    assign() {
        console.log(`My professor is ${this.name}. They are ${this.age} years old and they are ${this.gender}. They teach ${this.subject} at an ${this.level} level.`);
    }
}

let professor = new Professor("Pepito", "48", "Male", "Hospitality", "Advanced");
professor.assign();
