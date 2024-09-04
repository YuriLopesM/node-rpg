import {
  CharacterAttributes,
  CharacterItems,
  CharacterStats,
  Coordinate,
} from "../../@types";
import { Character, Rogue } from "../../characters";
import { Role } from "../../enums";
import { MiddleAgeFactory, SciFiFactory } from "../../factories/races";
import { CharacterFactory } from "./CharacterFactory";

export class RogueFactory implements CharacterFactory {
  createMiddleAgeCharacter(
    name: string,
    initialPosition: Coordinate,
  ): Character {
    const raceFactory = new MiddleAgeFactory();

    const stats: CharacterStats = {
      health: 40,
      energy: 30,
      maxMovement: 3,
    };

    const attributes: CharacterAttributes = {
      strength: 3,
      dexterity: 8,
      intelligence: 3,
      vitality: 4,
    };

    const items: CharacterItems = {
      weapon: raceFactory.equipWeapon(Role.ROGUE),
      armor: raceFactory.equipArmor(Role.ROGUE),
    };

    return new Rogue(name, stats, attributes, items, initialPosition);
  }

  createSciFiCharacter(name: string, initialPosition: Coordinate): Character {
    const raceFactory = new SciFiFactory();

    const stats: CharacterStats = {
      health: 55,
      energy: 45,
      maxMovement: 5,
    };

    const attributes: CharacterAttributes = {
      strength: 5,
      dexterity: 10,
      intelligence: 4,
      vitality: 6,
    };

    const items: CharacterItems = {
      weapon: raceFactory.equipWeapon(Role.ROGUE),
      armor: raceFactory.equipArmor(Role.ROGUE),
    };

    return new Rogue(name, stats, attributes, items, initialPosition);
  }
}
