import chalk from "chalk";
import {
  CharacterAttributes,
  CharacterItems,
  CharacterStats,
  Coordinate,
} from "../@types";
import { Character } from "./Character";

export class Warrior extends Character {
  constructor(
    public name: string,
    public stats: CharacterStats,
    public attributes: CharacterAttributes,
    public items: CharacterItems,
    public position: Coordinate,
  ) {
    super(name, stats, attributes, items, position);
  }

  attack() {
    if (this.stats.energy < 2) {
      console.log(`${this.name} doesn't have enough energy to attack.`);
    }
    this.stats.energy -= 2;

    const dmg = Math.round(
      this.attributes.strength + this.attributes.dexterity * 0.2,
    );
    this.nextDmg = dmg;
    console.log(chalk.cyanBright(`${this.name} swings his sword!`));
  }

  defend() {
    if (this.stats.energy < 2) {
      console.log(`${this.name} doesn't have enough energy to defend.`);
    }
    this.stats.energy -= 2;

    const def = this.attributes.vitality * 0.8 + this.attributes.strength * 0.1;

    this.nextDmg = 0;
    this.bonusDef = def;
    console.log(`${this.name} is defending!`);
  }

  castSpell() {
    const rage = this.attributes.strength * 0.5;
    this.attributes.strength += rage;

    console.log(`${this.name} erases in rage! Increase in strength: +${rage}.`);
  }

  castUltimateSpell() {
    if (this.stats.energy < 10) {
      console.log(
        `${this.name} doesn't have enough energy to cast the ultimate spell.`,
      );
    }
    this.stats.energy -= 10;

    const dmg = this.attributes.strength * 2;
    this.nextDmg = dmg;

    console.log(
      `${this.name} casts the ultimate spell: a giant sword falls from heaven! Dmg: ${dmg}.`,
    );
  }
}
