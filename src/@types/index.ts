import { ColorName } from "chalk";
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

export type MapSize = {
  width: number;
  height: number;
};

export type Tile = {
  type: string;
  walkable: boolean;
  bgColor: ColorName;
  textColor: ColorName;
};

export type Map = Tile[][];

export type MapRange = {
  start: Coordinate;
  end: Coordinate;
};
