import { RoleType } from "../../enums";

import { RaceFactory } from "../../factories/races";

import {
  Armor,
  LeatherCloathes,
  NinjaCloak,
  SteelArmor,
  Tunic,
} from "../../items/Armor";
import {
  Bow,
  SteelKunai,
  SteelSword,
  Weapon,
  WoodStaff,
} from "../../items/Weapon";

export class MiddleAgeFactory implements RaceFactory {
  equipWeapon(type: RoleType): Weapon {
    const weaponToEquip: Record<RoleType, Weapon> = {
      Rogue: new SteelKunai(),
      Warrior: new SteelSword(),
      Mage: new WoodStaff(),
      Marksman: new Bow(),
    };

    return weaponToEquip[type];
  }

  equipArmor(type: RoleType): Armor {
    const armorToEquip: Record<RoleType, Armor> = {
      Rogue: new NinjaCloak(),
      Warrior: new SteelArmor(),
      Mage: new Tunic(),
      Marksman: new LeatherCloathes(),
    };

    return armorToEquip[type];
  }
}
