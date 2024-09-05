import {
  CharacterAttributes,
  CharacterItems,
  CharacterStats,
  Coordinate,
} from "../@types";
import { Character } from "./Character";

export class Mage extends Character {
  constructor(
    public name: string,
    public stats: CharacterStats,
    public attributes: CharacterAttributes,
    public items: CharacterItems,
    public position: Coordinate,
  ) {
    super(name, stats, attributes, items, position);
    this.nextDmg = 0;
    this.bonusDef = 0;
  }

  attack() {
    if (this.stats.energy < 5) {
      console.log(`${this.name} doesn't have enough energy to attack.`);
    }
    this.stats.energy -= 5;
    const dmg =
      this.attributes.intelligence * 0.8 +
      this.attributes.dexterity * 0.2 +
      this.attributes.strength * 0.1;
    this.nextDmg = dmg;
    console.log(`${this.name} send a mini-fireball! Dmg: ${dmg}.`);
  }

  defend() {
    if (this.stats.energy < 3) {
      console.log(`${this.name} doesn't have enough energy to defend.`);
    }
    this.stats.energy -= 3;
    const def =
      this.attributes.intelligence * 0.5 +
      this.attributes.dexterity * 0.2 +
      this.attributes.vitality * 0.2;

    this.nextDmg = 0;
    this.bonusDef = def;

    console.log(
      `${this.name} is defending with a magic shield! More ${def} to defense!`,
    );
  }

  castSpell() {
    this.stats.energy += this.attributes.intelligence;
    console.log(
      `${this.name} goes with the flow and casts a spell! Energy restored: +${this.attributes.intelligence}.`,
    );
  }

  castUltimateSpell() {
    if (this.stats.energy < 7) {
      console.log(
        `${this.name} doesn't have enough energy to cast the ultimate spell.`,
      );
    }

    this.stats.energy -= 7;
    const dmg = this.attributes.intelligence * 2;

    this.nextDmg = dmg;
    console.log(
      `${this.name} casts the ultimate spell: a giant fireball! Dmg: ${dmg}.`,
    );
  }
}
