/*
  You are creating a game where there are characters with different roles.
  Currently, you're working on the Wizard class, which should implement two interfaces - ICharacter and ISpellCaster.

  Define the ICharacter and ISpellCaster interfaces to meet the requirements of the Wizard class.
  The ICharacter interface should include properties 'name' and 'level' and even methods like 'introduce' and 'levelUp'.
  The ISpellCaster interface should include the 'castSpell' method.
*/

interface ICharacter {
  name: string;
  level: number;
  introduce(phrase: string): void;
  levelUp(): void;
}

interface ISpellCaster {
  castSpell(): void;
}

// Implementation of the Wizard class
class Wizard implements ICharacter, ISpellCaster {
  constructor(public name: string, public level: number) {
    if (this.level < 1) {
      throw new Error("Level too low");
    }
  }

  introduce(phrase: string): void {
    console.log(phrase + ", " + this.name);
  }

  castSpell(): void {
    console.log("Casting a spell, behold my power!");
  }

  levelUp(): void {
    this.level++;
    console.log(`Level up! New level is ${this.level}`);
  }
}

// Class testing
const wizard = new Wizard("Merlin", 15);

wizard.introduce("I am the mighty wizard");
wizard.castSpell();
wizard.levelUp(); // Level up! New level is 16

export {};
