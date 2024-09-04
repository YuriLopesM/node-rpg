interface Weapon {
  name: string;
  damage: number;
  range: number;
}

class SteelKunai implements Weapon {
  name = "Steel Kunai";
  damage = 10;
  range = 1;
}

class SteelSword implements Weapon {
  name = "Steel Sword";
  damage = 7;
  range = 2;
}

class WoodStaff implements Weapon {
  name = "Wood Staff";
  damage = 4;
  range = 4;
}

class Bow implements Weapon {
  name = "Bow";
  damage = 3;
  range = 6;
}

class HolograficDagger implements Weapon {
  name = "Holografic Dagger";
  damage = 15;
  range = 1;
}

class LightSaber implements Weapon {
  name = "Light Saber";
  damage = 10;
  range = 3;
}

class ArcaneGlove implements Weapon {
  name = "Arcane Glove";
  damage = 6;
  range = 6;
}

class LaserSniper implements Weapon {
  name = "Laser Sniper";
  damage = 15;
  range = 8;
}

export {
  ArcaneGlove,
  Bow,
  HolograficDagger,
  LaserSniper,
  LightSaber,
  SteelKunai,
  SteelSword,
  Weapon,
  WoodStaff,
};
