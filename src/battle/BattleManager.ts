import {
  CharacterFactory,
  MageFactory,
  MarksmanFactory,
  RogueFactory,
  WarriorFactory,
} from "../factories/roles";

import { Character } from "../characters";

import { Race, RaceType, Role, RoleType } from "../enums";

export class BattleManager {
  static createCharacter(
    raceType: RaceType,
    roleType: RoleType,
    name: string,
  ): Character {
    const factories: Record<RoleType, CharacterFactory> = {
      [Role.WARRIOR]: new WarriorFactory(),
      [Role.MAGE]: new MageFactory(),
      [Role.ROGUE]: new RogueFactory(),
      [Role.MARKSMAN]: new MarksmanFactory(),
    };
    const factory = factories[roleType];
    const races = {
      [Race.MIDDLE_AGE]: factory.createMiddleAgeCharacter(name, { x: 0, y: 0 }),
      [Race.SCI_FI]: factory.createSciFiCharacter(name, { x: 0, y: 0 }),
    };

    return races[raceType];
  }
}
