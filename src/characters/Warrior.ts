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
    this.nextDmg = 0;
    this.bonusDef = 0;
  }

  attack() {
    if (this.stats.energy < 2) {
      return `${this.name} doesn't have enough energy to attack.`;
    }
    this.stats.energy -= 2;

    const dmg = this.attributes.strength + this.attributes.dexterity * 0.2;
    this.nextDmg = dmg;

    return `${this.name} swings his sword! Dmg: ${dmg}.`;
  }

  defend() {
    if (this.stats.energy < 2) {
      return `${this.name} doesn't have enough energy to defend.`;
    }
    this.stats.energy -= 2;

    const def = this.attributes.vitality * 0.8 + this.attributes.strength * 0.1;

    this.nextDmg = 0;
    this.bonusDef = def;
    return `${this.name} is defending! More ${def} to defense!`;
  }

  castSpell() {
    const rage = this.attributes.strength * 0.2;
    this.attributes.strength += rage;

    return `${this.name} erases in rage! Increase in strength: +${rage}.`;
  }

  castUltimateSpell() {
    if (this.stats.energy < 10) {
      return `${this.name} doesn't have enough energy to cast the ultimate spell.`;
    }
    this.stats.energy -= 10;

    const dmg = this.attributes.intelligence * 2;
    this.nextDmg = dmg;

    return `${this.name} casts the ultimate spell: a giant sword falls from heaven! Dmg: ${dmg}.`;
  }
}
