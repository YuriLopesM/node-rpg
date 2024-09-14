import { Map, MapSize } from "../@types";
import { defaultSetSize } from "./functions";

interface Builder {
  map: Map;
  setSize(size: MapSize): Map;
  setForest(): Map;
  setRiver(): Map;
  setMountain(): Map;
  setVillage(): Map;
  drawMap(): void;
}

class MapBuilder implements Builder {
  map: Map = [];

  setForest(): Map {
    throw new Error("Method not implemented.");
  }
  setRiver(): Map {
    throw new Error("Method not implemented.");
  }
  setMountain(): Map {
    throw new Error("Method not implemented.");
  }
  setVillage(): Map {
    throw new Error("Method not implemented.");
  }
  drawMap(): void {
    throw new Error("Method not implemented.");
  }
  setSize = defaultSetSize;
}
