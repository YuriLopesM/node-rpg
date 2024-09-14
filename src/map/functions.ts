import chalk from "chalk";
import { Map, MapSize } from "../@types";

export function defaultSetSize(size: MapSize): Map {
  return Array.from({ length: size.height }, () =>
    Array(size.width).fill({
      type: "Empty",
      walkable: true,
      symbol: " ",
      textColor: "bgBlack",
    }),
  );
}

export function drawMapWithBorders(map: Map) {
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
