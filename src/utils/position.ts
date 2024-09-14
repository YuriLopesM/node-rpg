import { Coordinate } from "../@types";

export function coordinateToAbsolutePosition(
  position: Coordinate,
  rowLength: number,
) {
  const absolutePosition = position.x * rowLength + position.y + 1;

  return absolutePosition;
}
