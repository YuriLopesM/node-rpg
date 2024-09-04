
interface Armor {
  name: string;
  defense: number;
}

class NinjaCloak implements Armor {
  name = "Ninja Cloak";
  defense = 6;
}

class SteelArmor implements Armor {
  name = "Steel Armor";
  defense = 5;
}

class Tunic implements Armor {
  name = "Tunic";
  defense = 4;
}

class LeatherCloathes implements Armor {
  name = "Leather Clothes";
  defense = 3;
}

class ShadowMantle implements Armor {
  name = "Shadow Mantle";
  defense = 12;
}

class FlexibleVanguard implements Armor {
  name = "Flexible Vanguard";
  defense = 10;
}

class ChronoMantle implements Armor {
  name = "Chrono Mantle";
  defense = 8;
}

class CamoShell implements Armor {
  name = "Camo Shell";
  defense = 6;
}

export { Armor, CamoShell, ChronoMantle, FlexibleVanguard, LeatherCloathes, NinjaCloak, ShadowMantle, SteelArmor, Tunic };

