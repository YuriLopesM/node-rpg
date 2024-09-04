import { RoleType } from "@/enums";

import { Armor, CamoShell, ChronoMantle, FlexibleVanguard, ShadowMantle } from "@/factories/items/Armor";
import { ArcaneGlove, HolograficDagger, LaserSniper, LightSaber, Weapon } from "@/factories/items/Weapon";
import { ItemFactory } from "@/items";

export class SciFiFactory implements ItemFactory {
  equipWeapon(type: RoleType): Weapon {
    const weaponToEquip: Record<RoleType, Weapon> = {
      Rogue: new HolograficDagger(),
      Warrior: new LightSaber(),
      Mage: new ArcaneGlove(),
      Marksman: new LaserSniper(),
    }

    return weaponToEquip[type]; 
  }

  equipArmor(type: RoleType): Armor {
    const armorToEquip: Record<RoleType, Armor> = {
      Rogue: new ShadowMantle(),
      Warrior: new FlexibleVanguard(),
      Mage: new ChronoMantle(),
      Marksman: new CamoShell(),
    }

    return armorToEquip[type]; 
  }
}