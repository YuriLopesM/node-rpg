import {
  CharacterAttributes,
  CharacterItems,
  CharacterStats,
  Coordinate,
} from "../../@types";
import { Character, Warrior } from "../../characters";
import { Role } from "../../enums";
import { MiddleAgeFactory, SciFiFactory } from "../../factories/races";
import { CharacterFactory } from "./CharacterFactory";

export class WarriorFactory implements CharacterFactory {
  createMiddleAgeCharacter(
    name: string,
    initialPosition: Coordinate,
  ): Character {
    const raceFactory = new MiddleAgeFactory();

    const stats: CharacterStats = {
      health: 60,
      energy: 20,
      maxMovement: 1,
    };

    const attributes: CharacterAttributes = {
      strength: 7,
      dexterity: 2,
      intelligence: 2,
      vitality: 8,
    };

    const items: CharacterItems = {
      weapon: raceFactory.equipWeapon(Role.WARRIOR),
      armor: raceFactory.equipArmor(Role.WARRIOR),
    };

    return new Warrior(name, stats, attributes, items, initialPosition);
  }

  createSciFiCharacter(name: string, initialPosition: Coordinate): Character {
    const raceFactory = new SciFiFactory();

    const stats: CharacterStats = {
      health: 75,
      energy: 50,
      maxMovement: 3,
    };

    const attributes: CharacterAttributes = {
      strength: 9,
      dexterity: 4,
      intelligence: 4,
      vitality: 10,
    };

    const items: CharacterItems = {
      weapon: raceFactory.equipWeapon(Role.WARRIOR),
      armor: raceFactory.equipArmor(Role.WARRIOR),
    };

    return new Warrior(name, stats, attributes, items, initialPosition);
  }
}
