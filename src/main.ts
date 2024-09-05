import chalk, { type ColorName } from "chalk";
import { BattleManager } from "./battle/BattleManager";
import { Race, Role } from "./enums";

interface Tile {
  type: string;
  walkable: boolean;
  symbol: string;
  textColor: ColorName;
}

let map: Tile[][] = Array.from({ length: 15 }, () =>
  Array(15).fill({
    type: "Empty",
    walkable: true,
    symbol: " ",
    textColor: "bgBlack",
  }),
);

map[0][0] = {
  type: "Forest",
  walkable: true,
  symbol: " ",
  textColor: "bgGreen",
};
map[2][3] = {
  type: "River",
  walkable: false,
  symbol: " ",
  textColor: "bgBlueBright",
};
map[5][5] = {
  type: "Mountain",
  walkable: false,
  symbol: " ",
  textColor: "bgWhiteBright",
};
map[9][9] = {
  type: "Village",
  walkable: true,
  symbol: " ",
  textColor: "bgYellow",
};

function drawMapWithBorders(map: Tile[][]): void {
  const tileWidth = 2;
  const horizontalBorder = chalk.bgRedBright(
    "  " + " ".repeat(map[0].length * tileWidth) + "  ",
  );

  console.log(horizontalBorder);

  for (let row of map) {
    let rowString = row
      .map(tile => chalk[tile.textColor](`${tile.symbol} `))
      .join(""); // Add space for alignment
    console.log(
      chalk.bgRedBright("  ") +
        rowString.padEnd(map[0].length * tileWidth - 1) +
        chalk.bgRedBright("  "),
    ); // Row with borders
  }

  console.log(horizontalBorder);
}

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

console.clear();
drawMapWithBorders(map);
console.log();
main();
