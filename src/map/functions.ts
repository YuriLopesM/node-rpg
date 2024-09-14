import chalk from "chalk";
import { Map, MapRange, MapSize, Tile } from "../@types";

export function defaultSetSize(size: MapSize): Map {
  const { height, width } = size;

  if (height < 5 || width < 5) {
    throw new Error("Map size is too short");
  }

  if (height > 10 || width > 10) {
    throw new Error("Map size is too large");
  }

  return Array.from({ length: size.height }, () =>
    Array(size.width).fill({
      type: "Empty",
      walkable: true,
      bgColor: "bgBlack",
      textColor: "white",
    }),
  );
}

export function setTerrainInRange(
  map: Map,
  range: MapRange,
  templateTile: Tile,
) {
  const { start, end } = range;

  if (!map.length) {
    throw new Error("Invalid map");
  }

  if (
    !start ||
    !end ||
    start.x < 0 ||
    start.y < 0 ||
    map.length <= start.x ||
    map[0].length <= start.y
  ) {
    throw new Error("Invalid start or end points");
  }

  if (!templateTile) {
    throw new Error("Invalid template tile");
  }

  for (let i = start.x; i <= end.x; i++) {
    for (let j = start.y; j <= end.y; j++) {
      map[i][j] = templateTile;
    }
  }

  return map;
}

function formatIndex(
  rowIndex: number,
  positionIndex: number,
  rowLength: number,
) {
  const value = rowIndex * rowLength + positionIndex;

  if (value < 10) {
    return ` 0${value}  `;
  }

  return ` ${value}  `;
}

export function drawMapWithBorders(map: Map) {
  const borderChalk = chalk.bgGray;

  const tileWidth = 6;
  const horizontalBorder = borderChalk(
    " " + " ".repeat(map[0].length * tileWidth - 1) + " ",
  );

  console.log(horizontalBorder);
  console.log(horizontalBorder);

  for (let [rowIndex, row] of map.entries()) {
    let rowString = row
      .map((tile, index) =>
        chalk[tile.bgColor][tile.textColor](
          formatIndex(rowIndex, index, row.length),
        ),
      )
      .join(""); // Add space for alignment
    console.log(
      borderChalk("     ") +
        rowString.padEnd(map[0].length * tileWidth - 1) +
        borderChalk("     "),
    ); // Row with borders
  }

  console.log(horizontalBorder);
  console.log(horizontalBorder);
}
