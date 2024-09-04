import {
  CharacterAttributes,
  CharacterItems,
  CharacterStats,
  Coordinate,
} from "../../@types";
import { Character, Mage } from "../../characters";
import { Role } from "../../enums";
import { MiddleAgeFactory, SciFiFactory } from "../../factories/races";
import { CharacterFactory } from "./CharacterFactory";

export class MageFactory implements CharacterFactory {
  createMiddleAgeCharacter(
    name: string,
    initialPosition: Coordinate,
  ): Character {
    const raceFactory = new MiddleAgeFactory();

    const stats: CharacterStats = {
      health: 50,
      energy: 40,
      maxMovement: 2,
    };

    const attributes: CharacterAttributes = {
      strength: 3,
      dexterity: 4,
      intelligence: 8,
      vitality: 4,
    };

    const items: CharacterItems = {
      weapon: raceFactory.equipWeapon(Role.MAGE),
      armor: raceFactory.equipArmor(Role.MAGE),
    };

    return new Mage(name, stats, attributes, items, initialPosition);
  }

  createSciFiCharacter(name: string, initialPosition: Coordinate): Character {
    const raceFactory = new SciFiFactory();

    const stats: CharacterStats = {
      health: 75,
      energy: 60,
      maxMovement: 2,
    };

    const attributes: CharacterAttributes = {
      strength: 5,
      dexterity: 6,
      intelligence: 10,
      vitality: 5,
    };

    const items: CharacterItems = {
      weapon: raceFactory.equipWeapon(Role.MAGE),
      armor: raceFactory.equipArmor(Role.MAGE),
    };

    return new Mage(name, stats, attributes, items, initialPosition);
  }
}
