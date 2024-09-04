import { Coordinate } from "../../@types";
import { Character } from "../../characters";

export interface CharacterRace {
  createMiddleAgeCharacter(
    name: string,
    initialPosition: Coordinate,
  ): Character;
  createSciFiCharacter(name: string, initialPosition: Coordinate): Character;
}
