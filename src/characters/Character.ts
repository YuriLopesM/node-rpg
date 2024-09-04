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

  move(newPosition: Coordinate): string {
    const possibleMove =
      this.calculateDistance(newPosition) <= this.stats.maxMovement;
    if (!possibleMove) {
      return `${this.name} can't move to that position!`;
    }
    this.position = newPosition;
    return `${this.name} moved to position x: ${newPosition.x}, y: ${newPosition.y}.`;
  }

  skipTurn(): string {
    const energyRestored = this.attributes.intelligence * 0.3;
    this.stats.energy += energyRestored;
    return `${this.name} skipped the turn and restored ${energyRestored} energy!`;
  }

  dealDmg(target: Character): string {
    if (!this.canAttack(target.position)) {
      return `${this.name} is too far from ${target.name} to attack!`;
    }
    const dmg = this.nextDmg + this.items.weapon.damage;
    const def = target.bonusDef + target.items.armor.defense;

    if (dmg <= def) {
      return `${this.name} landed a hit, but ${target.name} received 0 damage!`;
    }

    const totalDmg = dmg - def;

    if (this.isCriticalHit()) {
      target.receiveDmg(totalDmg * 1.75);
      return `${this.name} landed a critical hit! ${target.name} received ${totalDmg * 2} damage!`;
    }

    if (this.isCriticalMiss()) {
      return `${this.name} missed the attack!`;
    }

    target.receiveDmg(totalDmg);
    return `${this.name} landed a hit! ${target.name} received ${totalDmg} damage!`;
  }

  receiveDmg(dmg: number): string {
    this.stats.health -= dmg;

    if (this.isDead()) return `${this.name} received ${dmg} damage and died!`;

    return `${this.name} received ${dmg} damage!`;
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
  protected abstract attack(): string;
  protected abstract defend(): string;
  protected abstract castSpell(): string;
  protected abstract castUltimateSpell(): string;
}
