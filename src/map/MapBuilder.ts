import { Map, MapRange, MapSize } from "../@types";
import {
  defaultSetSize,
  drawMapWithBorders,
  setTerrainInRange,
} from "./functions";

interface Builder {
  map: Map;
  setSize(size: MapSize): Builder;
  setForest(range: MapRange): Builder;
  setRiver(range: MapRange): Builder;
  setMountain(range: MapRange): Builder;
  setVillage(range: MapRange): Builder;
  drawMap(): void;
}

export class MapBuilder implements Builder {
  map: Map = [];

  setSize(size: MapSize) {
    this.map = defaultSetSize(size);
    return this;
  }

  setForest(range: MapRange) {
    this.map = setTerrainInRange(this.map, range, {
      type: "Forest",
      walkable: true,
      bgColor: "bgGreenBright",
      textColor: "black",
    });

    return this;
  }

  setRiver(range: MapRange) {
    this.map = setTerrainInRange(this.map, range, {
      type: "River",
      walkable: false,
      bgColor: "bgBlue",
      textColor: "white",
    });

    return this;
  }

  setMountain(range: MapRange) {
    this.map = setTerrainInRange(this.map, range, {
      type: "Mountain",
      walkable: false,
      bgColor: "bgWhite",
      textColor: "black",
    });

    return this;
  }

  setVillage(range: MapRange) {
    this.map = setTerrainInRange(this.map, range, {
      type: "Village",
      walkable: true,
      bgColor: "bgYellow",
      textColor: "black",
    });

    return this;
  }

  drawMap() {
    drawMapWithBorders(this.map);
  }
}
