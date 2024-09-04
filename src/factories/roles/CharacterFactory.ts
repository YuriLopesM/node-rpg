import { Coordinate } from "../../@types";
import { Character } from "../../characters";

export interface CharacterFactory {
  createMiddleAgeCharacter(
    name: string,
    initialPosition: Coordinate,
  ): Character;
  createSciFiCharacter(name: string, initialPosition: Coordinate): Character;
}
