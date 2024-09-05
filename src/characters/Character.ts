import chalk from "chalk";
import {
  CharacterAttributes,
  CharacterItems,
  CharacterStats,
  Coordinate,
} from "../@types";
import { Action, ActionType } from "../enums";

export abstract class Character {
  constructor(
    public name: string,
    public stats: CharacterStats,
    public attributes: CharacterAttributes,
    public items: CharacterItems,
    public position: Coordinate,
  ) {
    this.name = name;
    this.stats = stats;
    this.attributes = attributes;
    this.items = items;
    this.position = position;
    this.nextDmg = 0;
    this.bonusDef = 0;
  }

  doAction(action: ActionType): void {
    const actionSelected: { [key in ActionType]: () => void } = {
      [Action.ATTACK]: () => this.attack(),
      [Action.DEFEND]: () => this.defend(),
      [Action.CAST_SPELL]: () => this.castSpell(),
      [Action.CAST_ULTIMATE]: () => this.castUltimateSpell(),
      [Action.SKIP]: () => this.skipTurn(),
    };

    if (!actionSelected[action]) {
      throw new Error(`Action ${action} is not valid!`);
    }

    actionSelected[action]();
  }

  rollDice(): number {
    const number = Math.floor(Math.random() * 20) + 1;
    console.log(`${this.name} rolled a ${number}!`);
    return number;
  }

  move(newPosition: Coordinate): void {
    const possibleMove =
      this.calculateDistance(newPosition) <= this.stats.maxMovement;
    if (!possibleMove) {
      chalk.white(`${this.name} can't move to that position!`);
    }
    this.position = newPosition;
    chalk.white(
      `${this.name} moved to position x: ${newPosition.x}, y: ${newPosition.y}.`,
    );
  }

  skipTurn(): void {
    const energyRestored = this.attributes.intelligence * 0.3;
    this.stats.energy += energyRestored;
    chalk.white(
      `${this.name} skipped the turn and restored ${energyRestored} energy!`,
    );
  }

  dealDmg(target: Character): void {
    if (!this.canAttack(target.position)) {
      chalk.white(`${this.name} is too far from ${target.name} to attack!`);
    }
    const dmg = this.nextDmg + this.items.weapon.damage;
    const def = target.bonusDef + target.items.armor.defense;

    if (dmg <= def) {
      chalk.white(
        `${this.name} landed a hit, but ${target.name} received 0 damage!`,
      );
    }

    const totalDmg = dmg - def;

    if (this.isCriticalHit()) {
      target.receiveDmg(totalDmg * 1.75);
      chalk.white(
        `${this.name} landed a critical hit! ${target.name} received ${totalDmg * 2} damage!`,
      );
    }

    if (this.isCriticalMiss()) {
      chalk.white(`${this.name} missed the attack!`);
    }

    target.receiveDmg(totalDmg);
    chalk.white(
      `${this.name} landed a hit! ${target.name} received ${totalDmg} damage!`,
    );
  }

  receiveDmg(dmg: number): void {
    this.stats.health -= dmg;

    if (this.isDead())
      chalk.white(`${this.name} received ${dmg} damage and died!`);

    chalk.white(`${this.name} received ${dmg} damage!`);
  }

  private isCriticalHit() {
    return this.rollDice() >= 18;
  }

  private isCriticalMiss() {
    return this.rollDice() <= 5;
  }

  private calculateDistance(targetPosition: Coordinate): number {
    return Math.sqrt(
      Math.pow(targetPosition.x - this.position.x, 2) +
        Math.pow(targetPosition.y - this.position.y, 2),
    );
  }

  private canAttack(targetPosition: Coordinate): boolean {
    return this.calculateDistance(targetPosition) <= this.items.weapon.range;
  }

  private isDead() {
    return this.stats.health <= 0;
  }

  protected nextDmg: number;
  protected bonusDef: number;
  protected abstract attack(): void;
  protected abstract defend(): void;
  protected abstract castSpell(): void;
  protected abstract castUltimateSpell(): void;
}
