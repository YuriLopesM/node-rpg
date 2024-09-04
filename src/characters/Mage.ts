import { Character } from "@/characters/Character";

export class Mage extends Character {
  
  attack(): string {
    if (this.energy < 5) {
      return `${this.name} doesn't have enough energy to attack.`;
    }
    this.energy -= 5;

    const dmg = ((this.intelligence * 0.8) + (this.dexterity * 0.2) + (this.strength * 0.1));
    this.nextDmg = dmg;

    return `${this.name} send a mini-fireball! Dmg: ${dmg}.`;
  }

  defend(): string {
    if (this.energy < 3) {
      return `${this.name} doesn't have enough energy to defend.`;
    }
    this.energy -= 3;

    const def = ((this.intelligence * 0.5) + (this.dexterity * 0.2) + (this.vitality * 0.2));

    this.nextDmg = 0;
    this.bonusDef = def;
    return `${this.name} is defending with a magic shield! More ${def} to defense!`;
  }

  castSpell(): string {
    this.energy += this.intelligence;
    
    return `${this.name} goes with the flow and casts a spell! Energy restored: ${this.intelligence}.`;
  }

  castUltimateSpell(): string {
    if (this.energy < 10) {
      return `${this.name} doesn't have enough energy to cast the ultimate spell.`;
    }
    this.energy -= 10;

    const dmg = this.intelligence * 2;
    this.nextDmg = dmg;
    return `${this.name} casts the ultimate spell: a giant fireball! Dmg: ${dmg}.`;
  }
  
}