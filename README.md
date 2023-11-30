# TypeScript Classes

This repository is showcasing how TypeScript concepts, inheritance, and interfaces are applied in class interactions

## Task 1
A Student class containing three properties: name, age, and grade. Instead of declaring these properties in the body of the class, then in the constructor, and finally assigning them values, write a shorter initialization.
```ts
class Student {
  public name: string;
  public age: number;
  public grade: string;

  constructor(name: string, age: number, grade: string) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
}
```
## Task 2
Your task is to create two classes - Employee and Manager.

The Employee class should include:

a 'name' property accessible to everyone.
a 'department' property accessible only within the Employee class.
a 'salary' property accessible only within the Employee class and its subclasses.

The Manager class should be a subclass of the Employee class.

You need to implement a constructor in the Manager class that calls the superclass constructor and increases the salary by 10000.
```ts
class Employee {
  // Fill in the access modifiers
  name: string;
  department: string;
  salary: number;

  constructor(name: string, department: string, salary: number) {
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  // Implement constructor and increase the salary by 10,000
}
```
## Task 3
You are creating a game where there are characters with different roles. Currently, you're working on the Wizard class, which should implement two interfaces - ICharacter and ISpellCaster.

Define the ICharacter and ISpellCaster interfaces to meet the requirements of the Wizard class. The ICharacter interface should include properties 'name' and 'level' and even methods like 'introduce' and 'levelUp'. The ISpellCaster interface should include the 'castSpell' method.
```ts
// Implementation of the Wizard class
class Wizard implements ICharacter, ISpellCaster {
  constructor(public name: string, public level: number) {
    if (this.level < 1) {
      throw new Error('Level too low');
    }
  }

  introduce(phrase: string): void {
    console.log(phrase + ', ' + this.name);
  }

  castSpell(): void {
    console.log('Casting a spell, behold my power!');
  }

  levelUp(): void {
    this.level++;
    console.log(`Level up! New level is ${this.level}`);
  }
}

// Class testing
const wizard = new Wizard('Merlin', 15);

wizard.introduce('I am the mighty wizard');
wizard.castSpell();
wizard.levelUp();  // Level up! New level is 16
```
## Task 4 *
In this task, you'll implement a life scenario where a person, a key, and a house interact with each other.

Key: Create a Key class. It should have one private property 'signature' generated randomly when creating an object of this class (e.g., using Math.random()). This class should also have a 'getSignature' method that returns the value of the 'signature' property.

Person: Create a Person class. The constructor of this class takes an object of the Key class and stores them in a private property 'key'. The Person class should have a 'getKey' method that returns the stored key.

House: Create an abstract class House. This class has two properties: 'door', which can be open (true) or closed (false), and 'key', which holds an object of the Key class. This class should also have a 'comeIn' method that adds an object of the Person class to the 'tenants' array if the door is open. Your abstract class House should also have an abstract method OpenDoor, which takes an object of the Key class.

MyHouse: Create a class MyHouse that inherits from the abstract House class. Implement the openDoor method in this class. If the key passed to this method matches the key stored as 'key', the door opens.

After implementing all the classes, create objects for each class and try to replicate a scenario where a person comes home.

For example:

```ts
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);
```
