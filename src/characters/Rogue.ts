import {
  CharacterAttributes,
  CharacterItems,
  CharacterStats,
  Coordinate,
} from "../@types";
import { Character } from "./Character";

export class Rogue extends Character {
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
    if (this.stats.energy < 1) {
      console.log(`${this.name} doesn't have enough energy to attack.`);
    }
    this.stats.energy -= 1;

    const dmg =
      this.attributes.dexterity * 1.5 + this.attributes.strength * 0.1;

    this.nextDmg = dmg;
    console.log(`${this.name} strikes from the shadows! Dmg: ${dmg}.`);
  }

  defend() {
    if (this.stats.energy < 1) {
      console.log(`${this.name} doesn't have enough energy to defend.`);
    }
    this.stats.energy -= 1;

    const dodgeChance = this.attributes.dexterity * 0.2;
    const dodge = Math.random() < dodgeChance;

    if (dodge) {
      this.nextDmg = 0;
      console.log(`${this.name} dodges the attack!`);
    } else {
      const def =
        this.attributes.vitality * 0.5 + this.attributes.dexterity * 0.2;
      this.bonusDef = def;
      console.log(
        `${this.name} tries to dodge! Reduced damage: ${this.bonusDef}.`,
      );
    }
  }

  castSpell() {
    if (this.stats.energy < 3) {
      console.log(`${this.name} doesn't have enough energy to cast a spell.`);
    }
    this.stats.energy -= 3;

    const backstabBonus = Math.floor(Math.random() * this.attributes.dexterity);
    const dmg = this.attributes.dexterity + backstabBonus;

    this.nextDmg = dmg;
    console.log(`${this.name} uses backstab! Dmg: ${dmg}.`);
  }

  castUltimateSpell() {
    if (this.stats.energy < 5) {
      console.log(
        `${this.name} doesn't have enough energy to cast the ultimate spell.`,
      );
    }
    this.stats.energy -= 5;

    const dmg = this.attributes.dexterity * 2 + this.attributes.strength;
    this.nextDmg = dmg;

    console.log(`${this.name} throws a flurry of daggers! Dmg: ${dmg}.`);
  }
}
