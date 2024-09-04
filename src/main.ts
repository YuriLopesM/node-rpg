import { BattleManager } from "./battle/BattleManager";
import { Race, Role } from "./enums";

interface Tile {
  type: string;
  walkable: boolean;
  symbol: string;
}

let map: Tile[][] = Array.from({ length: 15 }, () =>
  Array(15).fill({ type: "Empty", walkable: true, symbol: "." }),
);

map[0][0] = { type: "Forest", walkable: true, symbol: "T" };
map[2][3] = { type: "River", walkable: false, symbol: "~" };
map[5][5] = { type: "Mountain", walkable: false, symbol: "^" };
map[9][9] = { type: "Village", walkable: true, symbol: "H" };

function drawMapWithBorders(map: Tile[][]): void {
  const tileWidth = 2;
  const horizontalBorder =
    "+" + "-".repeat(map[0].length * tileWidth - 1) + "+";

  console.log(horizontalBorder);

  for (let row of map) {
    let rowString = row.map(tile => `${tile.symbol} `).join(""); // Add space for alignment
    console.log("|" + rowString.padEnd(map[0].length * tileWidth - 1) + "|"); // Row with borders
  }

  console.log(horizontalBorder);
}

drawMapWithBorders(map);

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
