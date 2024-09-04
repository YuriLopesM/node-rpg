import {
  CharacterRace,
  MageFactory,
  MarksmanFactory,
  RogueFactory,
  WarriorFactory,
} from ".";

import { Character } from "../../characters";

import { Race, RaceType, Role, RoleType } from "../../enums";

export class CharacterFactory {
  private static factories: Record<RoleType, CharacterRace>;

  constructor() {
    CharacterFactory.factories = {
      [Role.WARRIOR]: new WarriorFactory(),
      [Role.MAGE]: new MageFactory(),
      [Role.ROGUE]: new RogueFactory(),
      [Role.MARKSMAN]: new MarksmanFactory(),
    };
  }

  static createCharacter(
    raceType: RaceType,
    roleType: RoleType,
    name: string,
  ): Character {
    const factory = this.factories[roleType];

    const races = {
      [Race.MIDDLE_AGE]: factory.createMiddleAgeCharacter,
      [Race.SCI_FI]: factory.createSciFiCharacter,
    };

    return races[raceType](name, { x: 0, y: 0 });
  }
}
