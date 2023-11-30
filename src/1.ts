/*
  A Student class containing three properties: name, age, and grade.
  Instead of declaring these properties in the body of the class, then in the constructor, and finally assigning them values,
  write a shorter initialization.
*/

class Student {
  constructor(public name: string, public age: number, public grade: string) {}
}

export {};
