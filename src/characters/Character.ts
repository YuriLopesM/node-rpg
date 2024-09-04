import { Armor, Weapon } from "@/items";

export abstract class Character {
  constructor(
    public name: string,
    public health: number,       // HP 0-50
    public energy: number,       // MP 0-20
    public strength: number,     // 0-10
    public dexterity: number,    // 0-10
    public intelligence: number, // 0-10
    public vitality: number,     // 0-10
    public weapon: Weapon,
    public armor: Armor
  ) {}

  abstract attack(): string;
  abstract defend(): string;
  abstract castSpell(): string;
  abstract castUltimateSpell(): string;

  rollDice(): number {
    const number = Math.floor(Math.random() * 20) + 1;
    console.log(`${this.name} rolled a ${number}!`);

    return number
  }

  skipTurn(): string {
    const energyRestored = this.intelligence * 0.3;
    this.energy += energyRestored;

    return `${this.name} is skipping turn. Energy restored: +${energyRestored}.`;
  }

  isCriticalHit(): boolean {
    return this.rollDice() >= 18;
  }

  isCriticalMiss(): boolean {
    return this.rollDice() <= 5;
  }

  dealDmg(target: Character): string {
    const dmg = this.nextDmg + this.weapon.damage;
    const def = target.bonusDef + target.armor.defense;

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
    this.health -= dmg;

    if (this.isDead()) 
      return `${this.name} received ${dmg} damage and died!`;
    
    return `${this.name} received ${dmg} damage!`;
  }

  private isDead(): boolean {
    return this.health <= 0;
  }

  protected nextDmg: number = 0;
  protected bonusDef: number = 0;
}