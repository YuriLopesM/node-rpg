import {
  CharacterAttributes,
  CharacterItems,
  CharacterStats,
  Coordinate,
} from "../@types";
import { Character } from "./Character";

export class Marksman extends Character {
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
      this.attributes.dexterity * 0.8 + this.attributes.intelligence * 1.2;
    this.nextDmg = dmg;
    console.log(`${this.name} fires an projectile! Dmg: ${dmg}.`);
  }

  defend() {
    if (this.stats.energy < 1) {
      console.log(`${this.name} doesn't have enough energy to defend.`);
    }
    this.stats.energy -= 1;

    const def =
      this.attributes.dexterity * 0.3 + this.attributes.intelligence * 0.2;
    this.bonusDef = def;

    console.log(`${this.name} takes cover! Reduced damage: ${this.nextDmg}.`);
  }

  castSpell() {
    if (this.stats.energy < 2) {
      console.log(`${this.name} doesn't have enough energy to cast a spell.`);
    }
    this.stats.energy -= 2;

    const critChance = this.attributes.dexterity * 0.1;
    const isCrit = Math.random() < critChance;

    if (isCrit) {
      const critDmg = this.nextDmg * 1.5;
      this.nextDmg = critDmg;
      console.log(`${this.name} lands a critical hit! Dmg: ${critDmg}.`);
    } else {
      console.log(`${this.name} fires a precise shot! Dmg: ${this.nextDmg}.`);
    }
  }

  castUltimateSpell() {
    if (this.stats.energy < 5) {
      console.log(
        `${this.name} doesn't have enough energy to cast the ultimate spell.`,
      );
    }
    this.stats.energy -= 5;

    const barrageCount = 5;
    const barrageDmg = this.attributes.dexterity * 0.5;

    let totalDmg = 0;

    for (let i = 0; i < barrageCount; i++) {
      const individualDmg = Math.floor(barrageDmg * (1 + i / barrageCount));
      totalDmg += individualDmg;
    }

    this.nextDmg = totalDmg;
    console.log(
      `${this.name} fires a shot directly through the head! Dmg: ${totalDmg}.`,
    );
  }
}
