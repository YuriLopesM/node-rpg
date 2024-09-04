import { Armor, Weapon } from "../items";

export type CharacterAttributes = {
  strength: number;
  dexterity: number;
  intelligence: number;
  vitality: number;
};

export type CharacterStats = {
  health: number;
  energy: number;
  maxMovement: number;
};

export type CharacterItems = {
  weapon: Weapon;
  armor: Armor;
};

export type Coordinate = {
  x: number;
  y: number;
};
