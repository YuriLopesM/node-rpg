import { RoleType } from "../../enums";
import { Armor } from "../../items/Armor";
import { Weapon } from "../../items/Weapon";

export interface RaceFactory {
  equipWeapon(type: RoleType): Weapon;
  equipArmor(type: RoleType): Armor;
}
