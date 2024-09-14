import { BattleManager } from "./battle/BattleManager";
import { Race, Role } from "./enums";
import { MapBuilder } from "./map";

const main = () => {
  const Player1 = BattleManager.createCharacter(
    Race.MIDDLE_AGE,
    Role.WARRIOR,
    "Juggernaut",
  );
  Player1.move({ x: 1, y: 1 });
  Player1.doAction("Attack");
  Player1.doAction("Defend");
  Player1.doAction("Cast");
  Player1.doAction("Ultimate");
  Player1.doAction("Skip");
};

const map = new MapBuilder();

map
  .setSize({ width: 5, height: 5 })
  .setForest({ start: { x: 0, y: 0 }, end: { x: 4, y: 4 } })
  .drawMap();
