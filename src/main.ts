import { BattleManager } from "./battle/BattleManager";
import { Race, Role } from "./enums";

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

main();
