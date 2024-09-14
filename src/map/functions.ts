import chalk from "chalk";
import { Coordinate, Map, MapRange, MapSize, Tile } from "../@types";
import { coordinateToAbsolutePosition } from "../utils";

function defaultSetSize(size: MapSize): Map {
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

function setTerrainInRange(map: Map, range: MapRange, templateTile: Tile) {
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

function formatMapPosition(position: Coordinate, rowLength: number) {
  const value = coordinateToAbsolutePosition(position, rowLength);

  if (value < 10) {
    return ` 0${value} `;
  }

  return ` ${value} `;
}

function drawMapWithBorders(map: Map) {
  const borderChalk = chalk.bgGray;
  const space = "  ";

  const tileWidth = 4;
  const horizontalBorder = borderChalk(
    space + " ".repeat(map[0].length * tileWidth) + space,
  );

  console.log(horizontalBorder);

  for (let [rowIndex, row] of map.entries()) {
    let rowString = row
      .map((tile, columnIndex) =>
        chalk[tile.bgColor][tile.textColor](
          formatMapPosition({ x: rowIndex, y: columnIndex }, row.length),
        ),
      )
      .join(""); // Add space for alignment
    console.log(
      borderChalk(space + rowString.padEnd(map[0].length * tileWidth) + space),
    ); // Row with borders
  }

  console.log(horizontalBorder);
}

export { defaultSetSize, drawMapWithBorders, setTerrainInRange };
