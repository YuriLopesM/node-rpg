import {
  CharacterAttributes,
  CharacterItems,
  CharacterStats,
  Coordinate,
} from "../../@types";
import { Character, Marksman } from "../../characters";
import { Role } from "../../enums";
import { MiddleAgeFactory, SciFiFactory } from "../../factories/races";
import { CharacterFactory } from "./CharacterFactory";

export class MarksmanFactory implements CharacterFactory {
  createMiddleAgeCharacter(
    name: string,
    initialPosition: Coordinate,
  ): Character {
    const raceFactory = new MiddleAgeFactory();

    const stats: CharacterStats = {
      health: 40,
      energy: 25,
      maxMovement: 1,
    };

    const attributes: CharacterAttributes = {
      strength: 4,
      dexterity: 8,
      intelligence: 4,
      vitality: 3,
    };

    const items: CharacterItems = {
      weapon: raceFactory.equipWeapon(Role.MARKSMAN),
      armor: raceFactory.equipArmor(Role.MARKSMAN),
    };

    return new Marksman(name, stats, attributes, items, initialPosition);
  }

  createSciFiCharacter(name: string, initialPosition: Coordinate): Character {
    const raceFactory = new SciFiFactory();

    const stats: CharacterStats = {
      health: 60,
      energy: 55,
      maxMovement: 2,
    };

    const attributes: CharacterAttributes = {
      strength: 5,
      dexterity: 10,
      intelligence: 5,
      vitality: 5,
    };

    const items: CharacterItems = {
      weapon: raceFactory.equipWeapon(Role.MARKSMAN),
      armor: raceFactory.equipArmor(Role.MARKSMAN),
    };

    return new Marksman(name, stats, attributes, items, initialPosition);
  }
}
