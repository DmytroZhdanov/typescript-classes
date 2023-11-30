/*
  Your task is to create two classes - Employee and Manager.

  The Employee class should include:

  a 'name' property accessible to everyone.
  a 'department' property accessible only within the Employee class.
  a 'salary' property accessible only within the Employee class and its subclasses.

  The Manager class should be a subclass of the Employee class

  You need to implement a constructor in the Manager class that calls the superclass constructor and increases the salary by 10000.

*/

class Employee {
  constructor(public name: string, private department: string, protected salary: number) {}

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary + 10000);
  }
}

export {};
